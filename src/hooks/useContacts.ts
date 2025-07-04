import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getContacts, searchContacts, addContact as apiAddContact, deleteContact as apiDeleteContact, createContactProfile as apiCreateContactProfile } from '@/lib/storageUtils';
import { Contact } from '@/lib/types';

// Query key factory
const contactsKeys = {
  all: ['contacts'] as const,
  list: (filters: string) => [...contactsKeys.all, 'list', filters] as const,
  detail: (id: string) => [...contactsKeys.all, 'detail', id] as const,
};

// Hook to fetch/search contacts
export const useContacts = (searchQuery: string = '') => {
  return useQuery({
    queryKey: contactsKeys.list(searchQuery),
    queryFn: () => searchQuery ? searchContacts(searchQuery) : getContacts(),
  });
};

// Hook to add a new contact
export const useAddContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newContact: Omit<Contact, 'id' | 'profileCreated'>) => apiAddContact(newContact),
    onSuccess: () => {
      // Invalidate and refetch all contacts queries
      queryClient.invalidateQueries({ queryKey: contactsKeys.all });
    },
  });
};

// Hook to delete a contact
export const useDeleteContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (contactId: string) => apiDeleteContact(contactId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: contactsKeys.all });
      // Potentially invalidate profiles and logs queries if they are separate
      queryClient.invalidateQueries({ queryKey: ['profiles'] }); // Assuming 'profiles' is a key
      queryClient.invalidateQueries({ queryKey: ['logs'] }); // Assuming 'logs' is a key
    },
  });
};

// Hook to create a contact profile (updates profileCreated flag)
export const useCreateContactProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (contactId: string) => apiCreateContactProfile(contactId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: contactsKeys.all });
      queryClient.invalidateQueries({ queryKey: ['profiles'] }); // Assuming 'profiles' is a key for profiles
    },
  });
};


import { Contact, ContactProfile, Product, TransactionLog } from './types';

// Initial empty contacts array
const MOCK_CONTACTS: Contact[] = [];

// Initial empty profiles array
const MOCK_PROFILES: ContactProfile[] = [];

// Initial empty transaction logs
const MOCK_LOGS: TransactionLog[] = [];

// Local Storage Keys
const CONTACTS_KEY = 'quickbill_contacts';
const PROFILES_KEY = 'quickbill_profiles';
const LOGS_KEY = 'quickbill_logs';

// Initialize storage with mock data if empty
const initializeStorage = () => {
  if (!localStorage.getItem(CONTACTS_KEY)) {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(MOCK_CONTACTS));
  }
  
  if (!localStorage.getItem(PROFILES_KEY)) {
    localStorage.setItem(PROFILES_KEY, JSON.stringify(MOCK_PROFILES));
  }
  
  if (!localStorage.getItem(LOGS_KEY)) {
    localStorage.setItem(LOGS_KEY, JSON.stringify(MOCK_LOGS));
  }
};

// Contact-related functions
export const getContacts = (): Contact[] => {
  initializeStorage();
  const contacts = localStorage.getItem(CONTACTS_KEY);
  return contacts ? JSON.parse(contacts) : [];
};

export const searchContacts = (query: string): Contact[] => {
  const contacts = getContacts();
  if (!query) return contacts;
  
  const lowerQuery = query.toLowerCase();
  return contacts.filter(
    contact => 
      contact.name.toLowerCase().includes(lowerQuery) || 
      contact.phoneNumber.includes(query)
  );
};

export const createContactProfile = (contactId: string): boolean => {
  const contacts = getContacts();
  const updatedContacts = contacts.map(contact => 
    contact.id === contactId 
      ? { ...contact, profileCreated: true } 
      : contact
  );
  
  localStorage.setItem(CONTACTS_KEY, JSON.stringify(updatedContacts));
  
  const contact = contacts.find(c => c.id === contactId);
  if (contact) {
    const profiles = getProfiles();
    const newProfile: ContactProfile = {
      id: Date.now().toString(),
      contactId,
      name: contact.name,
      phoneNumber: contact.phoneNumber,
      products: []
    };
    
    profiles.push(newProfile);
    localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
    return true;
  }
  
  return false;
};

// Profile-related functions
export const getProfiles = (): ContactProfile[] => {
  initializeStorage();
  const profiles = localStorage.getItem(PROFILES_KEY);
  return profiles ? JSON.parse(profiles) : [];
};

export const getProfileById = (profileId: string): ContactProfile | undefined => {
  const profiles = getProfiles();
  return profiles.find(profile => profile.id === profileId);
};

export const getProfileByContactId = (contactId: string): ContactProfile | undefined => {
  const profiles = getProfiles();
  return profiles.find(profile => profile.contactId === contactId);
};

export const addProductToProfile = (profileId: string, product: Omit<Product, 'id'>): boolean => {
  const profiles = getProfiles();
  const profileIndex = profiles.findIndex(p => p.id === profileId);
  
  if (profileIndex === -1) return false;
  
  const newProduct: Product = {
    id: Date.now().toString(),
    ...product
  };
  
  profiles[profileIndex].products.push(newProduct);
  localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
  return true;
};

export const updateProduct = (
  profileId: string, 
  productId: string, 
  updates: Partial<Product>
): boolean => {
  const profiles = getProfiles();
  const profileIndex = profiles.findIndex(p => p.id === profileId);
  
  if (profileIndex === -1) return false;
  
  const productIndex = profiles[profileIndex].products.findIndex(p => p.id === productId);
  if (productIndex === -1) return false;
  
  profiles[profileIndex].products[productIndex] = {
    ...profiles[profileIndex].products[productIndex],
    ...updates
  };
  
  localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
  return true;
};

// Transaction logs functions
export const getLogs = (): TransactionLog[] => {
  initializeStorage();
  const logs = localStorage.getItem(LOGS_KEY);
  return logs ? JSON.parse(logs) : [];
};

export const getLogsByContactId = (contactId: string): TransactionLog[] => {
  const logs = getLogs();
  return logs.filter(log => log.contactId === contactId);
};

export const addTransactionLog = (log: Omit<TransactionLog, 'id'>): void => {
  const logs = getLogs();
  const newLog: TransactionLog = {
    id: Date.now().toString(),
    ...log
  };
  
  logs.push(newLog);
  localStorage.setItem(LOGS_KEY, JSON.stringify(logs));
};

export const searchLogs = (query: string): TransactionLog[] => {
  const logs = getLogs();
  if (!query) return logs;
  
  const lowerQuery = query.toLowerCase();
  return logs.filter(
    log => 
      log.contactName.toLowerCase().includes(lowerQuery) || 
      log.content.toLowerCase().includes(lowerQuery)
  );
};

// Add new contact function
export const addContact = (contact: Omit<Contact, 'id'>): boolean => {
  const contacts = getContacts();
  const newContact: Contact = {
    id: Date.now().toString(),
    ...contact,
    profileCreated: false
  };
  
  contacts.push(newContact);
  localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  return true;
};

// Delete contact function
export const deleteContact = (contactId: string): boolean => {
  const contacts = getContacts();
  const updatedContacts = contacts.filter(contact => contact.id !== contactId);
  localStorage.setItem(CONTACTS_KEY, JSON.stringify(updatedContacts));
  
  // Also remove associated profile if exists
  const profiles = getProfiles();
  const updatedProfiles = profiles.filter(profile => profile.contactId !== contactId);
  localStorage.setItem(PROFILES_KEY, JSON.stringify(updatedProfiles));
  
  // Also remove associated transaction logs
  const logs = getLogs();
  const updatedLogs = logs.filter(log => log.contactId !== contactId);
  localStorage.setItem(LOGS_KEY, JSON.stringify(updatedLogs));
  
  return true;
};

import { getCollectionById, getCollectionImages } from "@/app/actions/collection-actions";
import CollectionEditor from "./CollectionEditor";
import { notFound } from "next/navigation";

export default async function EditCollectionPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  // If "new", render empty editor
  if (id === "new") {
    return <CollectionEditor />;
  }

  const collection = await getCollectionById(id);
  
  if (!collection) {
    notFound();
  }

  const images = await getCollectionImages(id);

  return (
    <CollectionEditor 
      collection={collection} 
      images={images} 
    />
  );
}

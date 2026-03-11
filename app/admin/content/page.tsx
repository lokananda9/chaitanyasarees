import { getSiteContent, SITE_CONTENT_EDITOR_SECTIONS } from "@/lib/site-content";
import ContentEditor from "@/app/admin/content/ContentEditor";

export default async function AdminContentPage() {
  const content = await getSiteContent();

  return (
    <ContentEditor
      sections={SITE_CONTENT_EDITOR_SECTIONS}
      content={content}
    />
  );
}

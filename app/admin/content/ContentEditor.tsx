"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ExternalLink, Loader2, Save } from "lucide-react";

import { updateSiteContent } from "@/app/actions/site-content-actions";
import type {
  SiteContent,
  SiteContentEditorSection,
  SiteContentField,
} from "@/lib/site-content";

function ContentField({
  field,
  value,
}: {
  field: SiteContentField;
  value: string;
}) {
  const sharedClassName =
    "block w-full rounded-2xl border-0 bg-white px-4 py-3 text-sm text-[#241712] shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-[#8d4a54]";

  return (
    <div className={field.multiline ? "md:col-span-2" : ""}>
      <label
        htmlFor={field.key}
        className="text-sm font-medium text-stone-700"
      >
        {field.label}
      </label>
      {field.description ? (
        <p className="mt-1 text-xs leading-5 text-stone-500">
          {field.description}
        </p>
      ) : null}
      {field.multiline ? (
        <textarea
          id={field.key}
          name={field.key}
          defaultValue={value}
          rows={field.rows ?? 4}
          placeholder={field.placeholder}
          className={`${sharedClassName} mt-2 resize-y`}
        />
      ) : (
        <input
          id={field.key}
          name={field.key}
          type={field.type ?? "text"}
          inputMode={field.inputMode}
          defaultValue={value}
          placeholder={field.placeholder}
          className={`${sharedClassName} mt-2`}
        />
      )}
    </div>
  );
}

export default function ContentEditor({
  sections,
  content,
}: {
  sections: SiteContentEditorSection[];
  content: SiteContent;
}) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  async function handleSave(formData: FormData) {
    setSaving(true);

    try {
      await updateSiteContent(formData);
      router.refresh();
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex items-start gap-4">
          <Link
            href="/admin"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-600 transition-colors hover:bg-stone-200"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#241712]">
              Website Copy Editor
            </h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-stone-500">
              Edit the public text across the homepage, footer, and collection template. Changes save into SQLite and publish on the live site after save.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2.5 text-sm font-semibold text-stone-700 transition-all hover:bg-stone-50"
          >
            <ExternalLink className="h-4 w-4" />
            View Live Site
          </Link>
        </div>
      </div>

      <form action={handleSave} className="space-y-6">
        {sections.map((section) => (
          <section
            key={section.id}
            className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8d4a54]">
                {section.title}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-[#241712]">
                {section.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-stone-500">
                {section.description}
              </p>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {section.fields.map((field) => (
                <ContentField
                  key={field.key}
                  field={field}
                  value={content[field.key]}
                />
              ))}
            </div>
          </section>
        ))}

        <div className="sticky bottom-6 z-20 flex justify-end">
          <div className="flex items-center gap-3 rounded-full border border-stone-200 bg-white/95 p-2 pl-4 shadow-lg backdrop-blur">
            <p className="text-sm text-stone-500">
              Save publishes the updated website copy.
            </p>
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-full bg-[#241712] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#8d4a54] disabled:opacity-70"
            >
              {saving ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Save className="h-4 w-4" />
              )}
              Save Website Copy
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

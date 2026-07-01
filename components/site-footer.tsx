import type { SiteContent } from "@/lib/site-content";

export function SiteFooter({ content }: { content: SiteContent }) {
  return (
    <footer className="px-4 pb-8 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] border border-white/20 bg-[linear-gradient(160deg,#a05060,#8d4a54,#7a3d47)] px-6 py-12 text-center text-white shadow-[0_34px_90px_rgba(141,74,84,0.36)] sm:px-10 sm:py-16">
        
        <p className="font-display whitespace-pre-line text-2xl leading-relaxed sm:text-3xl md:text-4xl">
          {content.footer_message}
        </p>

        <div className="mx-auto mt-10 max-w-md border-t border-white/8 pt-8 text-[12px] text-white/35">
          © {new Date().getFullYear()} {content.site_name}. {content.footer_rights_text}
        </div>

      </div>
    </footer>
  );
}

export function SiteFooter() {
  return (
    <footer className="px-4 pb-8 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] border border-white/12 bg-[linear-gradient(160deg,rgba(34,21,18,0.97),rgba(19,12,10,0.98))] px-6 py-12 text-center text-white shadow-[0_34px_90px_rgba(0,0,0,0.22)] sm:px-10 sm:py-16">
        
        <p className="font-display text-2xl leading-relaxed sm:text-3xl md:text-4xl">
          We’d love to welcome you—come visit us and explore our beautiful saree collection
        </p>

        <div className="mx-auto mt-10 max-w-md border-t border-white/8 pt-8 text-[12px] text-white/35">
          © {new Date().getFullYear()} Chaitanya Sarees. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

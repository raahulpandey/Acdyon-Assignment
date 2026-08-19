const navLinks = [
  { label: "Features",    href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Philosophy",  href: "#philosophy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start justify-between gap-8">
        <div>
          <a href="#" className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-md bg-indigo-500 flex items-center justify-center shrink-0">
              <div className="w-1.5 h-1.5 bg-white rounded-sm" />
            </div>
            <p className="text-white font-semibold text-sm">Acdyon</p>
          </a>
          <p className="text-zinc-600 text-sm pl-7">
            CSV in. Dashboard out.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-6 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-zinc-500 hover:text-white text-sm transition-colors duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-zinc-700 text-xs">
          &copy; {new Date().getFullYear()} Acdyon Technologies
        </p>
        <p className="text-zinc-700 text-xs">
          Built for the Acdyon Frontend Challenge
        </p>
      </div>
    </footer>
  );
}

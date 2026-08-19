import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "border-b border-white/[0.06] bg-[#09090b]/80 backdrop-blur-md"
          : ""
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="flex items-center gap-2.5 text-white font-semibold text-base tracking-tight"
        >
          <div className="w-6 h-6 rounded-md bg-indigo-500 flex items-center justify-center shrink-0">
            <div className="w-2 h-2 bg-white rounded-sm" />
          </div>
          Acdyon
        </a>

        <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
          <li>
            <a
              href="#features"
              className="text-zinc-500 hover:text-white text-sm transition-colors duration-150"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#how-it-works"
              className="text-zinc-500 hover:text-white text-sm transition-colors duration-150"
            >
              How it works
            </a>
          </li>
          <li>
            <a
              href="#philosophy"
              className="text-zinc-500 hover:text-white text-sm transition-colors duration-150"
            >
              Philosophy
            </a>
          </li>
        </ul>

        <a
          href="#demo"
          className="bg-white hover:bg-zinc-100 text-zinc-900 text-sm font-semibold px-4 py-1.5 rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#09090b]"
        >
          Try the demo
        </a>
      </nav>
    </header>
  );
}

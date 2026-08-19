export default function Hero() {
  return (
    <section className="relative pt-40 pb-28 px-6 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% -10%, rgba(99,102,241,0.18) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px -z-10"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.4) 50%, transparent 100%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px #34d399" }} />
          <span className="text-zinc-500 text-xs font-medium tracking-widest uppercase">
            Analytics, rethought
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-extrabold text-white leading-[1.03] tracking-tighter mb-6 max-w-4xl">
          Your spreadsheet<br className="hidden sm:block" /> is not a{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #c084fc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            dashboard.
          </span>
        </h1>

        <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed max-w-xl mb-10">
          Acdyon reads your CSV and builds a live, shareable dashboard
          instantly. No SQL. No setup. No waiting for the data team.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#demo"
            className="inline-flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-[#09090b]"
            style={{ boxShadow: "0 0 24px rgba(99,102,241,0.35)" }}
          >
            Upload a sample file
            <svg
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2 focus:ring-offset-[#09090b]"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}

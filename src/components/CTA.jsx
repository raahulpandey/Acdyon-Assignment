export default function CTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold tracking-tighter leading-[1.05] mb-5">
          <span className="text-white">Upload your first file.</span>
          <br />
          <span className="text-zinc-500">It takes 30 seconds.</span>
        </h2>

        <p className="text-zinc-400 text-lg leading-relaxed max-w-md mx-auto mb-10">
          No credit card. No account setup. No data team required. Just a CSV
          and a question you want answered.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#demo"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-9 py-3.5 rounded-xl text-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-[#09090b]"
            style={{ boxShadow: "0 0 30px rgba(99,102,241,0.3)" }}
          >
            Start with sample data
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-zinc-400 hover:text-white font-semibold px-9 py-3.5 rounded-xl text-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2 focus:ring-offset-[#09090b]"
          >
            View source on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}

const principles = [
  {
    title: "Data should be immediate",
    body: "No loading spinners. No reports that compile overnight. Analysis should happen as fast as you can think. If there is a delay, we treat it as a bug.",
  },
  {
    title: "Your CSV is yours",
    body: "We do not store your data. Acdyon reads it, transforms it, and forgets it. Zero lock-in is a first-class design requirement, not a feature we added later.",
  },
  {
    title: "Complexity is a bug",
    body: "If a feature requires a tooltip to explain it, we have already failed. We choose clarity over capability every time. A simpler tool that gets used beats a powerful tool that doesn't.",
  },
];

export default function DeveloperPhilosophy() {
  return (
    <section id="philosophy" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
            How we think.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Most analytics tools are designed by people who love analytics
            tools. We are designed for people who just want answers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {principles.map((p, i) => (
            <div key={p.title}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-indigo-400 font-mono text-xs font-bold tracking-wider">
                  0{i + 1}
                </span>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>
              <h3 className="text-white font-semibold text-base mb-3">
                {p.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

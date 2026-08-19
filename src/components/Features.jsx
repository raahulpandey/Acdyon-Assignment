const features = [
  {
    title: "Zero configuration",
    description:
      "Drop in a CSV. Acdyon infers your column types and relationships automatically. No schema to define, no mapping to set up.",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Built for speed",
    description:
      "From upload to dashboard in under two seconds. We treat every millisecond of wait time as a design failure, not an acceptable tradeoff.",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Share with one link",
    description:
      "Every dashboard gets a permanent, read-only URL the moment it's built. Send it to anyone — no account required on their end.",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
            Everything you need.<br />Nothing you don't.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Acdyon stays out of your way so you can focus on the insight, not
            the tooling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-zinc-900/60 border border-white/[0.07] rounded-2xl p-7 hover:border-indigo-500/30 hover:bg-zinc-900/80 transition-all duration-300"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
                style={{ boxShadow: "0 0 40px rgba(99,102,241,0.07)" }}
              />

              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5">
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold text-base mb-2">
                {feature.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

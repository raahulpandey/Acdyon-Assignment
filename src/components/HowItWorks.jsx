const steps = [
  {
    number: "01",
    title: "Export your data",
    description:
      "Any tool can export a CSV. Google Sheets, Notion, Airtable, Postgres — if it can export, Acdyon can read it.",
  },
  {
    number: "02",
    title: "Upload to Acdyon",
    description:
      "We parse your file, detect column types, and compute summaries instantly. No configuration dialogs.",
  },
  {
    number: "03",
    title: "Share the dashboard",
    description:
      "Your dashboard is live. Copy the link and send it to your team. It updates every time you re-upload.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
            Up and running in minutes.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Three steps from raw spreadsheet to a dashboard your whole team
            trusts.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="relative md:flex-1">
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden md:block absolute top-4 left-[calc(50%+20px)] right-0 h-px bg-white/[0.06]"
                />
              )}

              <div className="relative flex md:flex-col gap-5 md:gap-4 md:pr-10">
                <div className="shrink-0 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400 font-mono text-xs font-semibold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

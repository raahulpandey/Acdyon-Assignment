import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Data ────────────────────────────────────────────────────────────────────

const csvRows = [
  { date: "Aug 01", revenue: 12400, orders: 87,  conversion: "3.2%" },
  { date: "Aug 02", revenue: 15200, orders: 103, conversion: "3.8%" },
  { date: "Aug 03", revenue: 9800,  orders: 71,  conversion: "2.9%" },
  { date: "Aug 04", revenue: 18100, orders: 124, conversion: "4.1%" },
  { date: "Aug 05", revenue: 22300, orders: 156, conversion: "4.7%" },
  { date: "Aug 06", revenue: 16800, orders: 112, conversion: "3.9%" },
  { date: "Aug 07", revenue: 19500, orders: 138, conversion: "4.3%" },
];

const totalRevenue = csvRows.reduce((sum, row) => sum + row.revenue, 0);
const totalOrders  = csvRows.reduce((sum, row) => sum + row.orders,  0);
const peakDay      = csvRows.reduce((best, row) => row.revenue > best.revenue ? row : best, csvRows[0]);
const maxRevenue   = Math.max(...csvRows.map((row) => row.revenue));

const kpis = [
  { label: "Total Revenue",   value: `$${totalRevenue.toLocaleString()}` },
  { label: "Total Orders",    value: totalOrders.toLocaleString() },
  { label: "Peak Day",        value: peakDay.date },
  { label: "Best Conversion", value: "4.7%" },
];

const STEPS = [
  "Reading your data",
  "Finding patterns",
  "Generating visualizations",
  "Dashboard ready",
];

const insights = [
  {
    emoji: "📈",
    heading: "Revenue grew 57% over 7 days",
    body: "From $12,400 on Aug 01 to $19,500 on Aug 07 — a consistent upward trend.",
  },
  {
    emoji: "🎯",
    heading: "Peak day: Aug 05 at $22,300",
    body: "27% above the 7-day average. Highest orders (156) and best conversion (4.7%) on the same day.",
  },
  {
    emoji: "⚡",
    heading: "Traffic quality is rising",
    body: "Your busiest days also have the best conversion rates — more visitors and better visitors.",
  },
];

const chartReasons = [
  {
    chart: "Bar chart",
    reason:
      "Revenue is a daily numeric value. Side-by-side bars make day-over-day change immediately visible.",
  },
  {
    chart: "Data table",
    reason:
      "Raw rows sit alongside charts so you can verify every number Acdyon used — no black boxes.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function KpiCard({ label, value }) {
  return (
    <div className="bg-zinc-900/80 border border-white/[0.07] rounded-xl p-4">
      <p className="text-zinc-500 text-xs font-medium uppercase tracking-wide mb-2">
        {label}
      </p>
      <p className="text-white text-2xl font-bold">{value}</p>
    </div>
  );
}

function BarChart() {
  return (
    <div className="bg-zinc-900/80 border border-white/[0.07] rounded-xl p-5">
      <p className="text-white text-sm font-semibold mb-4">Daily Revenue</p>
      {/* FIX: No items-end on outer container. Columns stretch to h-32 (128px).
          Bar height percentage is then relative to that concrete 128px. */}
      <div className="flex gap-2 h-32">
        {csvRows.map((row) => {
          const heightPct = Math.round((row.revenue / maxRevenue) * 100);
          return (
            <div
              key={row.date}
              className="flex-1 flex flex-col justify-end items-center gap-1"
            >
              <div
                className="w-full rounded-t-sm bg-indigo-500 hover:bg-indigo-400 transition-colors duration-150"
                style={{ height: `${heightPct}%` }}
                title={`${row.date}: $${row.revenue.toLocaleString()}`}
              />
              <span className="text-zinc-600 text-[10px] shrink-0">
                {row.date.split(" ")[1]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DataTable() {
  return (
    <div className="bg-zinc-900/80 border border-white/[0.07] rounded-xl overflow-hidden">
      <div className="px-5 py-4 border-b border-white/[0.06]">
        <p className="text-white text-sm font-semibold">
          acdyon_sample.csv — raw rows
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-zinc-500 text-xs border-b border-white/[0.05]">
              <th className="text-left font-medium px-5 py-2.5">Date</th>
              <th className="text-right font-medium px-5 py-2.5">Revenue</th>
              <th className="text-right font-medium px-5 py-2.5">Orders</th>
              <th className="text-right font-medium px-5 py-2.5">Conv.</th>
            </tr>
          </thead>
          <tbody>
            {csvRows.map((row) => (
              <tr
                key={row.date}
                className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors duration-100"
              >
                <td className="px-5 py-3 text-zinc-300">{row.date}</td>
                <td className="px-5 py-3 text-right text-zinc-300">
                  ${row.revenue.toLocaleString()}
                </td>
                <td className="px-5 py-3 text-right text-zinc-400">
                  {row.orders}
                </td>
                <td className="px-5 py-3 text-right text-zinc-400">
                  {row.conversion}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ProcessingTimeline({ activeStep }) {
  return (
    <div className="flex flex-col gap-3.5 py-1">
      {STEPS.map((step, i) => {
        const stepNumber  = i + 1;
        const isVisible   = activeStep >= stepNumber;
        const isCompleted = activeStep > stepNumber;
        const isActive    = activeStep === stepNumber;

        if (!isVisible) return null;

        return (
          <div key={step} className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                isCompleted
                  ? "bg-emerald-500"
                  : "bg-zinc-800 border border-zinc-700"
              }`}
            >
              {isCompleted && (
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 5l3.5 3.5L11 1"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {isActive && (
                <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              )}
            </div>
            <span
              className={`text-sm transition-colors duration-200 ${
                isCompleted
                  ? "text-zinc-500"
                  : isActive
                  ? "text-white font-medium"
                  : "text-zinc-600"
              }`}
            >
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function InsightsPanel() {
  return (
    <div className="bg-zinc-900/80 border border-white/[0.07] rounded-2xl overflow-hidden">
      <div className="px-6 py-4 border-b border-white/[0.06] flex items-center gap-2.5">
        <span aria-hidden="true" className="text-base">✨</span>
        <p className="text-white font-semibold text-sm">What Acdyon found</p>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/[0.06]">
        {insights.map((item) => (
          <div key={item.heading}>
            <div className="flex items-start gap-2 mb-1.5">
              <span className="text-sm leading-5 shrink-0" aria-hidden="true">
                {item.emoji}
              </span>
              <p className="text-white text-sm font-medium">{item.heading}</p>
            </div>
            <p className="text-zinc-500 text-xs leading-relaxed pl-5">
              {item.body}
            </p>
          </div>
        ))}
      </div>

      <div className="px-6 py-5">
        <p className="text-zinc-600 text-xs font-semibold uppercase tracking-wider mb-3">
          Why these charts?
        </p>
        <div className="flex flex-col sm:flex-row gap-5">
          {chartReasons.map((item) => (
            <div key={item.chart} className="flex-1">
              <p className="text-zinc-400 text-xs font-medium mb-1">
                {item.chart}
              </p>
              <p className="text-zinc-600 text-xs leading-relaxed">
                {item.reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function InteractiveDemo() {
  const [stage, setStage] = useState("idle");
  // "idle" | "dragging" | "processing" | "done"

  const [activeStep, setActiveStep]     = useState(0);
  const [showInsights, setShowInsights] = useState(false);

  // Tracks nested dragenter/dragleave pairs to avoid flicker over child elements
  const dragCounter = useRef(0);

  useEffect(() => {
    if (stage !== "processing") return;

    setActiveStep(1);
    const t1 = setTimeout(() => setActiveStep(2), 550);
    const t2 = setTimeout(() => setActiveStep(3), 1050);
    const t3 = setTimeout(() => setActiveStep(4), 1450);
    const t4 = setTimeout(() => setActiveStep(5), 1650);
    const t5 = setTimeout(() => setStage("done"),  1800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [stage]);

  useEffect(() => {
    if (stage !== "done") return;
    const t = setTimeout(() => setShowInsights(true), 350);
    return () => clearTimeout(t);
  }, [stage]);

  function startProcessing() {
    setStage("processing");
  }

  function handleDragEnter(e) {
    e.preventDefault();
    dragCounter.current += 1;
    if (stage === "idle") setStage("dragging");
  }

  function handleDragLeave() {
    dragCounter.current -= 1;
    if (dragCounter.current === 0 && stage === "dragging") {
      setStage("idle");
    }
  }

  // preventDefault is required on dragover for the drop event to fire
  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    e.preventDefault();
    dragCounter.current = 0;
    startProcessing();
  }

  function handleReset() {
    setStage("idle");
    setActiveStep(0);
    setShowInsights(false);
    dragCounter.current = 0;
  }

  const isDragging    = stage === "dragging";
  const isUploadPhase = stage === "idle" || stage === "dragging" || stage === "processing";

  return (
    <section id="demo" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
            See it work. Right now.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Drop a CSV below — or click to browse. Acdyon parses your data and
            builds a live dashboard in under two seconds.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {isUploadPhase ? (
            <motion.div
              key="upload-card"
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25, ease: "easeIn" }}
            >
              {stage !== "processing" ? (
                // ── Drop zone ────────────────────────────────────────────────
                <label
                  htmlFor="csv-input"
                  className={`block cursor-pointer max-w-lg rounded-2xl border-2 border-dashed p-12 text-center transition-all duration-200 ${
                    isDragging
                      ? "border-indigo-500 bg-indigo-500/[0.06]"
                      : "border-zinc-800 hover:border-zinc-600 hover:bg-white/[0.02]"
                  }`}
                  style={
                    isDragging
                      ? { boxShadow: "0 0 60px rgba(99,102,241,0.18)" }
                      : {}
                  }
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-5 transition-colors duration-200 ${
                      isDragging ? "bg-indigo-500/20" : "bg-zinc-800"
                    }`}
                  >
                    <svg
                      width="22"
                      height="22"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      className={isDragging ? "text-indigo-300" : "text-zinc-400"}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                      />
                    </svg>
                  </div>

                  {isDragging ? (
                    <p className="text-indigo-300 text-base font-semibold">
                      Release to upload ↓
                    </p>
                  ) : (
                    <>
                      <p className="text-white font-semibold text-base mb-1.5">
                        Drop your CSV here
                      </p>
                      <p className="text-zinc-500 text-sm mb-5">
                        or{" "}
                        <span className="text-indigo-400 underline underline-offset-2">
                          browse files
                        </span>
                      </p>
                      <div className="flex items-center justify-center gap-2 text-xs">
                        <span className="bg-zinc-800/80 border border-zinc-700 text-zinc-500 px-2 py-0.5 rounded">
                          .csv
                        </span>
                        <span className="text-zinc-700">·</span>
                        <span className="text-zinc-700">up to 10 MB</span>
                      </div>
                    </>
                  )}

                  <input
                    id="csv-input"
                    type="file"
                    accept=".csv"
                    className="sr-only"
                    onChange={() => startProcessing()}
                  />
                </label>
              ) : (
                // ── Processing timeline ──────────────────────────────────────
                <div className="bg-zinc-900/80 border border-white/[0.07] rounded-2xl p-8 max-w-sm">
                  <div className="flex items-center gap-3 mb-7">
                    <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        className="text-zinc-400"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">
                        acdyon_sample.csv
                      </p>
                      <p className="text-zinc-500 text-xs">
                        7 rows · 4 columns · 1.2 KB
                      </p>
                    </div>
                  </div>
                  <ProcessingTimeline activeStep={activeStep} />
                </div>
              )}
            </motion.div>
          ) : (
            // ── Dashboard ────────────────────────────────────────────────────
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                <div>
                  <p className="text-white font-semibold">
                    acdyon_sample.csv — Dashboard
                  </p>
                  <p className="text-zinc-500 text-sm">
                    7 rows · generated in 1.8s
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="text-zinc-400 hover:text-white text-sm border border-zinc-800 hover:border-zinc-600 px-3 py-1.5 rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2 focus:ring-offset-[#09090b]"
                >
                  Upload another ↩
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                {kpis.map((kpi) => (
                  <KpiCard key={kpi.label} {...kpi} />
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <BarChart />
                <DataTable />
              </div>

              <AnimatePresence>
                {showInsights && (
                  <motion.div
                    key="insights"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <InsightsPanel />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

import React from "react";

export default function Dashboard() {
  const styles = {
    sectionLabel:
      "text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500",
    beforeLabel:
      "text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-zinc-500",
    nowLabel:
      "text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#2563eb]",
    beforeText: "text-base sm:text-lg font-medium text-zinc-500",
    nowText: "text-zinc-900 font-medium tracking-tight",
    bodyText: "text-sm leading-relaxed text-zinc-600",
    surface:
      "relative rounded-[24px] sm:rounded-[32px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.02),0_20px_40px_-12px_rgba(0,0,0,0.03)]",
    metricCard:
      "relative flex flex-col rounded-[24px] sm:rounded-[32px] bg-white p-6 sm:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.02),0_20px_40px_-12px_rgba(0,0,0,0.03)] overflow-hidden",
    beforePanel:
      "rounded-2xl bg-zinc-50 p-4 sm:p-6",
    nowPanel:
      "rounded-2xl bg-gradient-to-br from-[#2563eb]/[0.06] to-[#2563eb]/[0.01] p-4 sm:p-6",
    meaningPanel:
      "mt-6 sm:mt-8 rounded-2xl bg-zinc-50/50 p-4 sm:p-6",
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-zinc-900 antialiased selection:bg-[#2563eb]/10 selection:text-[#2563eb]">
      <div className="relative px-4 sm:px-6 py-8 sm:py-16 mx-auto max-w-7xl lg:py-24">
        
        {/* Header */}
        <header className={styles.surface + " mb-6 sm:mb-10 p-6 sm:p-10 md:p-14 overflow-hidden"}>
          <div className="absolute top-0 left-0 w-full h-1 sm:h-1.5 bg-gradient-to-r from-[#2563eb]/20 via-[#2563eb]/80 to-[#2563eb]/20" />
          <div className="absolute -right-20 -top-20 h-64 sm:h-80 w-64 sm:w-80 rounded-full bg-[#2563eb]/[0.03] blur-[80px] sm:blur-[100px]" />
          
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-10">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-[#2563eb] text-white shadow-[0_8px_20px_-4px_rgba(37,99,235,0.4)]">
                  <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-white shadow-sm" />
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <p className="text-[10px] sm:text-sm font-bold tracking-[0.15em] sm:tracking-widest uppercase text-zinc-900">Momentum Report</p>
                  <div className="hidden h-px w-12 sm:w-16 bg-[#2563eb]/20 sm:block" />
                </div>
              </div>

              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-zinc-900 leading-[1.1] sm:leading-[1]">
                FoodieClub Pilot <span className="text-zinc-200 font-light hidden sm:inline">|</span><span className="sm:hidden text-zinc-300">|</span> Week 1
              </h1>
            </div>

            <div className="grid gap-4 sm:gap-5">
              <div className="rounded-[20px] sm:rounded-[24px] bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 sm:p-8 text-white shadow-xl">
                <p className="text-lg sm:text-xl font-medium leading-snug tracking-tight">
                  We are starting to break the skepticism that was blocking
                  signups.
                </p>
              </div>

              <div className="rounded-[20px] sm:rounded-[24px] bg-gradient-to-br from-[#2563eb]/[0.08] to-transparent p-6 sm:p-8">
                <p className="text-sm sm:text-base font-medium leading-relaxed text-zinc-700">
                  The conversation is already shifting from doubt to curiosity.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Metrics Grid */}
        <div className="grid gap-6 sm:gap-8 mb-8 sm:mb-10 xl:grid-cols-3">
          
          {/* Card 1 */}
          <section className={styles.metricCard}>
            <div className="flex items-center justify-between gap-4 mb-8 sm:mb-10">
              <h3 className={styles.sectionLabel}>01. Search Visibility</h3>
              <div className="flex-1 h-px bg-zinc-100/80" />
            </div>

            <div className="grid flex-1 gap-4 sm:gap-5">
              <div className={styles.beforePanel}>
                <p className={styles.beforeLabel}>Before</p>
                <p className={styles.beforeText + " mt-2 sm:mt-3"}>0 of 5 controlled</p>
              </div>

              <div className={styles.nowPanel}>
                <p className={styles.nowLabel}>Now</p>
                <div className="flex items-baseline gap-2 mt-2 sm:mt-3">
                  <span className="text-5xl sm:text-6xl font-bold tracking-tighter text-[#2563eb]">
                    2
                  </span>
                  <span className="text-xl sm:text-2xl font-semibold text-[#2563eb]/30">
                    of 5
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 rounded-2xl bg-[#2563eb]/[0.08] p-5 sm:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#2563eb]" />
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#2563eb]">Insights</span>
              </div>
              <p className="text-sm sm:text-[15px] leading-relaxed text-zinc-900 font-bold tracking-tight">
                Users searching FoodieClub are no longer seeing only skeptical
                threads.
              </p>
            </div>
          </section>

          {/* Card 2 */}
          <section className={styles.metricCard}>
            <div className="flex items-center justify-between gap-4 mb-8 sm:mb-10">
              <h3 className={styles.sectionLabel}>02. Conversation Shift</h3>
              <div className="flex-1 h-px bg-zinc-100/80" />
            </div>

            <div className="grid flex-1 gap-4 sm:gap-5">
              <div className={styles.beforePanel}>
                <p className={styles.beforeLabel}>Before (Doubt)</p>
                <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                  <p className="text-lg sm:text-xl italic font-medium text-zinc-500">
                    “Is this legit?”
                  </p>
                  <p className="text-lg sm:text-xl italic font-medium text-zinc-500">
                    “Sounds like a scam”
                  </p>
                </div>
              </div>

              <div className={styles.nowPanel}>
                <p className={styles.nowLabel}>Now (Curiosity)</p>
                <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                  <p className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-900">
                    “How do the off hours deals work?”
                  </p>
                  <p className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-900">
                    “Has anyone tried it?”
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Card 3 */}
          <section className={styles.metricCard}>
            <div className="flex items-center justify-between gap-4 mb-8 sm:mb-10">
              <h3 className={styles.sectionLabel}>03. Sentiment Direction</h3>
              <div className="flex-1 h-px bg-zinc-100/80" />
            </div>

            <div className="grid flex-1 gap-4 sm:gap-5">
              <div className={styles.beforePanel}>
                <p className={styles.beforeLabel}>Before</p>
                <p className={styles.beforeText + " mt-2 sm:mt-3"}>Mostly negative</p>
              </div>

              <div className={styles.nowPanel}>
                <p className={styles.nowLabel}>Now</p>
                <p className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3 sm:mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
                  Mixed <span className="text-[#2563eb]/30">→</span>{" "}
                  <span className="inline-flex items-center rounded-xl bg-[#2563eb] px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white shadow-[0_4px_12px_-2px_rgba(37,99,235,0.3)]">
                    trending neutral
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 rounded-2xl bg-[#2563eb]/[0.08] p-5 sm:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#2563eb]" />
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#2563eb]">Insights</span>
              </div>
              <p className="text-sm sm:text-[15px] leading-relaxed text-zinc-900 font-bold tracking-tight">
                The skepticism barrier is starting to break as users understand how the product works.
              </p>
            </div>
          </section>

          {/* Proof Section */}
          <section className={styles.metricCard + " xl:col-span-3"}>
            <div className="flex items-center justify-between gap-4 mb-8 sm:mb-10">
              <h3 className={styles.sectionLabel}>04. Proof</h3>
              <div className="flex-1 h-px bg-zinc-100/80" />
            </div>

            <div className="mb-8 space-y-1.5">
              <p className={styles.nowLabel}>Reddit Thread (r/san_francisco)</p>
              <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">“Is Foodieclub actually legit?”</h4>
            </div>

            <div className="overflow-x-auto -mx-6 sm:mx-0">
              <div className="inline-block min-w-full align-middle px-6 sm:px-0">
                <table className="min-w-full border-separate border-spacing-y-2">
                  <thead>
                    <tr>
                      <th scope="col" className="px-4 py-3 text-left text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Type</th>
                      <th scope="col" className="px-4 py-3 text-left text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Content</th>
                      <th scope="col" className="px-4 py-3 text-left text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Insight</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-zinc-50/50 rounded-xl overflow-hidden">
                      <td className="px-4 py-4 whitespace-nowrap text-xs font-bold text-zinc-500">Original Post (Skepticism)</td>
                      <td className="px-4 py-4 text-sm font-medium text-zinc-700">“Is Foodieclub actually legit? 50% off seems too good to be true.”</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center rounded-lg bg-zinc-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-600">Initial user doubt</span>
                      </td>
                    </tr>
                    <tr className="bg-zinc-50/50 rounded-xl overflow-hidden border-l-2 border-[#2563eb]">
                      <td className="px-4 py-4 whitespace-nowrap text-xs font-bold text-[#2563eb]">Reply (User Experience)</td>
                      <td className="px-4 py-4 text-sm font-medium text-zinc-700">“Actually been using Foodieclub for about 4 months now. It’s legit - got decent discounts at places like dumpling home.”</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center rounded-lg bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">Real user validation</span>
                      </td>
                    </tr>
                    <tr className="bg-zinc-50/50 rounded-xl overflow-hidden">
                      <td className="px-4 py-4 whitespace-nowrap text-xs font-bold text-[#2563eb]">Reply (Explanation)</td>
                      <td className="px-4 py-4 text-sm font-medium text-zinc-700">“The discount model works because restaurants use us to fill tables during quieter periods. The savings are real.”</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center rounded-lg bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700">Clear product understanding</span>
                      </td>
                    </tr>
                    <tr className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg">
                      <td className="px-4 py-4 whitespace-nowrap text-xs font-bold text-white">Outcome</td>
                      <td className="px-4 py-4 text-sm font-bold text-white">Conversation shifts from 'is this legit?' to 'how does it work?'</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center rounded-lg bg-[#2563eb] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">Curiosity replaces skepticism</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 rounded-2xl bg-[#2563eb]/[0.08] p-5 sm:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#2563eb]" />
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#2563eb]">Momentum</span>
              </div>
              <p className="text-sm sm:text-[15px] leading-relaxed text-zinc-900 font-bold tracking-tight">
                Users are no longer just questioning legitimacy. They are seeing real usage and clear explanations of how the product works.
              </p>
            </div>
          </section>
        </div>

        {/* Conclusion Section */}
        <section className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] bg-zinc-950 px-6 sm:px-10 py-12 sm:py-16 text-white shadow-2xl md:px-16 md:py-24">
          <div className="absolute -right-20 -top-20 h-72 sm:h-96 w-72 sm:w-96 rounded-full bg-[#2563eb]/10 blur-[80px] sm:blur-[120px]" />
          <div className="absolute -left-20 -bottom-20 h-72 sm:h-96 w-72 sm:w-96 rounded-full bg-[#2563eb]/5 blur-[80px] sm:blur-[120px]" />
          
          <div className="relative z-10 grid gap-10 sm:gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <div className="max-w-2xl">
              <h2 className="mb-6 sm:mb-8 text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#2563eb]">What this means</h2>

              <div className="space-y-4 sm:space-y-6">
                <p className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.2] sm:leading-[1.1]">
                  Users no longer hit a wall of skepticism when they search.
                </p>
                <p className="text-lg sm:text-2xl font-light text-zinc-500 md:text-3xl">
                  They now see clear explanations of how the product works.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:gap-6">
              <div className="rounded-[24px] sm:rounded-3xl bg-[#2563eb]/10 p-6 sm:p-10 border border-[#2563eb]/20 shadow-[0_4px_20px_-4px_rgba(37,99,235,0.2)]">
                <p className="text-sm sm:text-base font-medium leading-relaxed text-blue-100">
                  This reduces friction and makes users more likely to download.
                </p>
              </div>

              <div className="rounded-[24px] sm:rounded-3xl bg-gradient-to-br from-[#2563eb] to-[#1e40af] p-6 sm:p-10 shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] ring-1 ring-white/20">
                <p className="text-sm sm:text-base font-bold leading-relaxed text-white">
                  By influencing what users see when they search, we are
                  creating a clear path to conversion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col items-start justify-between gap-6 sm:gap-8 px-2 mt-12 sm:mt-16 md:flex-row md:items-center">
          <div className="flex items-center gap-3 rounded-2xl bg-white px-4 sm:px-5 py-2 sm:py-2.5 shadow-sm">
            <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#2563eb] animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-zinc-900">
              Pilot Active
            </span>
          </div>
          <p className="text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-500">
            FOODIECLUB GROWTH OPS • Q2 2026
          </p>
        </footer>
      </div>
    </div>
  );
}

import LearningTipsClient from "./LearningTipsClient";
import { learningTipsData } from "@/data/learningTips";

export default function LearningTips() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-transparent border-y border-blue-200/50 dark:border-zinc-800/80 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-linear-to-tr from-blue-500/15 to-indigo-500/15 dark:from-blue-600/20 dark:to-purple-600/20 blur-3xl rounded-full pointer-events-none transition-all duration-500" />
      <div className="absolute bottom-10 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-linear-to-tr from-purple-500/15 to-pink-500/15 dark:from-purple-600/20 dark:to-pink-600/20 blur-3xl rounded-full pointer-events-none transition-all duration-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Server Rendered for SEO */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-100/60 dark:bg-blue-500/10 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-blue-200/80 dark:border-blue-500/20">
            Study Smart
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-3">
            Effective Learning Guidelines
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed px-2">
            Explore proven study techniques and time management strategies to boost productivity.
          </p>
        </div>

        {/* Interactive Client Component */}
        <LearningTipsClient learningTipsData={learningTipsData} />
      </div>
    </section>
  );
}
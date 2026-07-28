import Link from "next/link";
import { Search, BookOpen, HelpCircle, Compass, Home } from "lucide-react";
import BackButton from "@/components/modules/Home/BackButton";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50/50 via-white to-slate-50/50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border-b border-slate-200/60 dark:border-zinc-800/80 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-linear-to-tr from-blue-500/15 via-indigo-500/10 to-purple-500/15 dark:from-blue-600/20 dark:via-indigo-600/15 dark:to-purple-600/20 blur-3xl rounded-full pointer-events-none transition-all duration-500" />
      <div className="absolute bottom-10 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-linear-to-tr from-purple-500/10 to-pink-500/10 dark:from-purple-600/20 dark:to-pink-600/20 blur-3xl rounded-full pointer-events-none transition-all duration-500" />

      <div className="max-w-3xl w-full text-center relative z-10 my-auto">
        {/* Big 404 Text */}
        <div className="relative inline-block mb-4 sm:mb-6">
          <span className="text-7xl sm:text-9xl lg:text-[12rem] font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-500 select-none">
            404
          </span>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-3 py-1 sm:px-5 sm:py-2 rounded-full border border-slate-200/80 dark:border-zinc-700/80 shadow-md">
            <span className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs lg:text-sm font-bold text-slate-700 dark:text-zinc-200">
              <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400 animate-spin" style={{ animationDuration: "8s" }} />
              Page Lost in Space
            </span>
          </div>
        </div>

        {/* Heading & Subtitle */}
        <div className="px-2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Oops! Look like you've wandered off track
          </h1>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm lg:text-base text-slate-600 dark:text-zinc-400 max-w-lg mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 px-4">
          <BackButton />

          <Link
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-2.5 sm:py-3 rounded-2xl bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02]"
          >
            <Home className="w-4 h-4 shrink-0" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Quick Links Section */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-slate-200/60 dark:border-zinc-800/80 px-2">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-4 sm:mb-6">
            Or try exploring these pages:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <Link href="/courses" className="block group">
              <div className="p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/80 backdrop-blur-2xl hover:border-blue-500/40 dark:hover:border-blue-500/40 shadow-xs hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 text-left flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform shrink-0">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                    All Courses
                  </h4>
                  <p className="text-[10px] sm:text-xs text-slate-500 dark:text-zinc-400 truncate">
                    Explore available courses
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/search" className="block group">
              <div className="p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/80 backdrop-blur-2xl hover:border-purple-500/40 dark:hover:border-purple-500/40 shadow-xs hover:shadow-xl hover:shadow-purple-500/5 dark:hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 text-left flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform shrink-0">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors truncate">
                    Search Platform
                  </h4>
                  <p className="text-[10px] sm:text-xs text-slate-500 dark:text-zinc-400 truncate">
                    Find specific topics
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/help" className="block group sm:col-span-2 lg:col-span-1">
              <div className="p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/80 backdrop-blur-2xl hover:border-emerald-500/40 dark:hover:border-emerald-500/40 shadow-xs hover:shadow-xl hover:shadow-emerald-500/5 dark:hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 text-left flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform shrink-0">
                  <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors truncate">
                    Help Desk
                  </h4>
                  <p className="text-[10px] sm:text-xs text-slate-500 dark:text-zinc-400 truncate">
                    Contact support
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
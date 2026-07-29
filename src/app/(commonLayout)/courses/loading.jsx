export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-6">
      {/* 1st Loader: Full Page Navigation Spinner  */}
      <div className="relative flex items-center justify-center">
        <div className="w-20 h-20 rounded-full border-4 border-blue-500/20 dark:border-cyan-400/20 animate-ping absolute" />
        <div className="w-16 h-16 rounded-full border-4 border-transparent border-t-blue-600 dark:border-t-cyan-400 border-r-indigo-600 dark:border-r-indigo-400 animate-spin" />
        <div className="w-10 h-10 rounded-full border-4 border-transparent border-b-indigo-500 dark:border-b-cyan-300 border-l-blue-400 animate-[spin_1s_linear_infinite_reverse] absolute" />
        <div className="w-3.5 h-3.5 bg-linear-to-tr from-blue-600 to-indigo-600 dark:from-cyan-400 dark:to-blue-500 rounded-full animate-pulse absolute shadow-lg shadow-blue-500/50 dark:shadow-cyan-400/50" />
      </div>

      <div className="text-center space-y-2 max-w-sm">
        <h3 className="text-xl font-extrabold tracking-tight text-slate-800 dark:text-zinc-100">
          Opening <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-cyan-500">SkillSphere</span> Page...
        </h3>
        <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-zinc-400 animate-pulse">
          Please wait while we prepare the page layout for you.
        </p>
      </div>
    </div>
  );
}
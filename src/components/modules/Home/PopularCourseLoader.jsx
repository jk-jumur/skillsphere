export default function PopularCoursesLoader() {
  return (
    <div className="py-12 flex flex-col items-center justify-center space-y-4">
      <div className="relative flex items-center justify-center w-12 h-12">
        <div className="absolute w-12 h-12 rounded-full border-2 border-blue-500/30 animate-ping" />
        <div className="w-10 h-10 rounded-full border-2 border-dashed border-cyan-500 dark:border-cyan-400 animate-spin" />
        <div className="absolute w-4 h-4 rounded-full bg-linear-to-r from-indigo-500 to-blue-600 animate-pulse" />
      </div>

      <p className="text-xs font-semibold tracking-wider text-slate-600 dark:text-zinc-400 uppercase">
        Loading Popular Courses...
      </p>
    </div>
  );
}
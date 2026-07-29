export default function CardGridLoader() {
  return (
    <div className="py-8 flex flex-col items-center justify-center space-y-3">
      {/* 2nd Spinner */}
      <div className="w-8 h-8 bg-linear-to-tr from-blue-600 to-cyan-400 rounded-lg animate-spin" />
      <p className="text-xs font-medium text-slate-500 dark:text-zinc-400">
        Loading Course Cards...
      </p>
    </div>
  );
}
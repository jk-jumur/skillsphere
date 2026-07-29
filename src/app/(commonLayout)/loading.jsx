export default function HomeLoading() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center space-y-6">
      {/* Home Page Unique Spinner: Glowing Orbit Loader */}
      <div className="relative flex items-center justify-center w-16 h-16">
        {/* Outer Pulsing Aura */}
        <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-600 via-indigo-500 to-cyan-400 blur-md opacity-40 animate-pulse" />
        
        {/* Spinning Outer Ring */}
        <div className="w-16 h-16 rounded-full border-2 border-transparent border-t-blue-600 border-r-cyan-400 animate-spin" />
        
        {/* Inner Counter-Rotating Core */}
        <div className="absolute w-10 h-10 rounded-full border-2 border-transparent border-b-indigo-500 border-l-purple-500 animate-[spin_1.5s_linear_infinite_reverse]" />
        
        {/* Center Glowing Dot */}
        <div className="absolute w-3 h-3 bg-linear-to-tr from-blue-600 to-cyan-400 rounded-full shadow-lg shadow-cyan-500/50" />
      </div>

      {/* Modern Text Effect */}
      <div className="text-center space-y-1">
        <h3 className="text-base font-bold tracking-tight text-slate-800 dark:text-zinc-200">
          Welcome to <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">SkillSphere</span>
        </h3>
        <p className="text-xs text-slate-500 dark:text-zinc-400 animate-pulse">
          Preparing your personalized learning space...
        </p>
      </div>
    </div>
  );
}
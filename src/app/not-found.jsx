// src/app/not-found.js

import "@/app/(commonLayout)/globals.css";
import Link from "next/link";

export const metadata = {
  title: "Page Not Found | SkillSphere",
  description: "The page you are looking for does not exist on SkillSphere.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 relative overflow-hidden bg-gradient-to-br from-[#dbeafe] via-[#e0e7ff] to-[#f3e8ff] font-sans select-none">
      
      {/* Background Soft Ambient Glows (Theme-1) */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-blue-300/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-purple-300/50 rounded-full blur-[120px] pointer-events-none" />

      <section className="relative z-10 max-w-lg w-full text-center flex flex-col items-center">

        {/* Vector SVG (Exactly your original SVG code restored) */}
        <div className="relative w-full max-w-[280px] sm:max-w-[340px] aspect-square flex items-center justify-center mb-2 animate-bounce" style={{ animationDuration: "4s" }}>
          
          <svg
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-[0_10px_25px_rgba(59,130,246,0.25)]"
          >
            <ellipse cx="250" cy="250" rx="200" ry="170" fill="#38bdf8" fillOpacity="0.15" />
            
            <text x="50" y="290" fill="#1e293b" fontSize="170" fontWeight="900" opacity="0.95" fontFamily="sans-serif">4</text>
            <text x="320" y="290" fill="#1e293b" fontSize="170" fontWeight="900" opacity="0.95" fontFamily="sans-serif">4</text>
            
            <circle cx="250" cy="220" r="75" stroke="#38bdf8" strokeWidth="24" fill="none" />

            <g className="animate-pulse" style={{ animationDuration: "2.5s" }}>
              <polygon points="205,130 185,85 225,105" fill="#38bdf8" />
              <polygon points="295,130 315,85 275,105" fill="#38bdf8" />
              <polygon points="202,125 190,95 218,110" fill="#f8fafc" />
              <polygon points="298,125 310,95 282,110" fill="#f8fafc" />
              <circle cx="250" cy="140" r="45" fill="#f8fafc" />
              <ellipse cx="232" cy="135" rx="5" ry="7" fill="#0f172a" />
              <ellipse cx="268" cy="135" rx="5" ry="7" fill="#0f172a" />
              <circle cx="230" cy="133" r="2" fill="#ffffff" />
              <circle cx="266" cy="133" r="2" fill="#ffffff" />
              <polygon points="250,145 245,140 255,140" fill="#38bdf8" />
              <path d="M242 149 Q250 155 258 149" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" fill="none" />
              <line x1="195" y1="138" x2="220" y2="140" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
              <line x1="190" y1="148" x2="218" y2="145" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
              <line x1="305" y1="138" x2="280" y2="140" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
              <line x1="310" y1="148" x2="282" y2="145" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
              <rect x="208" y="165" width="22" height="40" rx="11" fill="#f8fafc" />
              <rect x="270" y="165" width="22" height="40" rx="11" fill="#f8fafc" />
              <line x1="219" y1="192" x2="219" y2="200" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="281" y1="192" x2="281" y2="200" stroke="#cbd5e1" strokeWidth="2" />
            </g>

            <path d="M370 380 L390 380 L385 410 L375 410 Z" fill="#1e293b" />
            <path d="M380 380 C360 350 340 360 350 330 C370 340 380 360 380 380 Z" fill="#34d399" />
            <path d="M380 380 C400 350 420 360 410 330 C390 340 380 360 380 380 Z" fill="#10b981" />
            <circle cx="270" cy="390" r="22" fill="#6366f1" />
            <path d="M250 390 C265 375 280 405 290 390" stroke="#818cf8" strokeWidth="3" fill="none" />
            <path d="M270 368 C270 390 270 410 270 412" stroke="#818cf8" strokeWidth="2" fill="none" />
            <path d="M248 392 Q200 410 140 395" stroke="#818cf8" strokeWidth="3" strokeLinecap="round" fill="none" />
          </svg>

        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm md:text-base max-w-xs sm:max-w-sm mb-6 sm:mb-8 leading-relaxed">
          Sorry, the page you are looking for doesnt exist or has been moved to another location.
        </p>

        <Link href="/" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto min-w-[180px] sm:min-w-[200px] px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-500/25 transition-all duration-200 hover:scale-[1.03] active:scale-95 cursor-pointer">
            Back to Home
          </button>
        </Link>

        <p className="mt-8 sm:mt-10 text-[11px] sm:text-xs text-slate-400 font-medium">
          SkillSphere • Error Code: 404
        </p>

      </section>

    </div>
  );
}
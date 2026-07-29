import Link from "next/link";
import Image from "next/image";
import { Card, Button } from "@heroui/react";
import { Star, User, ArrowRight, Clock, GraduationCap, BarChart } from "lucide-react";

const AllCourseCard = ({ course }) => {
  return (
    <Card 
      className="group relative p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-zinc-800/80 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl shadow-xs hover:shadow-2xl hover:shadow-blue-500/15 dark:hover:shadow-blue-500/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden h-full"
    >
      {/* Top Ambient Glow */}
      <div className="absolute -top-12 -right-12 w-28 sm:w-32 h-28 sm:h-32 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500 pointer-events-none" />

      <div>
        {/* 1. Image Container */}
        <div className="relative h-44 sm:h-48 md:h-52 w-full overflow-hidden rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-zinc-800 shadow-inner">
          {course?.image && (
            <Image
              alt={course?.title || "Course Image"}
              src={course?.image}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          )}

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
          
          {/* Category Badge */}
          {course?.category && (
            <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10 flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold tracking-wide backdrop-blur-md transition-all duration-300
                            bg-slate-900/80 text-white border border-white/20 shadow-lg shadow-black/20
                            dark:bg-zinc-900/80 dark:text-cyan-300 dark:border-cyan-500/40 dark:shadow-cyan-500/20">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 dark:bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-blue-500 dark:bg-cyan-400"></span>
              </span>
              <span>{course.category}</span>
            </div>
          )}

          {/* Duration Badge */}
          {course?.duration && (
            <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 z-10 flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold backdrop-blur-md transition-all duration-300
                            bg-white/25 text-white border border-white/30 shadow-md
                            dark:bg-black/40 dark:text-emerald-300 dark:border-emerald-500/30">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-300 dark:text-emerald-400" />
              <span>{course.duration}</span>
            </div>
          )}
        </div>

        {/* 2. Course Content Section */}
        <div className="pt-4 sm:pt-5 pb-2 px-0.5 sm:px-1 space-y-3 sm:space-y-3.5">
          
          {/* Instructor & Rating */}
          <div className="flex items-center justify-between text-xs sm:text-sm gap-2">
            
            {/* Instructor */}
            {course?.instructor && (
              <div className="flex items-center gap-1.5 sm:gap-2 font-medium min-w-0">
                <div className="p-1 sm:p-1.5 rounded-full ring-1 shadow-xs transition-colors shrink-0
                                bg-slate-100 text-slate-700 ring-slate-300
                                dark:bg-blue-950/80 dark:text-blue-400 dark:ring-blue-400/30">
                  <User className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <span className="font-semibold text-slate-800 dark:text-zinc-200 truncate text-xs sm:text-sm">
                  {course.instructor}
                </span>
              </div>
            )}

            {/* Rating */}
            {course?.rating && (
              <div className="flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-extrabold text-[11px] sm:text-xs shrink-0 transition-all duration-300
                              bg-amber-500/10 text-amber-700 ring-1 ring-amber-500/30
                              dark:bg-amber-400/10 dark:text-amber-300 dark:ring-amber-400/30">
                <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                <span>{course.rating}</span>
              </div>
            )}
          </div>

          {/* Title */}
          {course?.title && (
            <div className="flex items-start gap-2 sm:gap-2.5 group/title">
              <div className="p-1.5 rounded-xl bg-blue-50 dark:bg-zinc-800/80 text-slate-600 dark:text-zinc-400 
                              group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-cyan-500 dark:group-hover:text-zinc-950 
                              group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shrink-0 mt-0.5">
                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors" />
              </div>

              <h3 className="text-base sm:text-lg font-black line-clamp-2 text-slate-900 dark:text-white 
                             group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-snug tracking-tight">
                {course.title}
              </h3>
            </div>
          )}

          {/* Description */}
          {course?.description && (
            <p className="text-xs text-slate-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
              {course.description}
            </p>
          )}

          {/* Level */}
          {course?.level && (
            <div className="flex items-center gap-1.5 pt-2 border-t border-slate-100 dark:border-zinc-800/80 text-xs text-slate-500 dark:text-zinc-400 font-medium">
              <BarChart className="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400 shrink-0" />
              <span>Level:</span>
              <span className="font-bold text-slate-800 dark:text-zinc-200">{course.level}</span>
            </div>
          )}

        </div>
      </div>

      {/* 3. Action Button */}
      <div className="pt-3 px-0.5 sm:px-1 mt-auto">
        <Link href={`/courses/${course?.id}`} className="w-full block">
          <Button
            color="primary"
            radius="xl"
            fullWidth
            endContent={
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
            }
            className="font-bold text-white text-xs sm:text-sm shadow-lg group/btn py-5 sm:py-6 transition-all duration-300 rounded-xl sm:rounded-2xl
                       bg-linear-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 shadow-blue-500/25
                       dark:from-blue-600 dark:via-blue-500 dark:to-cyan-600 dark:hover:from-blue-500 dark:hover:to-cyan-500 dark:shadow-cyan-500/20"
          >
            View Details
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default AllCourseCard;
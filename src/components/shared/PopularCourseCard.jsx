import Link from "next/link";
import Image from "next/image";
import { Card, Button } from "@heroui/react";
import { Star, User, ArrowRight, Clock, GraduationCap, BarChart } from "lucide-react";

const PopularCourseCard = ({ course }) => {
  return (
    <Card 
      className="group relative p-4 rounded-3xl border border-blue-200/70 dark:border-zinc-800/80 bg-white/85 dark:bg-zinc-900/90 backdrop-blur-xl shadow-sm hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden h-full"
    >
      {/* Top Ambient Glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500 pointer-events-none" />

      <div>
        {/* 1. Image Container */}
        <div className="relative h-52 w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-zinc-800 shadow-inner">
          {course?.image && (
            <Image
              alt={course?.title || "Course Image"}
              src={course?.image}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          )}

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
          
          {/* Category Badge */}
          {course?.category && (
            <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide backdrop-blur-md transition-all duration-300
                            bg-slate-900/80 text-white border border-white/20 shadow-lg shadow-black/20
                            dark:bg-zinc-900/80 dark:text-cyan-300 dark:border-cyan-500/40 dark:shadow-cyan-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 dark:bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 dark:bg-cyan-400"></span>
              </span>
              <span>{course.category}</span>
            </div>
          )}

          {/* Duration Badge (Replacing lessons since JSON has duration) */}
          {course?.duration && (
            <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md transition-all duration-300
                            bg-white/25 text-white border border-white/30 shadow-md
                            dark:bg-black/40 dark:text-emerald-300 dark:border-emerald-500/30">
              <Clock className="w-3.5 h-3.5 text-blue-300 dark:text-emerald-400" />
              <span>{course.duration}</span>
            </div>
          )}
        </div>

        {/* 2. Course Content Section */}
        <div className="pt-5 pb-2 px-1 space-y-3.5">
          
          {/* Instructor & Rating */}
          <div className="flex items-center justify-between text-xs sm:text-sm">
            
            {/* Instructor Info */}
            <div className="flex items-center gap-2 font-medium">
              <div className="p-1.5 rounded-full ring-1 shadow-xs transition-colors
                              bg-blue-100/80 text-blue-800 ring-blue-300/80
                              dark:bg-blue-950/80 dark:text-blue-400 dark:ring-blue-400/30">
                <User className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold text-slate-800 dark:text-zinc-200 line-clamp-1">
                {course?.instructor}
              </span>
            </div>

            {/* Rating Badge */}
            {course?.rating && (
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full font-extrabold text-xs transition-all duration-300
                              bg-amber-500/10 text-amber-700 ring-1 ring-amber-500/30
                              dark:bg-amber-400/10 dark:text-amber-300 dark:ring-amber-400/30">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{course?.rating}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <div className="flex items-start gap-2.5 group/title">
            <div className="p-1.5 rounded-xl bg-blue-100/80 dark:bg-zinc-800/80 text-blue-700 dark:text-zinc-400 
                            group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-cyan-500 dark:group-hover:text-zinc-950 
                            group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shrink-0 mt-0.5">
              <GraduationCap className="w-4 h-4 transition-colors" />
            </div>

            <h3 className="text-lg font-black line-clamp-2 text-slate-900 dark:text-white 
                           group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-snug tracking-tight">
              {course?.title}
            </h3>
          </div>

          {/* Description */}
          {course?.description && (
            <p className="text-xs text-slate-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
              {course.description}
            </p>
          )}

          {/* Level Info */}
          {course?.level && (
            <div className="flex items-center gap-1.5 pt-2 border-t border-blue-100/80 dark:border-zinc-800/80 text-xs text-slate-500 dark:text-zinc-400 font-medium">
              <BarChart className="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400 shrink-0" />
              <span>Level:</span>
              <span className="font-bold text-slate-800 dark:text-zinc-200">{course.level}</span>
            </div>
          )}

        </div>
      </div>

      {/* 3. Action Button */}
      <div className="pt-3 px-1 mt-auto">
        <Link href={`/courses/${course?.id}`} className="w-full block">
          <Button
            color="primary"
            radius="xl"
            fullWidth
            endContent={
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
            }
            className="font-bold text-white shadow-lg group/btn py-6 transition-all duration-300 rounded-2xl
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

export default PopularCourseCard;
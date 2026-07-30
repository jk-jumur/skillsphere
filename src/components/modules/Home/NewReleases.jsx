import Link from "next/link";
import Image from "next/image";
import { Card, Button } from "@heroui/react";
import { Star, User, ArrowRight, BookOpen, Flame } from "lucide-react";
import { staticNewCourses } from "@/data/newCoursesData";

const NewReleases = () => {
  return (
    <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-transparent">
      {/* 1. Header Section (Centered) */}
      <div className="flex flex-col items-center text-center mb-8 sm:mb-12 space-y-3 sm:space-y-4 max-w-2xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 bg-blue-100/60 dark:bg-cyan-950/50 border border-blue-200/80 dark:border-cyan-800/50 transition-colors">
          <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-pulse" />
          <span>Freshly Added</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-zinc-100 tracking-tight transition-colors">
          New Releases & Trending
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 font-medium leading-relaxed">
          Explore our latest industry-level courses, designed by top experts to help you master modern skills and boost your career.
        </p>

        {/* Explore Button */}
        <div className="pt-1">
          <Link href="/courses">
            <Button
              variant="light"
              color="primary"
              className="font-bold text-xs sm:text-sm px-5 py-2 text-blue-600 dark:text-cyan-400 hover:bg-blue-100/50 dark:hover:bg-zinc-800/80 rounded-xl transition-all"
              endContent={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
            >
              Explore All
            </Button>
          </Link>
        </div>
      </div>

      {/* 2. Responsive Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {staticNewCourses.map((course) => (
          <Card
            key={course.id}
            className="group relative p-3.5 sm:p-4 rounded-3xl border border-blue-200/70 dark:border-zinc-800 bg-white/85 dark:bg-zinc-900/90 backdrop-blur-xl shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 dark:hover:shadow-cyan-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden"
          >
            {/* Ambient Corner Glow (Adaptive for Theme) */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/15 dark:bg-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500 pointer-events-none" />

            <div>
              {/* Course Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-zinc-800">
                <Image
                  alt={course.title}
                  src={course.image}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Dark Vignette Overlay for Image Text Contrast */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Badge */}
                <div
                  className={`absolute top-3 left-3 z-10 px-2.5 py-1 rounded-lg text-xs font-extrabold backdrop-blur-md shadow-sm ${
                    course.badge?.colorClass || "bg-slate-900/80 text-white dark:bg-zinc-950/80 dark:text-cyan-300"
                  }`}
                >
                  {course.badge?.text || course.badgeText}
                </div>

                {/* Lessons Badge */}
                <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-950/70 text-white border border-white/10 backdrop-blur-md shadow-sm">
                  <BookOpen className="w-3.5 h-3.5 text-blue-400 dark:text-cyan-400" />
                  <span>{course.lessons} Lessons</span>
                </div>
              </div>

              {/* Course Content */}
              <div className="pt-4 sm:pt-5 pb-2 space-y-3">
                {/* Instructor & Rating */}
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-1.5 text-slate-700 dark:text-zinc-400">
                    <User className="w-3.5 h-3.5 text-blue-500 dark:text-zinc-500" />
                    <span className="font-semibold line-clamp-1">
                      {typeof course.instructor === "object"
                        ? course.instructor.name
                        : course.instructor}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-amber-700 dark:text-amber-400 font-bold bg-amber-500/10 dark:bg-amber-500/10 px-2.5 py-0.5 rounded-lg border border-amber-500/30 dark:border-amber-500/20">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug tracking-tight">
                  {course.title}
                </h3>

                {/* Category & Price */}
                <div className="flex items-center justify-between pt-2.5 border-t border-blue-100/80 dark:border-zinc-800 text-xs sm:text-sm">
                  <span className="text-slate-500 dark:text-zinc-400 font-medium">
                    {course.category}
                  </span>
                  <span className="text-base sm:text-lg font-black text-slate-900 dark:text-zinc-100">
                    {course.isFree || course.price === 0 || course.price === "Free" ? (
                      <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">Free</span>
                    ) : (
                      `${course.currency || "$"}${course.price}`
                    )}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-3">
              <Link href="/courses" className="w-full block">
                <Button
                  color="primary"
                  radius="xl"
                  fullWidth
                  className="font-bold text-xs sm:text-sm py-5 sm:py-6 bg-linear-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-500/20 dark:shadow-cyan-500/10 active:scale-[0.98]"
                >
                  Explore Course
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default NewReleases;
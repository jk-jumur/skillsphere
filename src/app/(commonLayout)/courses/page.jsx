import { Suspense } from "react";
import CourseListWithSearch from "@/components/modules/courses/CourseListWithSearch";
import CardGridLoader from "@/components/modules/courses/CardGridLoader";

export const metadata = {
  title: "All Courses | SkillSphere",
  description: "Explore interactive, industry-ready online courses.",
};

const AllCoursesPage = async () => {
 
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`, {
    cache: "no-store",
  });
  const allCourses = await res.json();

  return (
    <section className="py-8 sm:py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Part */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Explore All <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-cyan-500">SkillSphere</span> Courses
        </h1>
        <p className="text-xs sm:text-base font-medium text-slate-600 dark:text-zinc-400 max-w-xl mx-auto px-2">
          Discover interactive, industry-ready courses designed to elevate your career and build your future skills.
        </p>
      </div>

      <Suspense fallback={<CardGridLoader />}>
        <CourseListWithSearch initialCourses={allCourses} />
      </Suspense>
    </section>
  );
};

export default AllCoursesPage;
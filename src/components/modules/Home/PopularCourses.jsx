import PopularCourseCard from "@/components/shared/PopularCourseCard";

const PopularCourses = async () => {
  let courses = [];

  try {
    const res = await fetch("http://localhost:3000/data.json", {
      cache: "no-store", 
    });
    courses = await res.json();
  } catch (error) {
    console.error("Error fetching courses:", error);
  }

 
  const popularCourses = [...courses]
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 3);

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Part */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Popular Courses
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-500 dark:text-neutral-400">
          Explore our top-rated courses chosen by thousands of learners worldwide.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularCourses.map((course) => (
          <PopularCourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;
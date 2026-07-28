
import { instructors } from "@/data/instructors";
import TopInstructorsSlider from "./TopInstructorsSlider";


const TopInstructors = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header (Server Rendered) */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white sm:text-4xl">
          Top Instructors
        </h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Learn directly from our industry experts and experienced mentors.
        </p>
      </div>

      {/* Slider Component (Interactive Client Component) */}
      <TopInstructorsSlider instructors={instructors} />
    </section>
  );
};

export default TopInstructors;
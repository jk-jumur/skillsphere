"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import AllCourseCard from "@/components/shared/AllCourseCard";
import CardGridLoader from "./CardGridLoader";

const CourseListWithSearch = ({ initialCourses }) => {
  const [loadingCards, setLoadingCards] = useState(true);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // কার্ডের জন্য ১.৫ সেকেন্ড লোডার দেখাবে
  useEffect(() => {
    const timer = setTimeout(() => setLoadingCards(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const searchTerm = searchParams.get("search") || "";
  const filteredCourses = initialCourses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (term) => {
    const params = new URLSearchParams(searchParams);
    term ? params.set("search", term) : params.delete("search");
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search courses..."
          defaultValue={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-900 dark:text-white"
        />
      </div>

      {/* Cards or 2nd Loader */}
      {loadingCards ? (
        <CardGridLoader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <AllCourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseListWithSearch;
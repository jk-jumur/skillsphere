"use client";

import Link from "next/link";
import { Card, Button, Chip } from "@heroui/react";
import { Star, User, ArrowRight } from "lucide-react";

const PopularCourseCard = ({ course }) => {
  return (
    <Card 
      className="p-4 rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
    >
      <div>
        {/* 1. Image Container*/}
        <div className="relative h-52 w-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-zinc-800 shadow-inner">
          <img
            alt={course?.title || "Course Image"}
            src={course?.image}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
          />
          
          {/* Category Badge  */}
          <Chip
            size="sm"
            color="primary"
            variant="solid"
            className="absolute top-3 right-3 z-10 backdrop-blur-md bg-blue-600/90 text-white font-semibold shadow-lg border border-white/20 px-1"
          >
            {course?.category}
          </Chip>
        </div>

        {/* 2. Course Content section */}
        <div className="pt-5 pb-2 px-1 space-y-3.5">
          {/* Instructor And Rating */}
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 font-medium text-neutral-600 dark:text-neutral-300">
              <div className="p-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600">
                <User className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold text-neutral-800 dark:text-neutral-200">{course?.instructor}</span>
            </div>

            <div className="flex items-center gap-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2.5 py-1 rounded-full font-bold text-xs border border-amber-500/20">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{course?.rating}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold line-clamp-2 text-neutral-900 dark:text-white group-hover:text-blue-600 transition-colors leading-snug">
            {course?.title}
          </h3>
        </div>
      </div>

      {/* 3. Action Button */}
      <div className="pt-3 px-1 mt-auto">
        <Button
          as={Link}
          href={`/courses/${course?.id}`}
          color="primary"
          radius="xl"
          fullWidth
          endContent={<ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />}
          className="font-bold bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/25 group/btn py-6 transition-all duration-300"
        >
          View Details
        </Button>
      </div>
    </Card>
  );
};

export default PopularCourseCard;
"use client";

import { useState } from "react";
import { Card, Avatar, Button } from "@heroui/react";
import { BookOpen, Star, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { instructors } from "@/data/instructors";
import { motion, AnimatePresence } from "framer-motion";

const TopInstructors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Next and Prev handlers
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % instructors.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? instructors.length - 1 : prevIndex - 1
    );
  };

  const currentInstructor = instructors[currentIndex];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white sm:text-4xl">
          Top Instructors
        </h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Learn directly from our industry experts and experienced mentors.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative max-w-xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentInstructor.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Card className="p-8 text-center items-center rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-zinc-900 shadow-xl">
              <Avatar
                src={currentInstructor.image}
                className="w-28 h-28 text-large ring-4 ring-blue-500/20 mb-4 shadow-md"
              />
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                {currentInstructor.name}
              </h3>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mb-6">
                {currentInstructor.role}
              </p>

              <div className="flex items-center justify-center gap-6 text-xs text-neutral-500 dark:text-neutral-400 border-t border-neutral-100 dark:border-neutral-800 pt-5 w-full">
                <span className="flex items-center gap-1.5 font-medium">
                  <BookOpen className="w-4 h-4 text-blue-500" />
                  {currentInstructor.courses}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-amber-500 font-bold">
                  <Star className="w-4 h-4 fill-amber-500" />
                  {currentInstructor.rating}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Users className="w-4 h-4 text-emerald-500" />
                  {currentInstructor.students}
                </span>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 -left-4 -right-4 sm:-left-8 sm:-right-8 pointer-events-none">
          <Button
            isIconOnly
            radius="full"
            variant="flat"
            onClick={handlePrev}
            className="pointer-events-auto bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md shadow-lg hover:scale-110 transition-transform"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            isIconOnly
            radius="full"
            variant="flat"
            onClick={handleNext}
            className="pointer-events-auto bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md shadow-lg hover:scale-110 transition-transform"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {instructors.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-8 bg-blue-600"
                  : "w-2.5 bg-neutral-300 dark:bg-zinc-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;
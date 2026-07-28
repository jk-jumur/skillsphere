"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, Button, Chip } from "@heroui/react";
import { BookOpen, Star, Users, ChevronLeft, ChevronRight, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TopInstructorSlider = ({ instructors }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % instructors.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? instructors.length - 1 : prev - 1
    );
  };

  // Auto-play (Pauses on Hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  const currentInstructor = instructors[currentIndex];

  return (
    <div
      className="relative max-w-xl mx-auto px-4 py-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Adaptive Background Glow for Light/Dark Mode */}
      <div className="absolute inset-0 bg-linear-to-tr from-blue-500/20 via-indigo-500/20 to-purple-500/20 dark:from-blue-600/30 dark:via-purple-600/30 dark:to-pink-600/20 blur-3xl opacity-70 dark:opacity-60 rounded-full pointer-events-none transition-all duration-500" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentInstructor.id}
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -15 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, { offset }) => {
            if (offset.x < -50) handleNext();
            else if (offset.x > 50) handlePrev();
          }}
          className="cursor-grab active:cursor-grabbing"
        >
          {/*  Main Eye-Catching Glassmorphism Card */}
          <Card className="relative p-8 text-center items-center rounded-3xl border border-white/60 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] dark:shadow-[0_20px_50px_rgba(0,_0,_0,_0.5)] hover:shadow-blue-500/15 dark:hover:shadow-blue-500/20 transition-all duration-300">
            
           {/* Top Badge */}
   <div className="absolute top-6 right-5">
     <Chip
        variant="flat"
       className="font-semibold text-xs bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 px-2 py-1 flex items-center gap-1.5"
      >
      <Award className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
      <span>Top Mentor</span>
    </Chip>
    </div>

            {/* Avatar with Vibrant Gradient Ring */}
            <div className="relative group mb-5 mt-2">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full blur-md opacity-60 dark:opacity-80 group-hover:opacity-100 transition duration-300 animate-pulse" />
              <div className="relative w-28 h-28 rounded-full ring-4 ring-white dark:ring-zinc-900 overflow-hidden mx-auto shadow-xl">
                <Image
                  src={currentInstructor.image}
                  alt={currentInstructor.name}
                  fill
                  sizes="112px"
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Instructor Info */}
            <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              {currentInstructor.name}
            </h3>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mt-1 mb-6">
              {currentInstructor.role}
            </p>

            {/*  Adaptive Stats Section */}
            <div className="grid grid-cols-3 gap-3 w-full pt-5 border-t border-slate-200/60 dark:border-zinc-800/80">
              <div className="flex flex-col items-center p-2.5 rounded-2xl bg-blue-50/60 dark:bg-zinc-800/50 border border-blue-100/50 dark:border-zinc-700/30">
                <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400 mb-1" />
                <span className="text-xs font-extrabold text-slate-800 dark:text-zinc-100">
                  {currentInstructor.courses}
                </span>
                <span className="text-[10px] font-medium text-slate-500 dark:text-zinc-400">Courses</span>
              </div>

              <div className="flex flex-col items-center p-2.5 rounded-2xl bg-amber-50/60 dark:bg-amber-500/10 border border-amber-100/50 dark:border-amber-500/20">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500 mb-1" />
                <span className="text-xs font-extrabold text-amber-700 dark:text-amber-300">
                  {currentInstructor.rating}
                </span>
                <span className="text-[10px] font-medium text-slate-500 dark:text-zinc-400">Rating</span>
              </div>

              <div className="flex flex-col items-center p-2.5 rounded-2xl bg-emerald-50/60 dark:bg-zinc-800/50 border border-emerald-100/50 dark:border-zinc-700/30">
                <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mb-1" />
                <span className="text-xs font-extrabold text-slate-800 dark:text-zinc-100">
                  {currentInstructor.students}
                </span>
                <span className="text-[10px] font-medium text-slate-500 dark:text-zinc-400">Students</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons with Glass Effect */}
      <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 -left-3 -right-3 sm:-left-6 sm:-right-6 pointer-events-none">
        <Button
          isIconOnly
          radius="full"
          onClick={handlePrev}
          className="pointer-events-auto bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md border border-slate-200 dark:border-zinc-700 shadow-xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white hover:scale-110 active:scale-95 transition-all text-slate-700 dark:text-zinc-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <Button
          isIconOnly
          radius="full"
          onClick={handleNext}
          className="pointer-events-auto bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md border border-slate-200 dark:border-zinc-700 shadow-xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white hover:scale-110 active:scale-95 transition-all text-slate-700 dark:text-zinc-200"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/*  Glowing Progress Indicators */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {instructors.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-8 bg-blue-600 dark:bg-blue-500 shadow-md shadow-blue-500/50"
                : "w-2.5 bg-slate-300 dark:bg-zinc-700 hover:bg-slate-400 dark:hover:bg-zinc-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TopInstructorSlider;
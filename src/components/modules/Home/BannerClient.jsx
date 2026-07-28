"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, BookOpen } from "lucide-react";

export default function BannerClient({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slider (5 seconds interval)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <>
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 transform scale-100"
        style={{
          backgroundImage: `url('${slides[currentSlide].bgImage}')`,
        }}
      />
      <div className="absolute inset-0 z-0 bg-white/35 dark:bg-slate-950/55 transition-colors duration-300" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 my-auto">
        <div className="relative min-h-[380px] sm:min-h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 border border-border text-teal-600 dark:text-teal-400 text-xs sm:text-sm font-semibold shadow-lg backdrop-blur-md">
                <Sparkles className="w-4 h-4" />
                <span>{slides[currentSlide].badge}</span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-md">
                <span
                  className={`bg-clip-text text-transparent bg-linear-to-r ${slides[currentSlide].linear}`}
                >
                  {slides[currentSlide].title}
                </span>
              </h1>

              {/* Description Card */}
              <div className="p-4 sm:p-6 rounded-2xl bg-background/50 dark:bg-slate-900/50 backdrop-blur-md max-w-2xl mx-auto border border-white/20 dark:border-slate-800/40 shadow-xl">
                <p className="text-lg sm:text-2xl text-foreground font-light leading-relaxed">
                  <span className="font-semibold text-foreground block mb-1">
                    {slides[currentSlide].subtitle}
                  </span>
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Link
                  href={slides[currentSlide].primaryLink}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-xl shadow-blue-600/40 flex items-center justify-center gap-2 group text-base hover:scale-105"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>{slides[currentSlide].primaryBtn}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/about"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-background/90 hover:bg-background text-foreground border border-border font-medium transition-all text-center text-base shadow-md backdrop-blur-md hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <div className="relative z-10 flex items-center justify-between mt-8 max-w-xs mx-auto w-full">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-background/90 hover:bg-background text-foreground transition-all border border-border shadow-lg hover:scale-110 backdrop-blur-md"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  currentSlide === index
                    ? "w-8 bg-blue-600 shadow-md"
                    : "w-2.5 bg-foreground/40 hover:bg-foreground/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-background/90 hover:bg-background text-foreground transition-all border border-border shadow-lg hover:scale-110 backdrop-blur-md"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
}
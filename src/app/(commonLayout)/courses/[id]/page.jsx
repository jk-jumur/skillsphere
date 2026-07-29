"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, use } from "react";
import { courseCurriculum } from "@/data/curriculum";
import { 
  Star, 
  User, 
  Clock, 
  BookOpen, 
  CheckCircle2, 
  ArrowLeft, 
  PlayCircle,
  BarChart2,
  Sparkles,
  Layers,
  Award,
  Video,
  ChevronDown,
  FileText
} from "lucide-react";

export default function CourseDetailsPage({ params }) {
  const { id } = use(params);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openModule, setOpenModule] = useState(0);

  useEffect(() => {
    async function fetchCourse() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`, {
          cache: "no-store",
        });
        if (res.ok) {
          const allCourses = await res.json();
          const found = allCourses.find((c) => String(c.id) === String(id));
          setCourse(found);
          
          // Dynamically update document title based on clicked course
          if (found?.title) {
            document.title = `${found.title} | SkillSphere`;
          }
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600 dark:border-cyan-400" />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4 px-4 text-center">
        <h2 className="text-xl font-bold text-slate-800 dark:text-zinc-200">Course Not Found</h2>
        <Link href="/courses" className="text-sm text-blue-600 hover:underline">Back to All Courses</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
      
      {/* Back Button */}
      <div className="pt-4 sm:pt-6">
        <Link 
          href="/courses" 
          className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-zinc-800/80 hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-slate-950 active:scale-95 transition-all duration-200 shadow-xs"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to All Courses
        </Link>
      </div>

      {/* 1. TOP HERO BANNER */}
      <div className="group/hero p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800/80 space-y-5 sm:space-y-6 shadow-sm hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)] hover:-translate-y-1 hover:scale-[1.002] hover:border-blue-400/50 dark:hover:border-cyan-500/50 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/40 dark:hover:from-zinc-900 dark:hover:to-zinc-900/90 transition-all duration-500 ease-out relative overflow-hidden">
        
        {/* Subtle Linear Background Glow Effect on Hover */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-500/0 via-indigo-500/5 to-purple-500/0 opacity-0 group-hover/hero:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Image Container */}
        {course.image && (
          <div className="group relative h-48 sm:h-72 lg:h-[400px] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 dark:bg-zinc-950/80 border border-slate-200/60 dark:border-zinc-800 shadow-inner transition-all duration-500 hover:border-blue-500/60 dark:hover:border-cyan-500/60">
            <Image
              src={course.image}
              alt={course.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              className="object-cover transition-transform duration-700 ease-out group-hover/hero:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex items-center gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-semibold bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-md">
              <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 animate-pulse" /> HD Video Lessons Included
            </div>
          </div>
        )}

        {/* Title and Badges */}
        <div className="space-y-3 sm:space-y-4 relative z-10">
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {course.category && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-blue-50 text-blue-600 dark:bg-blue-500/20 dark:text-cyan-300 border border-blue-200/60 dark:border-blue-500/30 group-hover/hero:border-blue-400 transition-colors">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                {course.category}
              </span>
            )}
            {course.level && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-medium bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700">
                <BarChart2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                {course.level}
              </span>
            )}
          </div>

          <h1 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white leading-tight sm:leading-snug">
            {course.title}
          </h1>

          {/* Meta Info Bar */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-1 sm:pt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-cyan-400" />
              <span>Instructor: <strong className="text-slate-900 dark:text-white">{course.instructor}</strong></span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Duration: <strong className="text-slate-900 dark:text-white">{course.duration}</strong></span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
              <span>Rating: <strong className="text-slate-900 dark:text-white">{course.rating} / 5.0</strong></span>
            </div>
          </div>
        </div>

      </div>

      {/* 2. DESCRIPTION & ACCESS PLAN SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        
        {/* Course Description Card (8 Cols) */}
        <div className="group lg:col-span-8 flex flex-col justify-between p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 space-y-5 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-zinc-800">
              <div className="p-2 sm:p-2.5 rounded-xl bg-blue-50 dark:bg-cyan-950/60 text-blue-600 dark:text-cyan-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-cyan-500 dark:group-hover:text-slate-950 transition-all duration-300">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                Course Overview
              </h3>
            </div>

            <p className="text-slate-600 dark:text-zinc-300 leading-relaxed text-xs sm:text-base font-normal">
              {course.description}
            </p>
          </div>

          {/* Highlights */}
          <div className="pt-3 sm:pt-4 border-t border-slate-100 dark:border-zinc-800/80">
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-2.5 sm:mb-3">
              What You Will Learn
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
              <div className="flex items-center gap-2 group/item">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 transition-transform group-hover/item:scale-125" />
                <span>Search Engine Optimization (SEO)</span>
              </div>
              <div className="flex items-center gap-2 group/item">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 transition-transform group-hover/item:scale-125" />
                <span>Social Media Ads & Campaigns</span>
              </div>
              <div className="flex items-center gap-2 group/item">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 transition-transform group-hover/item:scale-125" />
                <span>Email Marketing Strategy</span>
              </div>
              <div className="flex items-center gap-2 group/item">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 transition-transform group-hover/item:scale-125" />
                <span>Brand Identity & Positioning</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Card (4 Cols) */}
        <div className="group lg:col-span-4 flex flex-col justify-between p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-blue-500/60 dark:hover:border-cyan-400/60 transition-all duration-300 space-y-5 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">
                Access Plan
              </span>
              <div className="text-xl sm:text-2xl font-black text-blue-600 dark:text-cyan-400 group-hover:scale-105 origin-left transition-transform duration-300">
                Full Lifetime Access
              </div>
            </div>

            <button className="w-full py-3 sm:py-3.5 rounded-xl font-bold text-white text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 dark:bg-cyan-600 dark:hover:bg-cyan-500 active:scale-95 transition-all duration-200 shadow-lg shadow-blue-500/25 dark:shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer group/btn">
              <PlayCircle className="w-4 h-4 transition-transform group-hover/btn:scale-125" /> Start Learning Now
            </button>
          </div>

          <div className="space-y-2.5 sm:space-y-3 pt-4 sm:pt-5 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-600 dark:text-zinc-300">
            <p className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">Includes:</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> 
                <span><strong>{course.duration}</strong> on-demand video</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-blue-500 dark:text-cyan-400 shrink-0" /> 
                <span>Full access to course files</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-amber-500 shrink-0" /> 
                <span>Certificate of Completion</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* 3. FULL WIDTH CURRICULUM SECTION */}
      <div className="pt-4 sm:pt-6 space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-zinc-800">
          <div className="space-y-1">
            <h2 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-cyan-400" /> 
              Course Curriculum
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
              Explore the detailed module breakdown below.
            </p>
          </div>
          <span className="text-[11px] sm:text-xs font-semibold text-slate-600 dark:text-zinc-300 bg-slate-100 dark:bg-zinc-800 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg self-start sm:self-auto">
            {courseCurriculum.length} Modules • Total {course.duration}
          </span>
        </div>

        {/* Accordion Modules */}
        <div className="space-y-2.5 sm:space-y-3">
          {courseCurriculum.map((item, index) => {
            const isOpen = openModule === index;
            return (
              <div 
                key={index}
                className="rounded-xl sm:rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden transition-all duration-300 hover:border-blue-400/60 dark:hover:border-cyan-500/50 hover:shadow-md"
              >
                <button
                  onClick={() => setOpenModule(isOpen ? null : index)}
                  className="w-full p-3.5 sm:p-5 flex items-center justify-between gap-3 text-left hover:bg-slate-50/80 dark:hover:bg-zinc-800/40 transition-colors"
                >
                  <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-base truncate">
                    {item.module}
                  </span>

                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <span className="text-[10px] sm:text-xs font-semibold text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-cyan-950/60 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-blue-100 dark:border-cyan-900">
                      {item.duration}
                    </span>
                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-600 dark:text-cyan-400" : ""}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="p-3.5 sm:p-5 pt-0 border-t border-slate-100 dark:border-zinc-800/80 bg-slate-50/50 dark:bg-zinc-900/50">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 mt-2.5 sm:mt-3">
                      {item.topics.map((topic, i) => (
                        <li key={i} className="flex items-center gap-2 group/topic">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-cyan-400 shrink-0 transition-transform group-hover/topic:scale-150" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
"use client";

import { useState } from "react";
import { Card, Button } from "@heroui/react";
import { learningTipsData } from "@/data/learningTips";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Clock } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
};

const LearningTips = () => {
  const [activeTab, setActiveTab] = useState("studyTechniques");

  const activeTips = learningTipsData[activeTab];

  return (
    <section className="relative py-20 bg-slate-50/50 via-white to-slate-50/50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border-y border-slate-200/60 dark:border-zinc-800/80 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-96 h-96 bg-linear-to-tr from-blue-500/15 to-indigo-500/15 dark:from-blue-600/20 dark:to-purple-600/20 blur-3xl rounded-full pointer-events-none transition-all duration-500" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-linear-to-tr from-purple-500/15 to-pink-500/15 dark:from-purple-600/20 dark:to-pink-600/20 blur-3xl rounded-full pointer-events-none transition-all duration-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-200/50 dark:border-blue-500/20">
            Study Smart
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-3">
            Effective Learning Guidelines
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
            Explore proven study techniques and time management strategies to boost productivity.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex justify-center items-center mb-12">
          <div className="flex p-1.5 rounded-2xl bg-slate-200/60 dark:bg-zinc-800/80 backdrop-blur-md border border-slate-300/50 dark:border-zinc-700/50">
            <Button
              onClick={() => setActiveTab("studyTechniques")}
              className={`relative flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
                activeTab === "studyTechniques"
                  ? "bg-white dark:bg-zinc-900 text-blue-600 dark:text-blue-400 shadow-lg"
                  : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white bg-transparent"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Study Techniques
            </Button>

            <Button
              onClick={() => setActiveTab("timeManagement")}
              className={`relative flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
                activeTab === "timeManagement"
                  ? "bg-white dark:bg-zinc-900 text-blue-600 dark:text-blue-400 shadow-lg"
                  : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white bg-transparent"
              }`}
            >
              <Clock className="w-4 h-4" />
              Time Management Tips
            </Button>
          </div>
        </div>

        {/* Animated Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {activeTips.map((item, index) => {
              const Icon = item.icon;
              const formattedIndex = String(index + 1).padStart(2, "0");

              return (
                <motion.div key={item.id} variants={itemVariants} className="h-full">
                  <Card className="group relative p-7 rounded-3xl border border-white/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/80 backdrop-blur-2xl shadow-[0_10px_30px_rgba(8,_112,_184,_0.04)] dark:shadow-[0_10px_30px_rgba(0,_0,_0,_0.4)] hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/15 hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full flex flex-col justify-between">
                    <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className={`p-3.5 rounded-2xl ${item.color} shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-3xl font-black text-slate-200 dark:text-zinc-800 group-hover:text-blue-500/30 dark:group-hover:text-blue-400/30 transition-colors duration-300 select-none">
                          {formattedIndex}
                        </span>
                      </div>

                      <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="w-full h-1 bg-linear-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default LearningTips;
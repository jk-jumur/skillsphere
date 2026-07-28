"use client";

import { useState } from "react";
import { Card, Button } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Clock,
  Target,
  Lightbulb,
  CheckCircle2,
  Brain,
  Calendar,
  Layers,
} from "lucide-react";

// Lucide Icon Component Mapping
const iconMap = {
  Lightbulb,
  Brain,
  Layers,
  BookOpen,
  Clock,
  Target,
  Calendar,
  CheckCircle2,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
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

export default function LearningTipsClient({ learningTipsData }) {
  const [activeTab, setActiveTab] = useState("studyTechniques");

  const activeTips = learningTipsData[activeTab] || [];

  return (
    <>
      {/* Category Switcher Tabs - Responsive */}
      <div className="flex justify-center items-center mb-8 sm:mb-12">
        <div className="flex w-full sm:w-auto p-1.5 rounded-2xl bg-slate-200/60 dark:bg-zinc-800/80 backdrop-blur-md border border-slate-300/50 dark:border-zinc-700/50">
          <Button
            onClick={() => setActiveTab("studyTechniques")}
            className={`flex-1 sm:flex-initial relative flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
              activeTab === "studyTechniques"
                ? "bg-white dark:bg-zinc-900 text-blue-600 dark:text-blue-400 shadow-md"
                : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white bg-transparent"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span>Study Techniques</span>
          </Button>

          <Button
            onClick={() => setActiveTab("timeManagement")}
            className={`flex-1 sm:flex-initial relative flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
              activeTab === "timeManagement"
                ? "bg-white dark:bg-zinc-900 text-blue-600 dark:text-blue-400 shadow-md"
                : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white bg-transparent"
            }`}
          >
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span>Time Management</span>
          </Button>
        </div>
      </div>

      {/* Animated Cards Grid - Responsive Columns */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: -10 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {activeTips.map((item, index) => {
          
            const IconComponent = iconMap[item.iconName] || BookOpen;
            const formattedIndex = String(index + 1).padStart(2, "0");

            return (
              <motion.div key={item.id || index} variants={itemVariants} className="h-full">
                <Card className="group relative p-5 sm:p-6 lg:p-7 rounded-3xl border border-white/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/80 backdrop-blur-2xl shadow-[0_10px_30px_rgba(8,_112,_184,_0.04)] dark:shadow-[0_10px_30px_rgba(0,_0,_0,_0.4)] hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/15 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden h-full flex flex-col justify-between">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div
                        className={`p-3 sm:p-3.5 rounded-2xl ${item.color} shadow-xs group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                      >
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-2xl sm:text-3xl font-black text-slate-200 dark:text-zinc-800 group-hover:text-blue-500/30 dark:group-hover:text-blue-400/30 transition-colors duration-300 select-none">
                        {formattedIndex}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="w-full h-1 bg-linear-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full mt-5 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
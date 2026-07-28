import { Clock, Target, Lightbulb, CheckCircle2, Brain, Calendar, BookOpen, Layers } from "lucide-react";

export const learningTipsData = {
  studyTechniques: [
    {
      id: "study-1",
      icon: Lightbulb,
      title: "Feynman Technique",
      desc: "Explain complex concepts in simple terms as if teaching a child. It identifies knowledge gaps instantly.",
      color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    },
    {
      id: "study-2",
      icon: Brain,
      title: "Active Recall",
      desc: "Test yourself constantly after reading instead of re-reading notes passively to build long-term memory.",
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    },
    {
      id: "study-3",
      icon: Layers,
      title: "Spaced Repetition",
      desc: "Review information at gradually increasing intervals to override the forgetting curve effectively.",
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    {
      id: "study-4",
      icon: BookOpen,
      title: "Mind Mapping",
      desc: "Connect main concepts visually with branches to structure information logically in your mind.",
      color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    },
  ],
  timeManagement: [
    {
      id: "time-1",
      icon: Clock,
      title: "Pomodoro Technique",
      desc: "Study with full focus for 25 minutes, then take a 5-minute break. It prevents brain fatigue and burnout.",
      color: "bg-red-500/10 text-red-600 dark:text-red-400",
    },
    {
      id: "time-2",
      icon: Target,
      title: "Daily Goal Setting",
      desc: "Set 3 specific micro-goals before starting each day and track progress as you complete them.",
      color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    },
    {
      id: "time-3",
      icon: Calendar,
      title: "Time Blocking",
      desc: "Divide your day into dedicated time blocks for specific subjects or tasks to eliminate multitasking.",
      color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    },
    {
      id: "time-4",
      icon: CheckCircle2,
      title: "Consistent Routine",
      desc: "Studying 1 hour daily builds momentum and yields better results than an 8-hour weekend marathon.",
      color: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
    },
  ],
};
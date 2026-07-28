import { Card } from "@heroui/react";
import { learningTips } from "@/data/learningTips";

const LearningTips = () => {
  return (
    <section className="py-16 bg-neutral-50/80 dark:bg-zinc-900/50 border-y border-neutral-200/60 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white sm:text-4xl">
            Effective Learning Tips
          </h2>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Simple guidelines to learn efficiently and manage your time effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningTips.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.id}
                className="p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-lg transition-all"
              >
                <div className={`p-3 rounded-xl w-fit ${item.color} mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LearningTips;
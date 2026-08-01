import Banner from "@/components/modules/Home/Banner";
import LearningTips from "@/components/modules/Home/LearningTips";
import NewReleases from "@/components/modules/Home/NewReleases";
import PopularCourses from "@/components/modules/Home/PopularCourses";
import TopInstructors from "@/components/modules/Home/TopInstructors";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="flex flex-col flex-1 w-full items-center justify-center bg-linear-to-b from-blue-50/70 via-slate-50/50 to-indigo-50/60 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 transition-colors duration-300 font-sans">
      <Banner/>
      <PopularCourses/>
      <NewReleases/>
      <LearningTips/>
      <TopInstructors/>
    </div>
  );
}
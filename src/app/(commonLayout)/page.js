
import Banner from "@/components/modules/Home/Banner";
import LearningTips from "@/components/modules/Home/LearningTips";
import NewReleases from "@/components/modules/Home/NewReleases";
import PopularCourses from "@/components/modules/Home/PopularCourses";
import TopInstructors from "@/components/modules/Home/TopInstructors";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Banner/>
      <PopularCourses/>
      <NewReleases/>
      <LearningTips/>
      <TopInstructors/>
    </div>
  );
}

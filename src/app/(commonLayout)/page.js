import Banner from "@/components/modules/Home/Banner";
import PopularCourses from "@/components/modules/Home/PopularCourses";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Banner/>
      <PopularCourses/>
    </div>
  );
}

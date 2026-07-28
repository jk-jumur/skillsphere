import BannerClient from "./BannerClient";
import { bannerSlides } from "@/data/bannerData";

export default function Banner() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col justify-center overflow-hidden text-foreground">
      <BannerClient slides={bannerSlides} />
    </section>
  );
}

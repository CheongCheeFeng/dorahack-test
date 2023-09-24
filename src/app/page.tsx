import Image from "next/image";
import { Slogon } from "./components/Slogan";
import { TailwindIndicator } from "./components/tailwind-indicator";
import { Achievement } from "./components/Achievement";
import { Carousel } from "./components/Carousel";
import { Banner } from "./components/Banner";

export default function Home() {
  return (
    <main className=" min-h-screen flex-col items-center justify-between p-14 font-miriam-libre">
      <Banner />
      <div className="flex h-full w-full flex-col items-center">
        <Carousel />
        <Achievement />
        <Slogon />
      </div>
      <TailwindIndicator />
    </main>
  );
}

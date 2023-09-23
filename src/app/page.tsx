/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Slogon } from "./components/Slogan";
import { TailwindIndicator } from "./components/tailwind-indicator";
import { Achievement } from "./components/Achievement";

export default function Home() {
  return (
    <main className=" min-h-screen flex-col items-center justify-between p-14 font-miriam-libre">
      <div className="h-[50rem]">
        <div>w</div>
        <div>w</div>
      </div>
      <div className="flex h-full w-full flex-col items-center">
        <Achievement />
        <Slogon />
      </div>
      <TailwindIndicator />
    </main>
  );
}

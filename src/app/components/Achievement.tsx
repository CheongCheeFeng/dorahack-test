"use client";
import { useInView } from "framer-motion";
import { cn } from "../../utils/utils";
import { useRef } from "react";
import { AchievementCounter } from "./AchievementCounter";
import { AchievementData } from "./AchievementData";

type AchievementProps = {
  className?: string;
};
export function Achievement({ className }: AchievementProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -150px 0px" });
  return (
    <div
      ref={ref}
      className={cn(
        "relative z-50 mx-10 flex flex-wrap items-center justify-between overflow-hidden rounded-xl bg-white px-5 py-5 shadow-lg",
        "max-xxs:p-0 max-xxs:m-0  max-xxs:flex-col",
        "max-md:px-8 max-md:pb-5 max-md:pt-8 max-sm:px-2 ",
        "md:w-[85%] md:flex-row md:flex-nowrap ",
        "lg:px-10",
        className,
      )}
    >
      <AchievementData title="Funded" isInView={isInView} duration={1500}>
        <AchievementCounter
          from={0}
          to={29.33}
          isDecimal={true}
          delay={0}
          textColor="text-green"
        />
      </AchievementData>

      <hr className="hidden h-10 flex-[0_0_2px] rounded-full bg-[#e5e5e9] md:block" />

      <AchievementData
        title="Community Contributions"
        isInView={isInView}
        duration={3000}
      >
        <AchievementCounter
          from={0}
          to={8.88}
          isDecimal={true}
          delay={1.5}
          textColor="text-green"
        />
      </AchievementData>

      <hr className="hidden h-10 flex-[0_0_2px] rounded-full bg-[#e5e5e9]  md:block" />

      <AchievementData title="BUIDLS" isInView={isInView} duration={4500}>
        <AchievementCounter
          from={0}
          to={7243}
          isDecimal={false}
          delay={3}
          textColor="text-primary-orange"
        />
      </AchievementData>

      <hr className="hidden h-10 flex-[0_0_2px] rounded-full bg-[#e5e5e9] md:block" />

      <AchievementData
        title="Active Builders"
        isInView={isInView}
        duration={6000}
      >
        <AchievementCounter
          from={0}
          to={99411}
          isDecimal={false}
          delay={4.5}
          textColor="text-primary-orange"
        />
      </AchievementData>
    </div>
  );
}

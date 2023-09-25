import { FC } from "react";
import { cn } from "../../utils/utils";

type AchievementDataProps = {
  title: string;
  duration: string;
  isInView?: boolean;
  children: React.ReactNode;
};

export const AchievementData: FC<AchievementDataProps> = ({
  isInView,
  title,
  duration,
  children,
}) => {
  return (
    <div className="mb-3 flex h-full w-[48%] flex-col justify-between gap-1 sm:self-end md:mb-0 md:w-fit md:flex-[0_0_auto] lg:gap-3">
      <p
        className={cn(
          "lg:text-lg",
          isInView ? `${duration} translate-y-0` : "translate-y-10",
        )}
      >
        {title}
      </p>
      <b className="text-4xl max-sm:text-3xl md:max-lg:text-[1.55rem]">
        {children}
      </b>
    </div>
  );
};

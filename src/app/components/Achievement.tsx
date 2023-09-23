import { cn } from "../utils";

type AchievementProps = {
  className?: string;
};
export function Achievement({ className }: AchievementProps) {
  return (
    <div
      className={cn(
        "relative z-50 mx-10 flex flex-wrap items-center justify-between rounded-xl bg-blue-500 px-5 py-5 shadow-lg",
        "max-xxs:p-0 max-xxs:m-0  max-xxs:flex-col",
        "max-md:px-8 max-md:pb-5 max-md:pt-8 max-sm:px-2 ",
        "md:w-[85%] md:flex-row md:flex-nowrap md:gap-1",
        "lg:px-10",
        className,
      )}
    >
      <div className="mb-3 flex h-full w-[48%] flex-col justify-between gap-1 sm:self-end md:mb-0 md:w-fit md:flex-[0_0_auto] lg:gap-3">
        <p className="name lg:text-lg">Funded</p>
        <b className="text-4xl max-sm:text-3xl md:max-lg:text-[1.55rem]">
          <span className="unit">$</span> <span className="number">29.33</span>{" "}
          <span className="unit">M</span>
        </b>
      </div>
      <hr className="hidden h-10 w-0.5 rounded-full bg-[#e5e5e9] md:block" />

      <div className="mb-3 flex h-full w-[48%] flex-col  gap-1 md:mb-0 md:w-fit md:flex-[0_0_auto] lg:gap-3">
        <p className="name lg:text-lg">Community Contributions</p>
        <b className="text-4xl max-sm:text-3xl md:max-lg:text-[1.55rem]">
          <span className="unit">$</span> <span className="number">8.88</span>{" "}
          <span className="unit">M</span>
        </b>
      </div>
      <hr className="hidden h-10 w-0.5 rounded-full bg-[#e5e5e9] md:block" />

      <div className="mb-3 flex h-full w-[48%] flex-col  gap-1 md:mb-0 md:w-fit md:flex-[0_0_auto] lg:gap-3">
        <p className="name lg:text-lg">BUIDLS</p>
        <b className="text-4xl max-sm:text-3xl md:max-lg:text-[1.55rem]">
          <span className="number">7,243</span>
        </b>
      </div>
      <hr className="hidden h-10 w-0.5 rounded-full bg-[#e5e5e9] md:block" />

      <div className="mb-3 flex h-full w-[48%] flex-col  gap-1 md:mb-0 md:w-fit md:flex-[0_0_auto] lg:gap-3">
        <p className="name lg:text-lg">Active Builders</p>
        <b className="text-4xl max-sm:text-3xl md:max-lg:text-[1.55rem]">
          <span className="number">99,411</span>
        </b>
      </div>
    </div>
  );
}

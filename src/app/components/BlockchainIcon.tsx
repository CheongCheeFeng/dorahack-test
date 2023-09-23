import React, { FC } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../utils";

const iconVariants = cva("border border-slate-200 absolute bg-white", {
  variants: {
    size: {
      default: "md:h-14 md:w-14 md:rounded-lg md:p-1 h-8 w-8 rounded-lg p-1",
      sm: "md:h-[52px] md:w-[52px] md:rounded-lg md:p-1 h-7 w-7 rounded-lg p-1",
      md: "md:h-16 md:w-16 md:rounded-xl md:p-1.5 h-9 w-9 rounded-lg p-1",
      lg: "md:h-[72px] md:w-[72px] md:rounded-2xl md:p-1.5 h-10 w-10 rounded-lg p-1",
      xlg: "md:h-20 md:w-20 md:rounded-2xl md:p-1.5 h-11 w-11 rounded-lg p-1",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type BlockchainIconProps = {
  className?: string;
  children?: React.ReactNode;
} & VariantProps<typeof iconVariants>;
export const BlockchainIcon: FC<BlockchainIconProps> = ({
  className,
  children,
  size,
}) => {
  return (
    <div className={cn(iconVariants({ size, className }))}>{children}</div>
  );
};

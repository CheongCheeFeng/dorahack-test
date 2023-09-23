import React, { FC } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../utils";
import { motion } from "framer-motion";

const iconVariants = cva("border border-slate-200 bg-white", {
  variants: {
    size: {
      default: " h-8 w-8 rounded-lg p-1",
      sm: " h-7 w-7 rounded-lg p-1",
      md: " h-9 w-9 rounded-lg p-1",
      lg: " md:p-1.5 h-10 w-10 rounded-lg p-1",
      xlg: " h-11 w-11 rounded-lg p-1",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type BlockchainIconProps = {
  className?: string;
  children?: React.ReactNode;
  delay?: number;
  x?: number | string;
  y?: number | string;
} & VariantProps<typeof iconVariants>;
export const BlockchainIcon: FC<BlockchainIconProps> = ({
  className,
  children,
  delay = 0,
  x,
  y,
  size,
}) => {
  return (
    <motion.div
      initial={{ x: x, y: "100px" }}
      animate={{ x: x, y: y }}
      transition={{ ease: "easeInOut", duration: 1.5, delay: delay }}
      className={cn(iconVariants({ size, className }))}
    >
      {children}
    </motion.div>
  );
};

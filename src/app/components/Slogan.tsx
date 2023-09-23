"use client";
import Image from "next/image";
import { Icons } from "../assets/icon";
import { BlockchainIcon } from "./BlockchainIcon";
import { cn } from "../utils";
export function Slogon() {
  return (
    <div className="relative -mt-24 flex w-full flex-col overflow-hidden bg-world bg-cover pt-24 md:-mt-12 md:block">
      <p
        className={cn(
          "relative z-50  px-9 pt-6 text-[26px] font-[700] tracking-wide",
          "md:w-full md:pb-9  md:pr-[45%] md:pt-16 ",
          "lg:text-[28px] xl:pr-[52%]",
        )}
      >
        Build with the best ecosystems on{" "}
        <span className="gradient-unicorn bg-clip-text bg-[100%_center] text-transparent">
          DoraHacks
        </span>
      </p>
      <div className="relative mx-auto h-24 w-[432px] md:absolute md:left-[50%] md:top-[50%] md:w-full md:flex-1 md:self-end">
        <BlockchainIcon
          size="lg"
          className={cn("left-24 top-0", "md:-top-14 md:left-[24rem]")}
        >
          <Icons.aptos />
        </BlockchainIcon>
        <BlockchainIcon
          size="xlg"
          className={cn(
            "bottom-1 left-[12rem]",
            "md:-bottom-2 md:left-[20rem]",
          )}
        >
          <Icons.binance />
        </BlockchainIcon>
        <BlockchainIcon
          size="default"
          className={cn("bottom-2 left-72", "md:left-[30rem] md:top-0")}
        >
          <Icons.cosmos />
        </BlockchainIcon>
        <BlockchainIcon
          size="default"
          className={cn("-top-1 left-44", "md:left-[3.5rem] md:top-5")}
        >
          <Icons.ethereum />
        </BlockchainIcon>
        <BlockchainIcon
          size="lg"
          className={cn("left-10 top-6", "md:left-[10rem] md:top-[2rem]")}
        >
          <Icons.filecoin />
        </BlockchainIcon>
        <BlockchainIcon
          size="md"
          className={cn("left-36 top-7", "md:-top-16 md:left-[13rem]")}
        >
          <Icons.opensea />
        </BlockchainIcon>
        <BlockchainIcon
          size="default"
          className={cn("bottom-1.5 left-24", "md:bottom-7 md:left-[16rem]")}
        >
          <Icons.polygon />
        </BlockchainIcon>
        <BlockchainIcon
          size="default"
          className={cn(
            "left-[15rem] top-7",
            "md:-top-[2.5rem] md:left-[8rem]",
          )}
        >
          <Icons.solana />
        </BlockchainIcon>
      </div>
    </div>
  );
}

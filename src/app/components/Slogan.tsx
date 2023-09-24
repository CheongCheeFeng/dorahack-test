"use client";
import { Icons } from "../../utils/icon";
import { BlockchainIcon } from "./BlockchainIcon";
import { cn } from "../../utils/utils";
import { useRef } from "react";
import { useInView } from "framer-motion";
export function Slogon() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -130px 0px" });

  return (
    <div
      ref={ref}
      className="relative -mt-24  w-full overflow-hidden bg-world bg-cover px-5 pb-5 pt-28 md:-mt-12 md:px-10 md:pb-9 md:pt-20"
    >
      <p
        className={cn(
          "relative z-50 text-[26px] font-[700] tracking-wide md:max-w-[46%]",
        )}
      >
        Build with the best ecosystems on{" "}
        <span className="gradient-unicorn bg-clip-text bg-[100%_center] text-transparent">
          DoraHacks
        </span>
      </p>
      <div className="h-20 translate-y-2 md:absolute md:bottom-0 md:left-1/2 md:w-1/2 md:-translate-y-5 md:translate-x-20 md:scale-150">
        {isInView ? (
          <>
            <BlockchainIcon size="lg" x="10rem" y="0rem" delay={0.54}>
              <Icons.aptos />
            </BlockchainIcon>
            <BlockchainIcon size="xlg" x="12rem" y="0rem" delay={0.37}>
              <Icons.binance />
            </BlockchainIcon>
            <BlockchainIcon size="default" x="9.5rem" y="-2rem" delay={0.35}>
              <Icons.cosmos />
            </BlockchainIcon>
            <BlockchainIcon size="default" x="15rem" y="-8rem" delay={0.12}>
              <Icons.ethereum />
            </BlockchainIcon>
            <BlockchainIcon size="lg" x="19rem" y="-8rem" delay={0.3}>
              <Icons.filecoin />
            </BlockchainIcon>
            <BlockchainIcon size="md" x="7rem" y="-10rem" delay={0.15}>
              <Icons.opensea />
            </BlockchainIcon>
            <BlockchainIcon size="default" x="16rem" y="-11rem" delay={0.25}>
              <Icons.polygon />
            </BlockchainIcon>
            <BlockchainIcon size="default" x="4rem" y="-14rem" delay={0.2}>
              <Icons.solana />
            </BlockchainIcon>
          </>
        ) : null}
      </div>
    </div>
  );
}

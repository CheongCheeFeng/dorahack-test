"use client";
import { animate, useInView } from "framer-motion";
import React, { RefObject, useEffect, useRef, useState } from "react";
import { cn } from "../utils";

export function AchievementCounter({
  from,
  to,
  isDecimal,
  delay,
  textColor,
}: {
  from: number;
  to: number;
  isDecimal: boolean;
  delay: number;
  textColor: string;
}) {
  const ref: RefObject<HTMLDivElement> = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const [showUnit, setShowUnit] = useState(false);
  const [startTransition, setStartTransition] = useState(false);
  useEffect(() => {
    const controls = animate(from, to, {
      delay: delay,
      duration: 1.5,
      onUpdate(value) {
        if (ref.current != null && isInView) {
          ref.current.textContent = isDecimal
            ? value.toFixed(2)
            : Math.floor(value).toLocaleString("en-US");
          if (value === to && isDecimal) {
            setShowUnit(true);
          }
          if (value > 0) {
            setStartTransition(true);
          }
        }
      },
    });
    return () => controls.stop();
  }, [from, to, isDecimal, delay, isInView]);

  return (
    <>
      {isDecimal ? (
        <span
          className={cn(
            showUnit ? `${textColor} duration-700` : "text-transparent",
          )}
        >
          ${" "}
        </span>
      ) : null}
      <span className="relative text-transparent">
        {to}
        <span
          ref={ref}
          className={cn(
            "absolute left-0",
            startTransition ? textColor : "text-transparent",
          )}
        >
          {ref.current?.textContent}
        </span>
      </span>
      {isDecimal ? (
        <span
          className={cn(
            showUnit ? `${textColor} duration-700` : "text-transparent",
          )}
        >
          {" "}
          M
        </span>
      ) : null}
    </>
  );
}

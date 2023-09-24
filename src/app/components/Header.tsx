import React from "react";
import { cn } from "../../utils/utils";
import { Icons } from "../../utils/icon";
import { navItems } from "../dummyData";

export const Header = () => (
  <header className={cn("sticky top-0 z-50 w-full border-b bg-white ")}>
    <div className="container mx-auto flex h-[70px] items-center">
      <div className="mr-4 flex w-full flex-row justify-between md:w-auto">
        <a className="mr-10" href="/">
          <Icons.logo />
        </a>
        <nav className=" hidden  items-center gap-6 text-sm font-medium md:flex">
          <Icons.fourSquare />
          {navItems.map((item, index) => (
            <a
              className="text-foreground/60 hover:text-foreground/80 text-base transition-colors"
              href="/"
              key={index}
            >
              {item}
            </a>
          ))}
        </nav>
        <button
          className="mr-2 inline-flex h-9 items-center justify-center rounded-md px-0 py-2 text-base font-medium md:hidden"
          type="button"
        >
          <Icons.menu className="h-10 w-10" />
          <span className="sr-only">Toggle Menu</span>
        </button>
      </div>

      <div className="hidden flex-1 items-center gap-3 space-x-2 md:justify-end lg:flex">
        <Icons.search className="h-5 w-5" />
        <button className="border-primary-orange text-primary-orange rounded-md border px-4 py-2 text-sm">
          Log in/ Sign up
        </button>
        <div>English</div>
      </div>
    </div>
  </header>
);

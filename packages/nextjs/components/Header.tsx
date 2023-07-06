import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import DropdownMenu from "./Dropdown";
import { Bars3Icon, BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useOutsideClick } from "~~/hooks/scaffold-eth";

export const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      passHref
      className={`${
        isActive ? "bg-secondary shadow-md" : ""
      } hover:bg-secondary hover:shadow-md focus:bg-secondary py-1.5 px-3 text-sm rounded-full gap-2`}
    >
      {children}
    </Link>
  );
};

/**
 * Site header
 */
export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  const navLinks = (
    <>
    <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <DropdownMenu href="/about" title="About">
            <NavLink href="/about/what-is-ninit">What is Ninit?</NavLink>
            <NavLink href="/about/team">About the Team</NavLink>
            <NavLink href="/about/projects">Projects</NavLink>
            <NavLink href="/about/news">News+Community</NavLink>
          </DropdownMenu>
        </li>
        <li>
          <DropdownMenu href="/community" title="Community">
            <NavLink href="https://discord.gg/your-server-invite-link" >Discord</NavLink>
            <NavLink href="https://twitter.com/your-twitter-handle">Twitter</NavLink>
            <NavLink href="https://t.me/your-telegram-channel">Telegram</NavLink>
            <NavLink href="/community/events">Events</NavLink>
          </DropdownMenu>
        </li>
        <li>
          <DropdownMenu href="/resources" title="Resources">
            <NavLink href="/resources/documentation">Documentation</NavLink>
            <NavLink href="/resources/litepaper">Litepaper</NavLink>
            <NavLink href="/resources/academy">Academy</NavLink>
            <NavLink href="/resources/projects">Projects</NavLink>
          </DropdownMenu>
    

        </li>
    </>
  );
  
  return (
    <div className="sticky lg:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2">
      <div className="navbar-start w-auto lg:w-1/2">
        <div className="lg:hidden dropdown" ref={burgerMenuRef}>
          <label
            tabIndex={0}
            className={`ml-1 btn btn-ghost ${isDrawerOpen ? "hover:bg-secondary" : "hover:bg-transparent"}`}
            onClick={() => {
              setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
            }}
          >
            <Bars3Icon className="h-1/2" />
          </label>
          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              {navLinks}
            </ul>
          )}
        </div>
        <Link href="/" passHref className="hidden lg:flex items-center gap-2 ml-4 mr-6">
          <div className="flex relative w-10 h-10">
            <Image alt="SE2 logo" className="cursor-pointer" fill src="/DallN.png" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold leading-tight">Ninit</span>  
          </div>
        </Link>
        <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>
      <div className="navbar-end flex-grow mr-4">
        <RainbowKitCustomConnectButton />
        <FaucetButton />
      </div>
    </div>
  );
};

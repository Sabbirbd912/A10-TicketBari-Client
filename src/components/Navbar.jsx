"use client";

import { signOut, useSession } from "@/lib/auth-client";
import { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { ThemeSwitch } from "./ThemeToggle";
import MyNavLink from "./MyNavLink";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data, isPending } = useSession();
  const user = data?.user;
  console.log(user);

  const logOut = () => {
    signOut();
    toast.success("You are logged out!");
  };

  const navItems = (
    <>
      <MyNavLink href="/">Home</MyNavLink>
      <MyNavLink href="/about">About</MyNavLink>
      <MyNavLink href="/ticket">Ticket</MyNavLink>
      <MyNavLink href="/dashboard">Dashboard</MyNavLink>
      <MyNavLink href="/contact">Contact</MyNavLink>
    </>
  );

  if (isPending) {
    return (
      <div className="w-full h-16 bg-background flex justify-center items-center fixed top-0 z-50 border-b border-divider">
        <span className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></span>
      </div>
    );
  }

  return (
    <div className="sticky top-0 z-40 w-full border-b border-divider bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1 text-default-600 hover:bg-default-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-foreground hover:opacity-90"
          >
            <Image
              src="/images/logo/logo-bg.png"
              alt="TicketBari Logo"
              width={36}
              height={36}
              className="object-contain rounded-full"
            />
            <span className="bg-linear-to-r from-blue-500 to-green-600 bg-clip-text text-transparent">
              TicketBari
            </span>
          </Link>
        </div>

        <div className="hidden items-center gap-2 md:flex">{navItems}</div>

        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="w-16 h-8 rounded-4xl bg-lime-300"></div>
              <span className="hidden sm:block text-sm font-semibold text-default-700">
                {user.name}
              </span>

              <Dropdown
                placement="bottom-end"
                className="bg-background border border-divider"
              >
                <DropdownTrigger></DropdownTrigger>

                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem
                    key="profile"
                    as="span"
                    href="/dashboard"
                    textValue="My Profile"
                  >
                    My Profile
                  </DropdownItem>

                  <DropdownItem
                    onClick={logOut}
                    key="logout"
                    className="text-danger"
                    color="danger"
                    textValue="Log Out"
                  >
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          ) : (
            <div className="hidden items-center gap-3 md:flex">
              <Link href="/login">
                <Button
                  as="span"
                  size="sm"
                  variant="light"
                  className="font-medium"
                >
                  Login
                </Button>
              </Link>

              <Link href="/signup">
                <Button
                  as="span"
                  size="sm"
                  className="font-medium shadow-sm bg-linear-to-r from-neutral-900 to-emerald-600 text-white hover:opacity-90 transition-opacity"
                >
                  Register
                </Button>
              </Link>
            </div>
          )}

          <div className="flex items-center">
            <ThemeSwitch />
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="border-t border-divider md:hidden bg-background">
          <nav className="flex flex-col gap-2 p-4">
            {navItems}

            {!user && (
              <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-divider">
                <Button as={Link} href="/login" size="sm" variant="bordered">
                  Login
                </Button>
                <Button as={Link} href="/signup" size="sm" color="primary">
                  Register
                </Button>
              </div>
            )}
          </nav>
        </div>
      )}
    </div>
  );
}

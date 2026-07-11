"use client";

import { useState } from "react";
import { Link, Button } from "@heroui/react";
import Image from "next/image";
import { ThemeSwitch } from "./ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-divider bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden p-1 text-default-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
        <ul className="hidden items-center gap-6 md:flex">
          <li>
            <Link
              href="/"
              color="foreground"
              className="text-sm font-medium hover:text-primary"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              color="foreground"
              className="text-sm font-medium hover:text-primary"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/ticket"
              color="foreground"
              className="text-sm font-medium hover:text-primary"
            >
              Ticket
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              size="sm"
              color="foreground"
              className="text-sm font-medium hover:text-primary mr-2"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              color="foreground"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="hidden items-center gap-3 md:flex">
          <Button
            as={Link}
            href="/login"
            size="sm"
            variant="light"
            className="font-medium"
          >
            Login
          </Button>

          <Link href="/signup">
            <Button
              as="span"
              size="sm"
              className="font-medium shadow-sm bg-linear-to-r from-neutral-900 to-emerald-600 text-white hover:opacity-90 transition-opacity"
            >
              Register
            </Button>
          </Link>
          
          <div className="pl-1 flex items-center">
            <ThemeSwitch />
          </div>
        </div>
        <div className="flex items-center md:hidden">
          <ThemeSwitch />
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-divider md:hidden bg-background">
          <ul className="flex flex-col gap-1 p-4">
            <li>
              <Link href="/" color="foreground" className="block py-2 text-sm">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                color="foreground"
                className="block py-2 text-sm"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/ticket"
                color="foreground"
                className="block py-2 text-sm"
              >
                Ticket
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                color="foreground"
                className="block py-2 text-sm"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                color="foreground"
                className="block py-2 text-sm"
              >
                Contact
              </Link>
            </li>

            <div className="grid grid-cols-2 gap-2 mt-2">
              <Button as={Link} href="/login" size="sm" variant="bordered">
                Login
              </Button>
              <Button as={Link} href="/register" size="sm" color="primary">
                Register
              </Button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

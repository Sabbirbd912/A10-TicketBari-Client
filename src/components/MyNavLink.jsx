"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MyNavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 block md:inline-block
        ${
          isActive
            ? "bg-primary/10 text-primary font-semibold shadow-xs"
            : "text-default-600 hover:text-primary hover:bg-default-100"
        }`}
    >
      {children}
    </Link>
  );
}
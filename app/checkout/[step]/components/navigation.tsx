"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navigation: React.FC<{
  links: { label: string; path: string }[];
}> = ({ links }) => {
  const pathname = usePathname();

  return (
    <ul>
      {links.map((link) => (
        <li key={link.path}>
          <Link
            className={`link ${pathname === link.path ? "active" : ""}`}
            href={link.path}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;

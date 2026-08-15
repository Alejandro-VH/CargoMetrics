"use client";

import { LayoutDashboard, Truck, UsersRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Clientes", href: "/dashboard/clients", icon: UsersRound },
    { label: "Flota", href: "/dashboard/trucks", icon: Truck },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex justify-around items-center z-50 pb-safe">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              isActive
                ? "text-emerald-600 dark:text-emerald-500"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-300"
            }`}
          >
            <Icon className="w-5 h-5 mb-1" strokeWidth={isActive ? 2.5 : 2} />
            <span
              className={`text-[10px] ${
                isActive ? "font-bold" : "font-medium"
              }`}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
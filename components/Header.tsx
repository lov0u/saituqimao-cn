"use client";

import { useState } from "react";
import Link from "next/link";
import { companyInfo } from "@/lib/company";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/vehicles", label: "车型展示" },
  { href: "/about", label: "关于我们" },
  { href: "/news", label: "新闻资讯" },
  { href: "/contact", label: "联系我们" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-brand-600 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-700 to-brand-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-brand-500/30">
              赛
            </div>
            <div>
              <div className="text-lg font-bold text-neutral-900">
                赛途车行
              </div>
              <div className="text-xs text-neutral-500 hidden sm:block">
                精选好车 品质保障
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-brand-600 hover:bg-brand-50 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Email CTA */}
          <a
            href={`mailto:${companyInfo.email}`}
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-700 to-brand-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-brand-500/30 transition-all text-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {companyInfo.email}
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-brand-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="菜单"
          >
            <svg
              className="w-6 h-6 text-brand-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
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
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="lg:hidden py-4 border-t border-brand-100 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2.5 text-sm font-medium text-neutral-700 hover:text-brand-600 hover:bg-brand-50 rounded-md transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`mailto:${companyInfo.email}`}
                className="mt-2 mx-4 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-brand-700 to-brand-600 text-white rounded-lg font-semibold"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {companyInfo.email}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

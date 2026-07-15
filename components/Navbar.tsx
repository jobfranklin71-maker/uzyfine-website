"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">

      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/logo.png"
            alt="UZYFINE TEKSOLUTIONS"
            width={45}
            height={45}
            className="rounded-full"
            priority
          />

          <div className="leading-tight">

            <h1 className="text-base font-bold text-teal-900">
              UZYFINE TEKSOLUTIONS
            </h1>

            <p className="text-xs text-gray-500">
              Innovate • Integrate • Elevate
            </p>

          </div>

        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 font-medium md:flex">

          <Link
            href="/"
            className="transition hover:text-teal-700"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="transition hover:text-teal-700"
          >
            About
          </Link>

          <Link
            href="/#services"
            className="transition hover:text-teal-700"
          >
            Services
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-teal-700"
          >
            Contact
          </Link>

        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-3xl">
            {open ? "✕" : "☰"}
          </span>
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (

        <nav className="border-t bg-white md:hidden">

          <Link
            href="/"
            className="block px-5 py-4 hover:bg-slate-50"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/about"
            className="block px-5 py-4 hover:bg-slate-50"
            onClick={() => setOpen(false)}
          >
            About
          </Link>

          <Link
            href="/#services"
            className="block px-5 py-4 hover:bg-slate-50"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>

          <Link
            href="/contact"
            className="block px-5 py-4 hover:bg-slate-50"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>

        </nav>

      )}

    </header>
  );
}
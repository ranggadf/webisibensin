"use client";

import Link from "next/link";
import Image from "next/image";

export default function Topbar() {
  return (
    <div className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* 🔥 LOGO (klik ke landing) */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <h1 className="text-lg md:text-xl font-semibold">
            Isi Bensin Kota Madiun
          </h1>
        </Link>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-8 font-medium">

          <Link href="/Peta" className="hover:text-blue-600 transition">
            Peta
          </Link>

          {/* 🔥 WAJIB pakai Link */}
          <Link href="/#fitur" className="hover:text-blue-600 transition">
            Fitur
          </Link>

          <Link href="/#aplikasi" className="hover:text-blue-600 transition">
            Aplikasi
          </Link>

        </div>

      </div>
    </div>
  );
}
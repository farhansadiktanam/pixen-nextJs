"use client"; // Include this if you're using browser-based hooks like window.history

import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import { LuMoveLeft } from "react-icons/lu";
import { Homemade_Apple } from "next/font/google";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center p-4">
      {/* Retro CRT Monitor Frame */}
      <div className="relative w-full max-w-2xl border-12 border-[#2a2a2a] rounded-xl bg-black p-1 shadow-2xl">
        {/* Screen Container */}
        <div className="relative aspect-video w-full overflow-hidden rounded-sm ring-2 ring-inset ring-white/5">
          <Image
            src="/notFoundImg.png" // Ensure your image is in /public/pixel-404.png
            alt="404 Page Not Found"
            fill
            className="object-cover"
            priority
          />

          {/* CRT Scanline Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.5)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-length:[100%_4px,4px_100%]" />

          {/* Vignette for that old-school depth */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
        </div>
      </div>

      {/* Retro UI Content */}
      <div className="mt-10 text-center space-y-8">
        <div className="space-y-3">
          <h1 className="text-5xl font-black text-white tracking-tighter  uppercase italic">
            Error: 404
          </h1>
          <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase">
            Map Data Corrupted — Path Not Found
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-mono px-10 py-7 text-xl border-b-8 border-emerald-900 active:border-b-0 active:translate-y-2 transition-all rounded-none"
            >
              {/* <Homemade_Apple className="mr-3 h-6 w-6" /> */}
              GO HOME
            </Button>
          </Link>

          <Button
            variant="link"
            className="text-zinc-400 hover:text-white font-mono uppercase tracking-tighter"
          >
            <LuMoveLeft className="mr-2 h-4 w-4" />
            Previous Save Point
          </Button>
        </div>
      </div>

      {/* Decorative Arcade Elements */}
      <div className="mt-16 flex gap-4 opacity-20">
        <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />
        <div className="h-3 w-3 rounded-full bg-yellow-500 animate-pulse delay-75" />
        <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse delay-150" />
      </div>
    </div>
  );
}

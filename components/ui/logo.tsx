"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LogoProps {
    className?: string;
    showText?: boolean;
}

export default function Logo({ className, showText = true }: LogoProps) {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            {/* Hexagon Icon */}
            <div className="relative w-10 h-10 flex items-center justify-center">
                <svg
                    viewBox="0 0 100 100"
                    className="absolute inset-0 w-full h-full fill-purple-600 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                >
                    <path d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z" />
                </svg>
                <code className="relative z-10 text-white font-bold text-xs mt-0.5">{"</>"}</code>
            </div>

            {/* Logo Text */}
            {showText && (
                <div className="flex flex-col leading-none">
                    <span className="text-2xl font-bold tracking-tight text-white font-display">MSR</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-medium whitespace-nowrap">
                        Muhammad Saim Raza
                    </span>
                </div>
            )}
        </div>
    );
}

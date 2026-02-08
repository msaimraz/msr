"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import Magnetic from "@/components/ui/magnetic";
import { motion } from "framer-motion";
import Logo from "@/components/ui/logo";

export function Clock() {
    const [time, setTime] = useState<string | null>(null);

    useEffect(() => {
        const updateTime = () => {
            setTime(new Date().toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
            }));
        };

        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    if (!time) return <p className="opacity-0">Local Time: --:--</p>;

    return <p>Local Time: {time}</p>;
}

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-black pt-32 overflow-hidden border-t border-white/5">
            {/* Scrolling Text overlay - reduced opacity further */}
            <div className="absolute top-0 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.03] pointer-events-none">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                    className="flex gap-4 text-[12rem] font-bold font-display uppercase leading-none text-white"
                >
                    <span>Digital Craftsmanship</span>
                    <span>—</span>
                    <span>Experience Design</span>
                    <span>—</span>
                </motion.div>
            </div>

            <div className="container mx-auto px-6 relative z-10 pb-10">
                <div className="grid lg:grid-cols-[1.5fr_1fr_1fr] gap-20 mb-32">
                    {/* Column 1: Let's Connect */}
                    <div>
                        <h2 className="text-5xl md:text-7xl font-bold font-display text-white mb-10 tracking-tighter leading-none">
                            Let&apos;s make it <br /> happen.
                        </h2>
                        <div className="flex flex-col gap-4 items-start">
                            <Magnetic>
                                <a href="mailto:msraza.02@gmail.com" className="inline-flex items-center gap-4 text-xl text-white border border-white/10 rounded-full px-8 py-4 hover:bg-white hover:text-black transition-all group">
                                    <Mail size={20} /> msraza.02@gmail.com <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
                                </a>
                            </Magnetic>
                            <Magnetic>
                                <a href="https://www.upwork.com/freelancers/~01e6fcc04c252730b4" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-xl text-purple-400 border border-purple-500/20 rounded-full px-8 py-4 hover:bg-purple-500 hover:text-white transition-all group">
                                    <span className="font-bold">Upwork</span> Hire Me on Upwork <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
                                </a>
                            </Magnetic>
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="flex flex-col gap-8">
                        <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Navigation</h3>
                        <nav className="flex flex-col gap-4">
                            <Link href="/about" className="text-xl text-white/60 hover:text-white transition-colors w-max">About</Link>
                            <Link href="/projects" className="text-xl text-white/60 hover:text-white transition-colors w-max">Projects</Link>
                            <Link href="/contact" className="text-xl text-white/60 hover:text-white transition-colors w-max">Contact</Link>
                        </nav>
                    </div>

                    {/* Column 3: Socials */}
                    <div className="flex flex-col gap-8">
                        <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Socials</h3>
                        <nav className="flex flex-col gap-4">
                            <a href="https://github.com/msaimraz" target="_blank" rel="noopener noreferrer" className="text-xl text-white/60 hover:text-white transition-colors w-max">Github</a>
                            <a href="https://linkedin.com/in/m-saim-raza" target="_blank" rel="noopener noreferrer" className="text-xl text-white/60 hover:text-white transition-colors w-max">LinkedIn</a>
                            <a href="https://www.upwork.com/freelancers/~01e6fcc04c252730b4" target="_blank" rel="noopener noreferrer" className="text-xl text-white/60 hover:text-white transition-colors w-max">Upwork</a>
                        </nav>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-10 text-xs text-neutral-600">
                    <Logo className="scale-75 origin-left opacity-80" />
                    <div className="flex gap-8 items-center">
                        <p>Designed with Passion</p>
                        <div className="h-1 w-1 rounded-full bg-neutral-800" />
                        <Clock />
                    </div>
                </div>
            </div>
        </footer>
    );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function CTA() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section className="py-40 relative overflow-hidden" ref={containerRef}>
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/10" />

            <motion.div style={{ y }} className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-5xl md:text-7xl font-bold font-display text-white mb-10 tracking-tighter leading-tight">
                    Building a modern <br /> website or <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">SaaS product?</span>
                </h2>

                <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-16">
                    I help startups and businesses build fast, scalable frontend experiences using React & Next.js. Available for freelance & select remote opportunities.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link href="/contact">
                        <Button as="div" size="lg" className="h-20 px-12 text-xl rounded-full bg-white text-black hover:scale-105 transition-transform duration-300 shadow-[0_0_50px_rgba(255,255,255,0.2)] cursor-pointer">
                            Let&apos;s Talk <ArrowRight className="ml-3 h-6 w-6" />
                        </Button>
                    </Link>
                    <Link href="/projects">
                        <Button as="div" variant="outline" size="lg" className="h-20 px-12 text-xl rounded-full border-white/10 hover:bg-white/5 text-white cursor-pointer transition-all duration-300">
                            View Projects
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}

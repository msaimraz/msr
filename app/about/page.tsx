"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Download, ArrowUpRight, Code, Layout, Smartphone, Database, Zap, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Timeline from "@/components/about/Timeline";
import Stats from "@/components/about/Stats";

export default function AboutPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <div className="min-h-screen bg-black overflow-hidden" ref={containerRef}>
            {/* Header Marquee */}
            <div className="pt-40 pb-20 relative border-b border-white/10">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                    <motion.div
                        animate={{ x: [-1000, 0] }}
                        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                        className="flex gap-4 text-[12rem] font-bold font-display uppercase leading-none text-white whitespace-nowrap"
                    >
                        <span>Developer</span>
                        <span>—</span>
                        <span>Designer</span>
                        <span>—</span>
                        <span>Creator</span>
                        <span>—</span>
                    </motion.div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-bold font-display text-white mb-8"
                    >
                        More Than <br /> Just Code.
                    </motion.h1>
                </div>
            </div>

            <div className="container mx-auto px-6 py-32">
                <div className="grid md:grid-cols-2 gap-20">
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8 text-xl text-neutral-400 leading-relaxed"
                    >
                        <p>
                            I&apos;m <span className="text-white font-bold">Muhammad Saim Raza</span>, a Frontend Engineer with over 3 years of experience building scalable, production-ready web applications using <span className="text-white">React, Next.js, and TypeScript</span>. My focus is on translating complex designs into performant, responsive interfaces that drive business value.
                        </p>
                        <p>
                            Throughout my career, I&apos;ve delivered high-impact systems for international clients, including <span className="text-purple-400">Colgate Palmolive</span>, <span className="text-blue-400">Smart Dental Compliance (UK)</span>, and <span className="text-orange-400">SharkSpeed (SE)</span>. I specialize in developing robust frontend architectures that are both maintainable and highly optimized.
                        </p>
                        <p>
                            I help startups and agencies bridge the gap between design and production code, ensuring that every pixel serves a purpose and every interaction feels seamless. By leveraging modern tools and engineering best practices, I deliver solutions that are fast, accessible, and ready for scale.
                        </p>

                        <div className="pt-8">
                            <a href="/Muhammad_Saim_Raza_Frontend_Developer.pdf" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="rounded-full px-8">
                                    <Download className="mr-2 h-4 w-4" /> Download Resume
                                </Button>
                            </a>
                        </div>
                    </motion.div>

                    {/* Image / Visual */}
                    <div className="relative">
                        <motion.div
                            style={{ y }}
                            className="aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 relative group shadow-2xl"
                        >
                            <Image
                                src="/assets/suit.png"
                                alt="Muhammad Saim Raza"
                                fill
                                className="object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl" />
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl" />
                    </div>
                </div>

                <Stats />

                {/* Timeline & Philosophy Grid */}
                <div className="grid lg:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-3xl font-bold font-display text-white mb-16">My Journey</h2>
                        <Timeline />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold font-display text-white mb-16">Core Philosophy</h2>
                        <div className="space-y-6">
                            {[
                                { title: "User Obsessed", desc: "I don't just build features; I build experiences for real people.", icon: <Layout className="w-6 h-6 text-purple-400" /> },
                                { title: "Pixel Perfection", desc: "God is in the details. Every margin, color, and animation timing matters.", icon: <Code className="w-6 h-6 text-blue-400" /> },
                                { title: "Performance First", desc: "A beautiful site is useless if it doesn't load instantly. Speed is a feature.", icon: <Zap className="w-6 h-6 text-yellow-400" /> }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                            <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div className="mt-40">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div>
                            <h2 className="text-3xl font-bold font-display text-white mb-4">Services Offered</h2>
                            <p className="text-neutral-500 max-w-md">Tailored digital solutions to elevate your brand&apos;s online presence.</p>
                        </div>
                        <div className="h-[1px] flex-grow bg-white/10 hidden md:block mx-10 mb-5" />
                        <Link href="/projects">
                            <Button variant="outline" className="rounded-full">View My Work <ArrowUpRight className="ml-2 w-4 h-4" /></Button>
                        </Link>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "React / Next.js Development", desc: "Building scalable, high-performance web applications with the latest React & Next.js features.", icon: <Layout /> },
                            { title: "Figma to Frontend", desc: "Translating complex design systems into pixel-perfect, responsive React components.", icon: <Smartphone /> },
                            { title: "SaaS Dashboard UI", desc: "Developing data-driven, intuitive dashboards with complex state management.", icon: <Zap /> },
                            { title: "Landing Pages", desc: "Crafting high-converting, performance-optimized landing pages for startups.", icon: <Layout /> },
                            { title: "Frontend Optimization", desc: "Improving Core Web Vitals, speed, and overall performance for existing apps.", icon: <Search /> },
                            { title: "API Integration", desc: "Seamlessly connecting frontends with robust backend architectures and third-party services.", icon: <Database /> }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-purple-500/30 transition-all duration-300"
                            >
                                <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit text-white group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-all duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

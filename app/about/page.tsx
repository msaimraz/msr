"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Download, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef } from "react";

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
                            I&apos;m <span className="text-white font-bold">Muhammad Saim Raza</span>, a dedicated Frontend Developer with a proven track record of over 3 years in crafting sophisticated, high-performance web applications. My approach combines technical precision with a deep understanding of user-centric design.
                        </p>
                        <p>
                            Throughout my career, I&apos;ve had the privilege of delivering real-world systems for major international clients, including <span className="text-purple-400">Colgate Palmolive (PK)</span>, <span className="text-blue-400">Smart Dental Compliance (UK)</span>, and <span className="text-orange-400">SharkSpeed (SE)</span>. These projects have shaped my ability to translate complex business requirements into seamless, pixel-perfect interactive experiences.
                        </p>
                        <p>
                            Specializing in the <span className="text-white">React ecosystem</span>—specifically <span className="text-white">Next.js</span> and <span className="text-white">TypeScript</span>—I push the boundaries of modern frontend engineering. I am also an early adopter of <span className="text-purple-400">AI-assisted development</span>, utilizing tools like Antigravity, Claude, and Lovable to rapidly prototype and ship scalable, production-ready code.
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

                {/* Core Expertise Section */}
                <div className="mt-40">
                    <h2 className="text-3xl font-bold font-display text-white mb-16">Core Expertise</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Interactive UI", desc: "Crafting fluid, motion-driven interfaces using React and Framer Motion that feel alive." },
                            { title: "Web Architecture", desc: "Designing scalable, maintainable frontend structures using Next.js and TypeScript." },
                            { title: "AI-Assisted Dev", desc: "Leveraging cutting-edge AI tools to accelerate development and focus on high-value logic." },
                            { title: "Performance", desc: "Optimizing Core Web Vitals and ensuring lightning-fast load times for global users." }
                        ].map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all hover:-translate-y-2 duration-500"
                            >
                                <h3 className="text-xl font-bold text-white mb-4">{exp.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">{exp.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education & Certs */}
                <div className="mt-40 grid md:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-3xl font-bold font-display text-white mb-10">Education</h2>
                        <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
                            <h3 className="text-xl font-bold text-white mb-2">BS Software Engineering</h3>
                            <p className="text-purple-400 mb-4">Virtual University of Pakistan</p>
                            <span className="text-sm text-neutral-500">2022 — Present</span>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold font-display text-white mb-10">Certifications</h2>
                        <div className="space-y-4">
                            {[
                                { title: "Web & App Development (MERN)", org: "Saylani Mass IT Training" },
                                { title: "Frontend Web Development", org: "ConsulNet Corporation" },
                                { title: "Microsoft Office 365", org: "Aptech Pakistan" }
                            ].map((cert, i) => (
                                <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex justify-between items-center group hover:bg-white/[0.05] transition-colors">
                                    <div>
                                        <h4 className="font-bold text-white">{cert.title}</h4>
                                        <p className="text-sm text-neutral-500">{cert.org}</p>
                                    </div>
                                    <ArrowUpRight className="text-neutral-700 group-hover:text-white transition-colors" />
                                </div>
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
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Full System Development", desc: "Building high-quality, scalable, and interactive web solutions from scratch." },
                            { title: "JS (ES6) Custom Scripting", desc: "Enhancing functionality and interactivity with clean, optimized JavaScript." },
                            { title: "Static & Dynamic Apps", desc: "Creating tailored websites using Next.js, React, and modern state management." },
                            { title: "CMS & CRM Customization", desc: "Helping businesses manage and personalize their content workflows seamlessly." },
                            { title: "Performance Optimization", desc: "Ensuring smooth performance with clean code and mobile-friendly responsive designs." },
                            { title: "Bug Fixing & Audits", desc: "Identifying bottlenecks and resolving complex issues to ensure product stability." }
                        ].map((service, i) => (
                            <div key={i} className="flex gap-6 group">
                                <div className="text-neutral-700 font-display text-4xl group-hover:text-purple-500 transition-colors">0{i + 1}</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Philosophy Grid */}
                <div className="mt-40">
                    <h2 className="text-3xl font-bold font-display text-white mb-16">Work Philosophy</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "User Obsessed", desc: "I don't just build features; I build experiences for real people." },
                            { title: "Pixel Perfection", desc: "God is in the details. Every margin, color, and animation timing matters." },
                            { title: "Performance First", desc: "A beautiful site is useless if it doesn't load instantly." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-10 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                                    <ArrowUpRight />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

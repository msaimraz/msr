"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";

const experiences = [
    {
        year: "May 2025 - Present",
        company: "Itnnovator",
        role: "Software Engineer (Remote)",
        description: "Driving engineering excellence and scalable frontend solutions for clients worldwide.",
        tags: ["Next.js", "Engineering", "Architecture"]
    },
    {
        year: "Nov 2022 - Present",
        company: "Interactive Media",
        role: "Frontend Developer",
        description: "Developed and maintained 10+ international projects for clients like Colgate Palmolive, Smart Dental, and SharkSpeed.",
        tags: ["React", "Next.js", "REST APIs"]
    },
    {
        year: "May 2024 - Present",
        company: "Upwork",
        role: "Frontend Developer (Freelance)",
        description: "Collaborating with global clients to transform complex ideas into high-quality, interactive web solutions.",
        tags: ["Freelance", "Interaction", "Custom JS"]
    },
];

export default function Experience() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], [300, -300]);

    return (
        <section className="py-32 relative z-10 overflow-hidden bg-black/50" ref={containerRef}>
            <div className="container mx-auto px-6 mb-20">
                <TextReveal
                    text="Experience"
                    className="text-5xl md:text-7xl font-bold font-display text-white tracking-tighter"
                />
            </div>

            {/* Horizontal Sliding Track */}
            <motion.div
                style={{ x }}
                className="flex gap-10 pl-6 md:pl-20 w-max"
            >
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="w-[450px] min-h-[350px] bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 group relative overflow-hidden"
                    >
                        {/* Subtle Card Glow */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-all duration-500" />

                        <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                            <ArrowRight className="text-white -rotate-45 h-6 w-6" />
                        </div>

                        <div>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium uppercase tracking-widest text-neutral-400 mb-6">{exp.year}</span>
                            <h3 className="text-3xl font-bold text-white mb-2 leading-tight">{exp.company}</h3>
                            <p className="text-lg text-purple-400/90 font-medium mb-4">{exp.role}</p>
                        </div>

                        <div className="mt-auto">
                            <p className="text-neutral-400 text-lg leading-relaxed mb-8">{exp.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {exp.tags.map(tag => (
                                    <span key={tag} className="text-xs text-neutral-500 border border-white/5 bg-white/[0.02] px-3 py-1.5 rounded-full hover:border-white/20 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

                {/* 'More' Card */}
                <div className="w-[350px] flex items-center justify-center pr-20">
                    <a href="/Muhammad_Saim_Raza_Frontend_Developer.pdf" target="_blank" rel="noopener noreferrer" className="text-left group cursor-pointer">
                        <p className="text-neutral-500 text-lg mb-2 group-hover:text-neutral-400 transition-colors">Seeking more?</p>
                        <h3 className="text-3xl font-bold text-white flex items-center gap-3 group-hover:text-purple-400 transition-colors">
                            Full Resume <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                        </h3>
                    </a>
                </div>
            </motion.div>
        </section>
    );
}

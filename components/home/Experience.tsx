"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";
import { Button } from "@/components/ui/button";

const experiences = [
    {
        year: "May 2023 - Present",
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
        year: "May 2023 - Present",
        company: "Upwork",
        role: "Frontend Developer (Freelance)",
        description: "Collaborating with global clients to transform complex ideas into high-quality, interactive web solutions.",
        tags: ["Freelance", "Interaction", "Custom JS"]
    },
];

export default function Experience() {
    return (
        <section className="py-32 relative z-10" id="experience">
            <div className="container mx-auto px-6 mb-20">
                <TextReveal
                    text="Experience"
                    className="text-5xl md:text-7xl font-bold font-display text-white tracking-tighter mb-10"
                />
            </div>

            <div className="container mx-auto px-6 relative">
                {/* Vertical Line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" />

                <div className="space-y-20">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Content Side */}
                            <div className="md:w-1/2 md:px-12">
                                <div className="p-8 rounded-3xl bg-neutral-900/50 backdrop-blur-xl border border-white/5 hover:border-purple-500/30 transition-colors group">
                                    <span className="text-purple-400 font-mono text-sm mb-4 block tracking-wider">{exp.year}</span>
                                    <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
                                    <p className="text-lg text-white/80 mb-4">{exp.role}</p>
                                    <p className="text-neutral-400 leading-relaxed mb-6">{exp.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-neutral-400 border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Center Dot */}
                            <div className="absolute left-6 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-4 h-4 rounded-full bg-black border-4 border-purple-500 z-10" />

                            {/* Empty Side for alignment */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center mt-20">
                    <a href="/Muhammad_Saim_Raza_Frontend_Developer.pdf" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="lg" className="rounded-full px-8 border-white/10 hover:bg-white/5">
                            View Full Resume <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}

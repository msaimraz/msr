"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const projects = [
    {
        title: "SAP Platform",
        category: "Stock Analytics",
        image: "/placeholder-1.jpg",
        description: "Built a robust stock agent platform using Next.js and Supabase with live market data integration through PSX APIs.",
        tags: ["Next.js", "Supabase", "PSX APIs"],
        href: "https://github.com/msaimraz",
        color: "from-purple-500 to-indigo-500",
    },
    {
        title: "Itnnovator",
        category: "Software Agency",
        image: "/placeholder-2.jpg",
        description: "Developing a modern, high-performance agency website focused on responsive design and speed.",
        tags: ["Next.js", "Motion", "Tailwind"],
        href: "https://itnnovator.com",
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "ED Management",
        category: "School System",
        image: "/placeholder-3.jpg",
        description: "Developed a comprehensive school management system with custom admin panels and dynamic CRUD features.",
        tags: ["Next.js", "CRUD", "Management"],
        href: "https://edschool.pk",
        color: "from-emerald-500 to-teal-500",
    },
];

function Card({ project, index, range, targetScale, progress }: {
    project: typeof projects[0],
    index: number,
    range: [number, number],
    targetScale: number,
    progress: MotionValue<number>
}) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"]
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${index * 25}px)` }}
                className="relative flex flex-col w-[1000px] h-[550px] bg-neutral-900 rounded-[30px] border border-white/10 p-12 origin-top transform-gpu shadow-2xl overflow-hidden"
            >
                {/* Content */}
                <div className="flex gap-12 h-full z-10 relative">
                    <div className="w-[40%] flex flex-col justify-between">
                        <div>
                            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white mb-6 backdrop-blur-md">
                                {project.category}
                            </span>
                            <h3 className="text-4xl font-bold font-display text-white mb-4 leading-tight">{project.title}</h3>
                            <p className="text-lg text-neutral-400">{project.description}</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-sm text-neutral-500 bg-black/20 px-3 py-1 rounded-full">{tag}</span>
                            ))}
                        </div>

                        <Link href={project.href} className="mt-8">
                            <Button as="div" className="w-full h-12 text-base cursor-pointer">
                                View Case Study <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>

                    <div className="w-[60%] h-full rounded-2xl overflow-hidden relative">
                        <motion.div style={{ scale: imageScale }} className="w-full h-full">
                            {/* Image Placeholder */}
                            <div className={`w-full h-full bg-gradient-to-br ${project.color} opacity-20`} />
                            <div className="absolute inset-0 flex items-center justify-center text-white/10 text-4xl font-display font-bold">
                                PROJECT IMAGE
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Noise Overlay */}
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none mix-blend-overlay" />
            </motion.div>
        </div>
    )
}

export default function FeaturedProjects() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section className="relative z-10" id="work" ref={containerRef}>
            <div className="container mx-auto px-6 pt-32 mb-20 text-center">
                <h2 className="text-4xl font-bold font-display md:text-6xl text-white mb-6">Selected Work</h2>
                <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                    A collection of projects attempting to push boundaries.
                </p>
            </div>

            <div className="container mx-auto px-6 pb-32">
                {projects.map((project, index) => {
                    const targetScale = 1 - ((projects.length - index) * 0.05);
                    return <Card
                        key={index}
                        project={project}
                        index={index}
                        range={[index * 0.25, 1]}
                        targetScale={targetScale}
                        progress={scrollYProgress}
                    />
                })}
            </div>
        </section>
    );
}

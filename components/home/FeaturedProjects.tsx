"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { projects, Project } from "@/lib/data";

function Card({ project, index, range, targetScale, progress }: {
    project: Project,
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

    const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    // Automated screenshot URL using WordPress.com mshots
    const screenshotUrl = `https://s0.wp.com/mshots/v1/${encodeURIComponent(project.url)}?w=1200`;

    return (
        <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${index * 25}px)` }}
                className="relative flex flex-col w-[1200px] h-[650px] bg-[#0a0a0a] rounded-[32px] border border-white/10 p-14 origin-top transform-gpu shadow-2xl overflow-hidden"
            >
                <div className="flex gap-16 h-full z-10 relative">
                    {/* Text Content */}
                    <div className="w-[40%] flex flex-col justify-between py-4">
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-white">
                                    0{index + 1}
                                </span>
                                <span className={`text-sm font-bold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r ${project.color}`}>
                                    {project.category}
                                </span>
                            </div>

                            <h3 className="text-5xl font-bold font-display text-white mb-6 leading-[1.1]">
                                {project.title}
                            </h3>
                            <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-medium text-neutral-500 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <Link href={project.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-8">
                            <span className="group inline-flex items-center text-lg font-medium text-white border-b border-white/20 pb-1 hover:border-white transition-colors">
                                View Case Study <ArrowUpRight className="ml-2 h-5 w-5 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    </div>

                    {/* Image Container */}
                    <div className="w-[60%] h-full rounded-2xl overflow-hidden relative bg-neutral-900 border border-white/5">
                        <motion.div style={{ scale: imageScale }} className="w-full h-full relative">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={screenshotUrl}
                                alt={project.title}
                                className="object-cover w-full h-full"
                            />
                            {/* Cinematic Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </motion.div>
                    </div>
                </div>
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

    const recentProjects = projects.slice(0, 3);

    return (
        <div className="relative z-10 bg-black" ref={containerRef}>
            <div className="container mx-auto px-6 pt-32 mb-10">
                <h2 className="text-4xl md:text-7xl font-bold font-display text-white mb-6">Recent Work</h2>
                <p className="text-xl text-neutral-400 max-w-xl">
                    Deploying scalable solutions for enterprise and startups.
                </p>
            </div>

            <div className="pb-32">
                {recentProjects.map((project, index) => {
                    const targetScale = 1 - ((recentProjects.length - index) * 0.05);
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

            <div className="container mx-auto px-6 pb-32 flex justify-center">
                <Link href="/projects">
                    <Button variant="ghost" size="lg" className="text-lg px-8 py-6 rounded-full border border-white/10 hover:bg-white/5 text-white">
                        View All Projects <ArrowUpRight className="ml-2 h-5 w-5" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function ProjectsGrid() {
    const [filter, setFilter] = useState("All");

    // Extract unique categories
    const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

    const filteredProjects = projects.filter(
        (project) => filter === "All" || project.category === filter
    );

    return (
        <div>
            {/* Filter Tabs */}
            <div className="mb-12 flex flex-wrap justify-center gap-4">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`rounded-full px-6 py-2 text-sm transition-all ${filter === cat
                            ? "bg-white text-black font-medium"
                            : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence>
                    {filteredProjects.map((project) => {
                        const screenshotUrl = `https://s0.wp.com/mshots/v1/${encodeURIComponent(project.url)}?w=800`;

                        return (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                            >
                                <Link href={`/projects/${project.id}`} className="group block h-full">
                                    <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50 transition-all hover:border-white/20">
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                                        />

                                        <div className="relative z-10 p-6 flex flex-col h-full">
                                            <div className="aspect-[4/3] mb-6 w-full overflow-hidden rounded-xl bg-neutral-800 relative">
                                                {/* Automated Screenshot */}
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={screenshotUrl}
                                                    alt={project.title}
                                                    className="object-cover w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                                />
                                            </div>

                                            <div className="flex items-start justify-between">
                                                <h3 className="text-xl font-bold font-display text-white group-hover:underline decoration-white/30 underline-offset-4">
                                                    {project.title}
                                                </h3>
                                                <ArrowUpRight className="text-white/40 transition-colors group-hover:text-white" />
                                            </div>
                                            <p className="mt-2 text-sm text-neutral-400 line-clamp-2">{project.description}</p>

                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {project.tags.slice(0, 3).map(tag => (
                                                    <span key={tag} className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded-md">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        )
                    })}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

// Expanding the mock data
// Real project data from resume
const allProjects = [
    {
        id: "sap-platform",
        title: "SAP Stock Platform",
        category: "SaaS",
        image: "/placeholder-1.jpg",
        description: "A stock agent platform built with Next.js and Supabase, integrating live market data from PSX APIs.",
        tags: ["Next.js", "Supabase", "PSX APIs"],
        color: "from-purple-500/20 to-indigo-500/20",
    },
    {
        id: "itnnovator",
        title: "Itnnovator Agency",
        category: "Web",
        image: "/placeholder-2.jpg",
        description: "Modern software agency website focusing on high performance, SEO, and responsive digital presence.",
        tags: ["Next.js", "Motion", "Tailwind"],
        color: "from-blue-500/20 to-cyan-500/20",
    },
    {
        id: "ed-mgmt",
        title: "ED School System",
        category: "Enterprise",
        image: "/placeholder-3.jpg",
        description: "Comprehensive school management system with dynamic admin panels and custom CRUD features.",
        tags: ["Next.js", "Management", "Dashboards"],
        color: "from-emerald-500/20 to-teal-500/20",
    },
    {
        id: "colgate-palmolive",
        title: "Colgate Palmolive",
        category: "Web",
        image: "/placeholder-4.jpg",
        description: "Responsive web solutions for a major international corporate client, focusing on brand excellence.",
        tags: ["React", "Corporate", "Scalability"],
        color: "from-red-500/20 to-orange-500/20",
    },
    {
        id: "smart-dental",
        title: "Smart Dental UK",
        category: "Enterprise",
        image: "/placeholder-5.jpg",
        description: "Healthcare compliance platform ensuring regulatory excellence for dental practices in the UK.",
        tags: ["React", "Compliance", "Architecture"],
        color: "from-blue-600/20 to-blue-400/20",
    },
    {
        id: "sharkspeed",
        title: "SharkSpeed SE",
        category: "E-Commerce",
        image: "/placeholder-6.jpg",
        description: "Optimized frontend performance and interactivity for a Swedish e-commerce brand.",
        tags: ["React", "Performance", "E-Commerce"],
        color: "from-amber-500/20 to-orange-500/20",
    },
];

const categories = ["All", "SaaS", "E-Commerce", "Web", "Enterprise"];

export default function ProjectsGrid() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = allProjects.filter(
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
                    {filteredProjects.map((project) => (
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
                                        <div className="aspect-[4/3] mb-6 w-full overflow-hidden rounded-xl bg-neutral-800">
                                            <div className="w-full h-full flex items-center justify-center text-white/20">
                                                Project Preview
                                            </div>
                                        </div>

                                        <div className="flex items-start justify-between">
                                            <h3 className="text-xl font-bold font-display text-white group-hover:underline decoration-white/30 underline-offset-4">
                                                {project.title}
                                            </h3>
                                            <ArrowUpRight className="text-white/40 transition-colors group-hover:text-white" />
                                        </div>
                                        <p className="mt-2 text-sm text-neutral-400">{project.description}</p>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded-md">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

"use client";

import ProjectsGrid from "@/components/projects/ProjectsGrid";
import { motion } from "framer-motion";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 overflow-hidden">
            {/* Background Decoration */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6">
                <div className="mb-24 text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-6xl md:text-9xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-6 tracking-tighter"
                    >
                        Selected <br className="md:hidden" /> Works
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mx-auto max-w-2xl text-xl text-neutral-400"
                    >
                        A curated showcase of applications that push the boundaries of what's possible on the web.
                    </motion.p>
                </div>

                <ProjectsGrid />
            </div>
        </div>
    );
}

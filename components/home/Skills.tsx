"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Terminal, Database, Layout, Globe, Cpu, Smartphone, Server, Layers, Box, PenTool } from "lucide-react";

const row1 = [
    { name: "React", icon: <Layout /> },
    { name: "Next.js", icon: <Globe /> },
    { name: "TypeScript", icon: <Code2 /> },
    { name: "JavaScript", icon: <Code2 /> },
    { name: "Tailwind CSS", icon: <Palette /> },
    { name: "Antigravity", icon: <Cpu /> },
];

const row2 = [
    { name: "Node.js", icon: <Server /> },
    { name: "PHP", icon: <Server /> },
    { name: "Supabase", icon: <Database /> },
    { name: "Figma", icon: <PenTool /> },
    { name: "n8n", icon: <Terminal /> },
    { name: "GitHub", icon: <Box /> },
];

export default function Skills() {
    return (
        <section className="py-32 relative z-10 overflow-hidden bg-white/5 backdrop-blur-sm border-y border-white/5">
            <div className="mb-16 text-center">
                <h2 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest">Powering Next-Gen Apps With</h2>
            </div>

            <div className="flex flex-col gap-10">
                {/* Row 1 - Left */}
                <div className="relative flex overflow-hidden group">
                    <div className="flex animate-marquee whitespace-nowrap gap-10">
                        {[...row1, ...row1, ...row1].map((skill, i) => (
                            <div key={i} className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md hover:border-purple-500/50 hover:bg-purple-500/10 transition-colors">
                                <div className="text-neutral-400">{skill.icon}</div>
                                <span className="text-xl font-bold font-display">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap gap-10">
                        {[...row1, ...row1, ...row1].map((skill, i) => (
                            <div key={i} className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md hover:border-purple-500/50 hover:bg-purple-500/10 transition-colors">
                                <div className="text-neutral-400">{skill.icon}</div>
                                <span className="text-xl font-bold font-display">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 - Right (Reverse direction simulation needs just different animation name or css) 
                For simplicity in TailWind without custom config, we use the same marquee but verify config
            */}
                <div className="relative flex overflow-hidden group">
                    <div className="flex animate-marquee-reverse whitespace-nowrap gap-10">
                        {[...row2, ...row2, ...row2].map((skill, i) => (
                            <div key={i} className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md hover:border-blue-500/50 hover:bg-blue-500/10 transition-colors">
                                <div className="text-neutral-400">{skill.icon}</div>
                                <span className="text-xl font-bold font-display">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="absolute top-0 flex animate-marquee2-reverse whitespace-nowrap gap-10">
                        {[...row2, ...row2, ...row2].map((skill, i) => (
                            <div key={i} className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md hover:border-blue-500/50 hover:bg-blue-500/10 transition-colors">
                                <div className="text-neutral-400">{skill.icon}</div>
                                <span className="text-xl font-bold font-display">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

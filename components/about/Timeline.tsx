"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const education = [
    {
        year: "2023 - Present",
        title: "Freelance Frontend Developer",
        org: "International Clients",
        desc: "Delivered scalable web solutions for global brands including Colgate Palmolive (PK), Smart Dental Compliance (UK), and SharkSpeed (SE)."
    },
    {
        year: "2022 - Present",
        title: "BS Software Engineering",
        org: "Virtual University of Pakistan",
        desc: "Focusing on advanced algorithms, software architecture, and human-computer interaction."
    },
    {
        year: "2022",
        title: "Web & App Development (MERN)",
        org: "Saylani Mass IT Training",
        desc: "Intensive training in MongoDB, Express, React, and Node.js."
    },
    {
        year: "2021",
        title: "Frontend Web Development",
        org: "ConsulNet Corporation",
        desc: "Mastered fundamental web technologies including HTML5, CSS3, JavaScript, and responsive design principles."
    }
];

export default function Timeline() {
    return (
        <div className="space-y-12">
            {education.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 border-l border-white/10 last:border-0"
                >
                    <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-purple-500 box-content border-4 border-black" />
                    <span className="text-sm text-purple-400 font-mono mb-2 block">{item.year}</span>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-neutral-500 text-sm mb-2">{item.org}</p>
                    <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
                </motion.div>
            ))}
        </div>
    );
}

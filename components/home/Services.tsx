"use client";

import { motion } from "framer-motion";
import { Monitor, Palette, Zap, Code, Search, Layers } from "lucide-react";

const services = [
    {
        icon: <Monitor className="w-8 h-8" />,
        title: "Frontend Development",
        description: "Pixel-perfect, responsive websites converted from Figma to clean, reusable code."
    },
    {
        icon: <Palette className="w-8 h-8" />,
        title: "UI/UX Design",
        description: "Modern, intuitive interfaces designed with a focus on user experience and brand identity."
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Performance",
        description: "Optimizing applications for maximum speed, accessibility, and SEO ranking."
    },
    {
        icon: <Code className="w-8 h-8" />,
        title: "Full Stack",
        description: "Seamless integration of frontend wizards with robust backend architectures."
    }
];

export default function Services() {
    return (
        <section className="py-32 relative z-10" id="services">
            <div className="container mx-auto px-6">
                <div className="mb-20 max-w-2xl">
                    <h2 className="text-4xl font-bold font-display md:text-6xl text-white mb-6">What I Do</h2>
                    <p className="text-xl text-neutral-400">
                        I combine design and engineering to build high-quality digital products for brands and businesses.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-neutral-900/50 border border-white/10 p-8 rounded-3xl hover:bg-white/5 transition-colors group"
                        >
                            <div className="mb-6 text-white group-hover:text-purple-400 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-neutral-400">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

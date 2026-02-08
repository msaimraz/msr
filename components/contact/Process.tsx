"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
    {
        icon: <Search className="w-8 h-8 text-purple-400" />,
        title: "Discovery",
        description: "We start by understanding your goals, target audience, and functional requirements to build a solid foundation."
    },
    {
        icon: <Lightbulb className="w-8 h-8 text-blue-400" />,
        title: "Strategy & Design",
        description: "I create a roadmap and high-fidelity designs that align with your brand, ensuring a seamless user experience."
    },
    {
        icon: <Code2 className="w-8 h-8 text-green-400" />,
        title: "Development",
        description: "Using modern tech stacks like Next.js and Tailwind, I bring the designs to life with clean, scalable code."
    },
    {
        icon: <Rocket className="w-8 h-8 text-orange-400" />,
        title: "Launch & Scale",
        description: "After rigorous testing, we go live. I provide post-launch support to ensure your product scales effortlessly."
    }
];

export default function Process() {
    return (
        <section className="py-32 relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">How I Work</h2>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                        A transparent, collaborative process designed to deliver exceptional results.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group"
                        >
                            <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Production Projects", value: "10+" },
    { label: "Happy Clients", value: "15+" },
    { label: "Coffee Cups", value: "∞" }
];

export default function Stats() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-20 border-y border-white/5 my-32">
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                >
                    <h3 className="text-4xl md:text-5xl font-bold font-display text-white mb-2">{stat.value}</h3>
                    <p className="text-neutral-500 text-sm uppercase tracking-wider">{stat.label}</p>
                </motion.div>
            ))}
        </div>
    );
}

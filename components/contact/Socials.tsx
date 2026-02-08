"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Instagram, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const socials = [
    {
        name: "LinkedIn",
        icon: <Linkedin size={24} />,
        url: "https://www.linkedin.com/in/m-saim-raza/",
        color: "hover:text-[#0077b5] hover:border-[#0077b5]/50"
    },
    {
        name: "GitHub",
        icon: <Github size={24} />,
        url: "https://github.com/msaimraz",
        color: "hover:text-white hover:border-white/50"
    },
    {
        name: "Facebook",
        icon: <Facebook size={24} />,
        url: "https://www.facebook.com/Mr.MSROfficial",
        color: "hover:text-[#1877f2] hover:border-[#1877f2]/50"
    },
    {
        name: "Instagram",
        icon: <Instagram size={24} />,
        url: "https://www.instagram.com/mr.msrofficial/",
        color: "hover:text-[#e1306c] hover:border-[#e1306c]/50"
    }
];

export default function Socials() {
    return (
        <section className="py-32 relative z-10 border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-12">Connect Elsewhere</h2>

                <div className="flex flex-wrap justify-center gap-6">
                    {socials.map((social, index) => (
                        <Link key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className={`flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-neutral-400 transition-colors ${social.color}`}
                            >
                                {social.icon}
                                <span className="font-medium text-lg">{social.name}</span>
                                <ArrowUpRight size={18} />
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

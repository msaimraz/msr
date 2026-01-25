"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Magnetic from "@/components/ui/magnetic";
import Logo from "@/components/ui/logo";

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled ? "py-4" : "py-6"
            )}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Magnetic>
                        <Link href="/" className="relative z-50 mix-blend-difference">
                            <Logo />
                        </Link>
                    </Magnetic>

                    {/* Desktop Nav */}
                    <nav
                        className={cn(
                            "hidden md:flex items-center gap-2 rounded-full px-2 py-2 transition-all duration-500 bg-white/5 backdrop-blur-md border border-white/5",
                            scrolled && "bg-black/50 border-white/10 shadow-lg"
                        )}
                    >
                        {navLinks.map((link) => (
                            <Magnetic key={link.href}>
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "relative px-6 py-3 text-sm font-medium transition-colors hover:text-white rounded-full group overflow-hidden",
                                        pathname === link.href ? "text-black bg-white" : "text-white/60 hover:bg-white/5"
                                    )}
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    {pathname === link.href && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-white rounded-full z-0"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </Link>
                            </Magnetic>
                        ))}
                    </nav>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <Magnetic>
                            <button
                                className="relative z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </Magnetic>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black"
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {navLinks.map((link) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl font-light text-white font-display hover:text-purple-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

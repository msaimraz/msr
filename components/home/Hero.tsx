"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/text-reveal";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function handleMouseMove({ clientX, clientY, currentTarget }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[10%] left-[10%] h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[100px] animate-pulse" />
                <div className="absolute bottom-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[100px] animate-pulse" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-400 mb-6 backdrop-blur-md"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Available for freelance work
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold font-display text-white leading-[1.1] mb-6 tracking-tight">
                            Building <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Digital Reality</span> <br />
                            One Pixel at a Time.
                        </h1>

                        <p className="text-xl text-neutral-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            I&apos;m <span className="text-white font-medium">Saim</span>, a Frontend Developer with 3+ years of experience building responsive, production-ready web applications for international clients.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="/projects">
                                <Button as="div" size="lg" className="group relative overflow-hidden bg-white text-black hover:bg-white/90 transition-all duration-300 cursor-pointer">
                                    <span className="relative z-10 flex items-center">
                                        View Work
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                    <motion.div
                                        className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: '100%' }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button as="div" variant="secondary" size="lg" className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 cursor-pointer">
                                    Contact Me
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 text-neutral-500">
                            <a href="https://github.com/msaimraz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github size={24} /></a>
                            <a href="https://linkedin.com/in/m-saim-raza" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
                            <a href="https://www.upwork.com/freelancers/~01e6fcc04c252730b4" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <span className="font-bold text-lg">Up</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Image (3D Tilt) */}
                    <div className="relative order-1 lg:order-2 flex justify-center" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                        <motion.div
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: "preserve-3d",
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-[350px] h-[450px] md:w-[450px] md:h-[550px] bg-neutral-900 rounded-[30px] border border-white/10 shadow-2xl"
                        >
                            <div
                                className="absolute inset-0 rounded-[30px] overflow-hidden transform translate-z-[20px]"
                                style={{ transform: "translateZ(20px)" }}
                            >
                                <Image
                                    src="/assets/office.jpg"
                                    alt="Muhammad Saim Raza"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                style={{ transform: "translateZ(60px)" }}
                                className="absolute top-10 -right-10 bg-black/50 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-sm font-medium text-white">99% Code Quality</span>
                                </div>
                            </motion.div>

                            <motion.div
                                style={{ transform: "translateZ(80px)" }}
                                className="absolute bottom-20 -left-10 bg-black/50 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">✨</span>
                                    <div>
                                        <p className="text-xs text-neutral-400">Experience</p>
                                        <p className="text-sm font-bold text-white">3+ Years</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

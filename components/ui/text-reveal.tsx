"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
}

export const TextReveal = ({ text, className, delay = 0 }: TextRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i + delay },
        }),
    };

    const child: any = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };
    return (
        <motion.h1
            ref={ref}
            className={cn("flex flex-wrap overflow-hidden", className)}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {text.split(" ").map((word, index) => (
                <span key={index} className="mr-[0.2em] inline-block overflow-hidden pb-1">
                    <motion.span variants={child} className="inline-block">
                        {word}
                    </motion.span>
                </span>
            ))}
        </motion.h1>
    );
};

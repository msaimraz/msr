"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import Magnetic from "./magnetic";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-10 right-10 z-50">
                    <Magnetic>
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.5, y: 20 }}
                            onClick={scrollToTop}
                            className={cn(
                                "flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-2xl transition-all hover:bg-neutral-200"
                            )}
                            aria-label="Scroll to top"
                        >
                            <ArrowUp size={24} />
                        </motion.button>
                    </Magnetic>
                </div>
            )}
        </AnimatePresence>
    );
}

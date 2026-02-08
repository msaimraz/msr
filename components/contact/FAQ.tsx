"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What services do you offer?",
        answer: "I specialize in Full Stack Development using Next.js, React, and Node.js. My services include custom web application development, e-commerce solutions, corporate websites, and performance optimization."
    },
    {
        question: "What is your typical project timeline?",
        answer: "Timelines vary depending on complexity. A standard corporate website typically takes 2-4 weeks, while a complex web application can take 4-8 weeks or more. I provide a detailed schedule during the proposal phase."
    },
    {
        question: "Do you offer post-launch support?",
        answer: "Yes, I offer various support packages to ensure your website remains secure, up-to-date, and performs optimally. We can discuss a plan that fits your needs."
    },
    {
        question: "How do we handle payments?",
        answer: "Projects are typically split into milestones: a 40% deposit to start, 30% upon design approval, and the final 30% before launch. I'm open to discussing structures that work best for you."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-32 bg-neutral-900/50 relative z-10">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">Frequently Asked Questions</h2>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                        Answers to common questions about my workflow and services.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="flex items-center justify-between w-full p-6 text-left"
                            >
                                <span className="text-lg font-medium text-white">{faq.question}</span>
                                {activeIndex === index ? (
                                    <Minus className="text-purple-400" />
                                ) : (
                                    <Plus className="text-neutral-400" />
                                )}
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 pt-0 text-neutral-400 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

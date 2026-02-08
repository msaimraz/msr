"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Loader2, Send, Mail, MapPin, Phone } from "lucide-react";

import Process from "@/components/contact/Process";
import FAQ from "@/components/contact/FAQ";
import Socials from "@/components/contact/Socials";

export default function ContactPage() {
    // ... existing state and logic ...
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        // ... existing handleSubmit logic ...
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.target as HTMLFormElement);
        formData.append("access_key", "a6cdcb2a-3086-4fe2-8447-b7c62d347262");
        try {
            const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
            const data = await response.json();
            if (data.success) setIsSubmitted(true);
            else { console.error("Submission failed:", data); alert("Something went wrong. Please try again."); }
        } catch (error) { console.error("Error submitting form:", error); alert("Network error. Please check your connection."); } finally { setIsSubmitting(false); }
    };

    return (
        <div className="min-h-screen pt-20">
            <div className="flex flex-col md:flex-row min-h-[90vh]">
                {/* Left Side - Info */}
                <div className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/5 -z-10" />
                    <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-bold font-display text-white mb-8 leading-tight">
                            Let&apos;s <br /> Create.
                        </h1>
                        <p className="text-xl text-neutral-400 mb-12 max-w-md">
                            Have a project in mind? I&apos;m currently available for freelance work and open to full-time opportunities.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-white">
                                <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                    <Mail size={20} />
                                </div>
                                <span className="text-lg">msraza.02@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                    <Phone size={20} />
                                </div>
                                <span className="text-lg">+92 322 8604563</span>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                    <MapPin size={20} />
                                </div>
                                <span className="text-lg">Karachi, Pakistan</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-10 md:p-20 bg-neutral-900/50 backdrop-blur-sm border-l border-white/5 flex flex-col justify-center">
                    <div className="max-w-md w-full mx-auto">
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-20"
                            >
                                <div className="mb-6 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20 text-green-500 border border-green-500/30">
                                    <Send size={32} />
                                </div>
                                <h3 className="mb-2 text-3xl font-bold text-white">Message Sent!</h3>
                                <p className="text-neutral-400">
                                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                                </p>
                                <Button
                                    variant="outline"
                                    className="mt-8"
                                    onClick={() => setIsSubmitted(false)}
                                >
                                    Send Another Message
                                </Button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="space-y-2">
                                    <label className={`text-sm font-medium transition-colors ${focusedField === 'name' ? 'text-purple-400' : 'text-neutral-400'}`}>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-purple-500/50 transition-all focus:bg-white/10"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className={`text-sm font-medium transition-colors ${focusedField === 'email' ? 'text-purple-400' : 'text-neutral-400'}`}>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-purple-500/50 transition-all focus:bg-white/10"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className={`text-sm font-medium transition-colors ${focusedField === 'message' ? 'text-purple-400' : 'text-neutral-400'}`}>Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-purple-500/50 transition-all focus:bg-white/10 resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <Button type="submit" className="w-full h-14 text-lg bg-white text-black hover:bg-neutral-200" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
                                        </>
                                    ) : (
                                        <>Send Message <Send className="ml-2 h-5 w-5" /></>
                                    )}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            <Process />
            <FAQ />
            <Socials />
        </div>
    );
}


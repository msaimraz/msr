"use client";

import { motion } from "framer-motion";
import { Layout, Code, Smartphone, Database, Zap, Search } from "lucide-react";

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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: "React / Next.js Development",
                            desc: "Building scalable, high-performance web applications using the latest React ecosystem and Next.js features.",
                            icon: <Layout />
                        },
                        {
                            title: "Figma to Frontend",
                            desc: "Translating complex design systems into pixel-perfect, responsive, and accessible React components.",
                            icon: <Smartphone />
                        },
                        {
                            title: "SaaS Dashboard UI",
                            desc: "Designing and developing data-rich, intuitive dashboards with complex state management and real-time updates.",
                            icon: <Zap />
                        },
                        {
                            title: "Frontend Optimization",
                            desc: "Improving Core Web Vitals, SEO, and overall performance to ensure a seamless user experience.",
                            icon: <Search />
                        },
                        {
                            title: "API Integration",
                            desc: "Seamlessly connecting frontends with RESTful APIs, GraphQL, and headless CMS platforms like Supabase.",
                            icon: <Database />
                        },
                        {
                            title: "Responsive Web Apps",
                            desc: "Creating fluid, mobile-first experiences that work flawlessly across all devices and screen sizes.",
                            icon: <Code />
                        }
                    ].map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="group p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-purple-500/30 transition-all duration-300"
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit text-white group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-all duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

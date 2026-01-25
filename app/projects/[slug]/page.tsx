import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = projects[slug];

    if (!project) return { title: "Project Not Found" };

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            type: "article",
        }
    };
}

// Real project data from resume
const projects: Record<string, any> = {
    "sap-platform": {
        title: "SAP Stock Platform",
        description: "A stock agent platform built with Next.js and Supabase.",
        fullDescription: "A robust platform designed for stock agents to monitor PSX market data in real-time. Built with Next.js for performance and Supabase for secure data management.",
        tags: ["Next.js", "Supabase", "PSX APIs"],
        problem: "Agents lacked a unified dashboard to track real-time stock movements and manage client portfolios efficiently.",
        solution: "Integrated PSX APIs with a high-performance Next.js frontend to provide live updates and interactive charts.",
        year: "2024",
        client: "Finance Partners",
        role: "Frontend Lead",
        link: "https://github.com/msaimraz",
        repo: "https://github.com/msaimraz",
    },
    "itnnovator": {
        title: "Itnnovator Agency",
        description: "Modern software agency website for digital excellence.",
        fullDescription: "A high-performance agency website built to showcase digital services. Optimized for lightning-fast load times and seamless user interactions.",
        tags: ["Next.js", "Motion", "Tailwind"],
        problem: "The agency needed a modern, speed-optimized digital presence to represent their technical excellence.",
        solution: "Built a headless architecture using Next.js and Framer Motion for premium aesthetics and motion-driven UX.",
        year: "2024",
        client: "Itnnovator",
        role: "Lead Developer",
        link: "https://itnnovator.com",
        repo: "https://github.com/msaimraz",
    },
    "ed-mgmt": {
        title: "ED School System",
        description: "Comprehensive school management and administration system.",
        fullDescription: "A full-scale ERP solution for educational institutions, featuring custom admin panels, student tracking, and financial management.",
        tags: ["Next.js", "CRUD", "Management"],
        problem: "Managing student data and administrative tasks manually was prone to errors and time-consuming.",
        solution: "Developed a centralized management system with real-time CRUD operations and role-based access control.",
        year: "2023",
        client: "ED Schools",
        role: "Full Stack Developer",
        link: "https://edschool.pk",
        repo: "https://github.com/msaimraz",
    },
    "colgate-palmolive": {
        title: "Colgate Palmolive",
        description: "Corporate web solutions for international brand presence.",
        fullDescription: "Delivered high-quality web interfaces for Colgate Palmolive (PK), ensuring brand consistency and cross-browser compatibility.",
        tags: ["React", "Corporate", "Scalability"],
        problem: "The client required a highly responsive and brand-aligned web interface for their regional operations.",
        solution: "Translated complex Figma designs into reusable, pixel-perfect React components with mobile-first responsiveness.",
        year: "2023",
        client: "Colgate Palmolive",
        role: "Frontend Developer",
        link: "https://example.com",
        repo: "https://github.com/msaimraz",
    },
    "smart-dental": {
        title: "Smart Dental UK",
        description: "Healthcare compliance platform for the UK dental sector.",
        fullDescription: "A specialized compliance management system designed to help UK dental practices navigate complex regulatory requirements seamlessly.",
        tags: ["React", "Compliance", "Architecture"],
        problem: "Dental practices struggled with manual compliance tracking and document management.",
        solution: "Implemented a robust document and audit trail system with automated reminders and compliance checklists.",
        year: "2023",
        client: "Smart Dental Compliance",
        role: "Frontend Developer",
        link: "https://smartdentalcompliance.com",
        repo: "https://github.com/msaimraz",
    },
    "sharkspeed": {
        title: "SharkSpeed SE",
        description: "Performance optimization for a Swedish e-commerce brand.",
        fullDescription: "Revitalized the frontend of a leading Swedish e-commerce platform, focusing on page load speed, mobile experience, and conversion rates.",
        tags: ["React", "Performance", "E-Commerce"],
        problem: "Slow page load times were causing significant bounce rates on mobile devices.",
        solution: "Conducted a full performance audit and implemented advanced lazy loading, image optimization, and code splitting.",
        year: "2023",
        client: "SharkSpeed",
        role: "Optimization Specialist",
        link: "https://sharkspeed.com",
        repo: "https://github.com/msaimraz",
    },
};

export async function generateStaticParams() {
    return Object.keys(projects).map((slug) => ({
        slug: slug,
    }));
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = projects[slug];

    if (!project) {
        if (slug === "finance-app" || slug === "portfolio-v1") {
            return (
                <div className="min-h-screen flex items-center justify-center flex-col pt-20">
                    <h1 className="text-4xl font-bold text-white mb-4">Project: {slug}</h1>
                    <p className="text-neutral-400">Detailed content coming soon...</p>
                    <Link href="/projects" className="mt-8">
                        <Button as="div" variant="outline"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects</Button>
                    </Link>
                </div>
            )
        }
        return notFound();
    }

    return (
        <div className="min-h-screen pb-20">
            {/* Cinematic Hero */}
            <div className="h-[70vh] w-full relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
                <div className="absolute inset-0 bg-neutral-900">
                    {/* Background Image Placeholder */}
                    <div className="w-full h-full opacity-50 bg-[url('/grid.svg')] bg-center opacity-20" />
                </div>

                <div className="container mx-auto px-6 relative z-20 pt-20">
                    <Link href="/projects" className="inline-flex items-center text-white/50 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
                    </Link>
                    <h1 className="text-5xl md:text-8xl font-bold font-display text-white mb-6 max-w-4xl leading-tight">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag: string) => (
                            <span key={tag} className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/80 backdrop-blur-md">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 -mt-20 relative z-30">
                <div className="grid lg:grid-cols-[1fr_300px] gap-20">
                    {/* Main Content */}
                    <div>
                        <div className="aspect-video w-full overflow-hidden rounded-3xl bg-neutral-800 border border-white/10 mb-16 shadow-2xl">
                            <div className="w-full h-full flex items-center justify-center text-white/20 text-xl">
                                Project Screenshot / Video Placeholder
                            </div>
                        </div>

                        <div className="prose prose-invert prose-lg max-w-none">
                            <h2 className="text-3xl font-bold font-display text-white mb-6">The Challenge</h2>
                            <p className="text-neutral-400 leading-relaxed mb-12 text-lg">{project.problem}</p>

                            <h2 className="text-3xl font-bold font-display text-white mb-6">The Solution</h2>
                            <p className="text-neutral-400 leading-relaxed mb-12 text-lg">{project.solution}</p>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-10">
                        <div className="glass p-8 rounded-3xl space-y-8 sticky top-32">
                            <div>
                                <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">Client</h3>
                                <p className="text-xl font-bold text-white">{project.client}</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">Year</h3>
                                <p className="text-xl font-bold text-white">{project.year}</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">Role</h3>
                                <p className="text-xl font-bold text-white">{project.role}</p>
                            </div>

                            <div className="pt-4 space-y-3">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                                    <Button as="div" className="w-full h-12 text-base cursor-pointer">
                                        Live Project <ExternalLink className="ml-2 h-4 w-4" />
                                    </Button>
                                </a>
                                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="block w-full">
                                    <Button as="div" variant="outline" className="w-full h-12 text-base cursor-pointer">
                                        View Source <Github className="ml-2 h-4 w-4" />
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Next Project */}
                <div className="mt-32 border-t border-white/10 pt-20">
                    <Link href="/projects" className="group block">
                        <span className="block text-neutral-500 mb-4">Up Next</span>
                        <h3 className="text-4xl md:text-6xl font-bold font-display text-white group-hover:text-purple-400 transition-colors">
                            Browse All Projects <ArrowRight className="inline-block ml-4 transition-transform group-hover:translate-x-4" />
                        </h3>
                    </Link>
                </div>
            </div>
        </div>
    );
}

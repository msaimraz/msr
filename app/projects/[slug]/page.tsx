import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { projects } from "@/lib/data";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find(p => p.id === slug);

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

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.id,
    }));
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = projects.find(p => p.id === slug);

    if (!project) {
        return notFound();
    }

    // Automated screenshot URL using WordPress.com mshots (Free alternative)
    const screenshotUrl = `https://s0.wp.com/mshots/v1/${encodeURIComponent(project.url)}?w=800`;

    return (
        <div className="min-h-screen pb-20">
            {/* Cinematic Hero */}
            <div className="h-[70vh] w-full relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
                <div className="absolute inset-0 bg-neutral-900">
                    {/* Background Image Placeholder */}
                    <div className="w-full h-full opacity-50 bg-[url('/grid.svg')] bg-center opacity-20" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={screenshotUrl}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm"
                    />
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
                        <div className="aspect-video w-full overflow-hidden rounded-3xl bg-neutral-800 border border-white/10 mb-16 shadow-2xl relative">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={screenshotUrl}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="prose prose-invert prose-lg max-w-none">
                            {project.fullDescription || project.problem ? (
                                <>
                                    {project.fullDescription && (
                                        <>
                                            <h2 className="text-3xl font-bold font-display text-white mb-6">Overview</h2>
                                            <p className="text-neutral-400 leading-relaxed mb-12 text-lg">{project.fullDescription}</p>
                                        </>
                                    )}

                                    {project.problem && (
                                        <>
                                            <h2 className="text-3xl font-bold font-display text-white mb-6">The Challenge</h2>
                                            <p className="text-neutral-400 leading-relaxed mb-12 text-lg">{project.problem}</p>
                                        </>
                                    )}

                                    {project.solution && (
                                        <>
                                            <h2 className="text-3xl font-bold font-display text-white mb-6">The Solution</h2>
                                            <p className="text-neutral-400 leading-relaxed mb-12 text-lg">{project.solution}</p>
                                        </>
                                    )}
                                </>
                            ) : (
                                <>
                                    <h2 className="text-3xl font-bold font-display text-white mb-6">About this Project</h2>
                                    <p className="text-neutral-400 leading-relaxed mb-12 text-lg">{project.description}</p>
                                    <p className="text-neutral-500 italic">Detailed case study coming soon.</p>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-10">
                        <div className="glass p-8 rounded-3xl space-y-8 sticky top-32">
                            {project.client && (
                                <div>
                                    <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">Client</h3>
                                    <p className="text-xl font-bold text-white">{project.client}</p>
                                </div>
                            )}

                            {project.year && (
                                <div>
                                    <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">Year</h3>
                                    <p className="text-xl font-bold text-white">{project.year}</p>
                                </div>
                            )}

                            {project.role && (
                                <div>
                                    <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">Role</h3>
                                    <p className="text-xl font-bold text-white">{project.role}</p>
                                </div>
                            )}

                            <div className="pt-4 space-y-3">
                                {project.url && (
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="block w-full">
                                        <Button as="div" className="w-full h-12 text-base cursor-pointer">
                                            Live Project <ExternalLink className="ml-2 h-4 w-4" />
                                        </Button>
                                    </a>
                                )}

                                {project.repo && (
                                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="block w-full">
                                        <Button as="div" variant="outline" className="w-full h-12 text-base cursor-pointer">
                                            View Source <Github className="ml-2 h-4 w-4" />
                                        </Button>
                                    </a>
                                )}
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

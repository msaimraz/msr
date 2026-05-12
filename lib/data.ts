export interface Project {
    id: string; // slug
    title: string;
    category: "Enterprise" | "Web App" | "E-commerce" | "Corporate";
    url: string; // Live URL
    repo?: string;
    description: string;
    fullDescription?: string;
    tags: string[];
    color: string;
    year?: string;
    client?: string;
    role?: string;
    problem?: string;
    solution?: string;
    responsibilities?: string[];
    keyImplementation?: string[];
}

export const projects: Project[] = [
    {
        id: "sap-stock-platform",
        title: "SAP Stock Agent Platform",
        category: "Enterprise",
        url: "https://sap.bydansam.com",
        repo: "https://github.com/msaimraz",
        description: "Secure stock management platform with role-based access, real-time dashboards, and SAP integration.",
        fullDescription: "A robust enterprise portal designed for stock agents to interact with SAP Business ByDesign. This platform serves as a critical bridge between stock agents and the core ERP system, facilitating real-time data exchange and inventory management.",
        tags: ["Next.js", "Supabase", "SAP API", "Tailwind"],
        color: "from-blue-600 to-cyan-500",
        year: "2024",
        client: "Finance Partners",
        role: "Frontend Lead",
        problem: "Stock agents relied on manual, disjointed processes to access inventory data, leading to delays and data discrepancies.",
        solution: "Engineered a secure Next.js portal interfacing directly with SAP APIs, providing real-time dashboards for inventory tracking.",
        responsibilities: [
            "Responsive frontend development",
            "Authentication & RBAC flows",
            "Interactive Dashboard UI",
            "Complex API integrations"
        ],
        keyImplementation: [
            "Real-time data synchronization with SAP",
            "Optimized state management for large datasets",
            "Custom reusable UI component library"
        ]
    },
    {
        id: "itnnovator",
        title: "Itnnovator Agency",
        category: "Corporate",
        url: "https://itnnovator.com",
        repo: "https://github.com/msaimraz",
        description: "High-performance agency platform featuring advanced motion design and headless architecture.",
        fullDescription: "A high-performance corporate website for Itnnovator, a forward-thinking technology agency. Built with a focus on speed, interactivity, and modern design principles.",
        tags: ["React", "Framer Motion", "Next.js", "Tailwind"],
        color: "from-purple-500 to-indigo-500",
        year: "2024",
        client: "Itnnovator",
        role: "Lead Developer",
        problem: "The client needed a digital presence that reflected their innovative approach, requiring high-end animations without sacrificing performance.",
        solution: "Developed a headless Next.js site using Framer Motion for cinematic transitions and optimized asset delivery.",
        responsibilities: [
            "Advanced motion architecture",
            "Headless CMS integration",
            "SEO & Performance optimization",
            "Responsive design system"
        ],
        keyImplementation: [
            "Custom smooth scroll implementation",
            "Dynamic asset loading strategy",
            "Reusable animation utility components"
        ]
    },
    {
        id: "ed-school",
        title: "ED School LMS",
        category: "Enterprise",
        url: "https://edschool.pk",
        repo: "https://github.com/msaimraz",
        description: "Comprehensive Learning Management System automating academic workflows and student data management.",
        fullDescription: "A comprehensive LMS and ERP for the Engineers & Doctors School. This platform digitizes the entire academic lifecycle, from enrollment to automated result generation.",
        tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
        color: "from-green-500 to-emerald-500",
        year: "2023",
        client: "ED Schools",
        role: "Full Stack Developer",
        problem: "Paper-based administrative processes were causing significant overhead and frequent errors in record keeping.",
        solution: "Built a centralized, role-based management system automating attendance, grades, and report card generation.",
        responsibilities: [
            "End-to-end system architecture",
            "Database design & optimization",
            "Admin & Teacher dashboards",
            "Automated report generation"
        ],
        keyImplementation: [
            "Complex role-based access control (RBAC)",
            "Automated PDF generation for report cards",
            "Real-time student progress tracking"
        ]
    },
    {
        id: "smart-dental-compliance",
        title: "Smart Dental SaaS",
        category: "Web App",
        url: "https://smartdentalcompliance.com",
        description: "UK-based SaaS platform for dental compliance, HR, and audit management.",
        fullDescription: "A specialized SaaS application for the UK dental sector, helping practices manage CQC compliance, audits, and HR tasks.",
        tags: ["React", "Node.js", "SaaS", "AWS"],
        color: "from-teal-500 to-green-500",
        year: "2023",
        client: "Smart Dental Compliance",
        role: "Frontend Developer",
        problem: "Dental practices struggled with manual compliance tracking, risking regulatory fines and operational friction.",
        solution: "Developed an automated dashboard with compliance checklists, document management, and digital audit trails.",
        responsibilities: [
            "Dashboard UI/UX development",
            "Complex form state management",
            "Document management system",
            "Compliance reporting tools"
        ],
        keyImplementation: [
            "Custom audit trail tracking",
            "Secure file upload & storage",
            "Interactive compliance checklists"
        ]
    },
    {
        id: "ethletia",
        title: "Ethletia Store",
        category: "E-commerce",
        url: "https://ethletia.com",
        description: "Mobile-first e-commerce storefront for a premium fitness brand.",
        fullDescription: "A direct-to-consumer e-commerce storefront for Ethletia. Focused on high conversion and seamless mobile experience.",
        tags: ["Shopify", "Liquid", "JavaScript", "SEO"],
        color: "from-orange-500 to-red-500",
        year: "2023",
        client: "Ethletia",
        role: "Frontend Developer",
        problem: "The client required a high-converting storefront with a premium feel that stood out in the fitness market.",
        solution: "Implemented a custom mobile-first storefront with optimized product pages and streamlined checkout flows.",
        responsibilities: [
            "Custom Shopify theme development",
            "Mobile-first UI implementation",
            "Conversion rate optimization (CRO)",
            "Speed & Core Web Vitals audit"
        ],
        keyImplementation: [
            "Custom product filtering system",
            "Advanced cart drawer interaction",
            "Dynamic section architecture"
        ]
    },
    {
        id: "colgate",
        title: "Colgate Regional",
        category: "Corporate",
        url: "https://colgate.com",
        description: "Localized digital presence for a global brand, adhering to strict design systems.",
        fullDescription: "Contributed to the regional web presence of Colgate Palmolive, ensuring alignment with global brand standards.",
        tags: ["React", "Global Design System", "i18n"],
        color: "from-red-600 to-red-500",
        year: "2023",
        client: "Colgate Palmolive",
        role: "Frontend Developer",
        problem: "The client needed to implement localized campaigns while strictly following a complex global design system.",
        solution: "Translated global design guidelines into pixel-perfect React components, ensuring brand consistency across regions.",
        responsibilities: [
            "Design system implementation",
            "Cross-browser compatibility",
            "Regional campaign development",
            "Accessibility (A11y) audits"
        ],
        keyImplementation: [
            "Reusable component library integration",
            "Performance-tuned asset delivery",
            "High-fidelity UI implementation"
        ]
    }
];

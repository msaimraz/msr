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
}

export const projects: Project[] = [
    {
        id: "sap-stock-platform",
        title: "SAP Stock Agent Platform",
        category: "Enterprise",
        url: "https://sap.bydansam.com",
        repo: "https://github.com/msaimraz",
        description: "Enterprise SAP Business ByDesign implementation portal.",
        fullDescription: "A robust enterprise portal designed for stock agents to interact with SAP Business ByDesign. This platform serves as a critical bridge between stock agents and the core ERP system, facilitating real-time data exchange and inventory management.",
        tags: ["Next.js", "SAP", "Portal"],
        color: "from-blue-600 to-cyan-500",
        year: "2024",
        client: "Finance Partners",
        role: "Frontend Lead",
        problem: "Stock agents were relying on manual, disjointed processes to access inventory data from SAP, leading to delays and data discrepancies.",
        solution: "Engineered a secure Next.js portal that interfaces directly with SAP APIs, providing agents with a real-time dashboard for inventory tracking and order management."
    },
    {
        id: "itnnovator",
        title: "Itnnovator",
        category: "Corporate",
        url: "https://itnnovator.com",
        repo: "https://github.com/msaimraz",
        description: "Technology company website focused on innovation and software solutions.",
        fullDescription: "A high-performance corporate website for Itnnovator, a forward-thinking technology agency. The site serves as the primary digital touchpoint for potential clients, showcasing the agency's expertise in software development and digital transformation.",
        tags: ["Agency", "Motion", "Tailwind"],
        color: "from-purple-500 to-indigo-500",
        year: "2024",
        client: "Itnnovator",
        role: "Lead Developer",
        problem: "Itnnovator needed a digital presence that reflected their modern, innovative approach to technology, as their previous site was outdated and static.",
        solution: "Built a headless layout using Next.js and Framer Motion, delivering a visually striking and highly interactive user experience that communicates technical prowess."
    },
    {
        id: "ed-school",
        title: "Engineers & Doctors School",
        category: "Enterprise",
        url: "https://edschool.pk",
        repo: "https://github.com/msaimraz",
        description: "Education platform for school management and digital learning.",
        fullDescription: "A comprehensive Learning Management System (LMS) and ERP for the Engineers & Doctors School. This platform digitizes the entire academic lifecycle, from student enrollment and attendance to exam management and result generation.",
        tags: ["EdTech", "LMS", "Management"],
        color: "from-green-500 to-emerald-500",
        year: "2023",
        client: "ED Schools",
        role: "Full Stack Developer",
        problem: "The school faced significant administrative overhead managing student records and exam results manually on paper.",
        solution: "Developed a centralized, role-based management system that automates attendance tracking, grade calculation, and report card generation, saving hundreds of admin hours."
    },
    {
        id: "ethletia",
        title: "Ethletia",
        category: "E-commerce",
        url: "https://ethletia.com",
        description: "Sports and fitness brand website.",
        fullDescription: "A direct-to-consumer e-commerce storefront for Ethletia, a premium sports and fitness brand. The site focuses on converting visitors into customers through a seamless shopping experience and strong brand storytelling.",
        tags: ["E-commerce", "Shopify", "Brand"],
        color: "from-orange-500 to-red-500",
        year: "2023",
        client: "Ethletia",
        role: "Frontend Developer",
        problem: "Ethletia needed a custom storefront that stood out in the crowded fitness market and provided a smooth mobile shopping experience.",
        solution: "Implemented a highly optimized, mobile-first e-commerce interface with custom product pages and a streamlined checkout flow to maximize conversion rates."
    },
    {
        id: "digibase",
        title: "Digibase",
        category: "Corporate",
        url: "https://thedigibase.vercel.app",
        description: "Digital services and solutions platform.",
        fullDescription: "A portfolio and service showcase platform for Digibase, a digital solutions provider. The website structures complex service offerings into an easily navigable and digestible format for prospective B2B clients.",
        tags: ["Digital", "Services", "Web"],
        color: "from-indigo-500 to-blue-500",
        year: "2023",
        client: "Digibase",
        role: "Lead Developer",
        problem: "Digibase struggled to clearly communicate their diverse range of digital services to potential enterprise clients.",
        solution: "Designed a clean, service-oriented architecture that categorizes offerings effectively, supported by case studies and clear calls to action."
    },
    {
        id: "shaheed-nusrat-transport",
        title: "Shaheed Nusrat Transport",
        category: "Corporate",
        url: "https://shaheednusrattransportationservice.vercel.app",
        description: "Transportation services company website.",
        fullDescription: "A corporate website for a logistics and transportation company. The site provides essential information about fleet capabilities, routes, and booking procedures, establishing trust and reliability.",
        tags: ["Logistics", "Transport", "Corporate"],
        color: "from-yellow-500 to-orange-500",
        year: "2023",
        client: "Shaheed Nusrat",
        role: "Frontend Developer",
        problem: "The company lacked a digital footprint, making it difficult for new corporate clients to find and verify their services.",
        solution: "Created a professional, fast-loading transport portal that highlights the fleet's capacity and safety standards, improving brand credibility."
    },
    {
        id: "royenix",
        title: "Royenix",
        category: "Corporate",
        url: "https://royenix.vercel.app",
        description: "Corporate business services website.",
        fullDescription: "A sleek corporate presence for Royenix, a business consultancy firm. The website features a polished, professional design intended to appeal to high-level corporate decision-makers.",
        tags: ["Business", "Corporate", "Services"],
        color: "from-gray-500 to-slate-500",
        year: "2023",
        client: "Royenix",
        role: "Frontend Developer",
        problem: "Royenix needed to establish a sophisticated online brand that matched the high caliber of their consulting services.",
        solution: "Developed a minimalist, typography-driven website that emphasizes clarity, professionalism, and thought leadership through a curated blog section."
    },
    {
        id: "colgate",
        title: "Colgate",
        category: "Corporate",
        url: "https://colgate.com",
        description: "Global oral care brand website.",
        fullDescription: "Contributed to the regional web presence of Colgate Palmolive, ensuring that the digital experience aligns with global brand standards while catering to local market needs.",
        tags: ["Brand", "Consumer", "Global"],
        color: "from-red-600 to-red-500",
        year: "2023",
        client: "Colgate Palmolive",
        role: "Frontend Developer",
        problem: "The client required strict adherence to global design systems while implementing region-specific campaigns and content.",
        solution: "Translated complex global design guidelines into pixel-perfect React components, ensuring brand consistency and cross-browser compatibility across all regional pages."
    },
    {
        id: "smart-dental-compliance",
        title: "Smart Dental Compliance",
        category: "Web App",
        url: "https://smartdentalcompliance.com",
        description: "Dental compliance management platform.",
        fullDescription: "A specialized SaaS application for the UK dental sector, designed to help practices manage CQC compliance, audits, and HR tasks. The platform simplifies complex regulatory requirements into manageable workflows.",
        tags: ["SaaS", "Compliance", "React"],
        color: "from-teal-500 to-green-500",
        year: "2023",
        client: "Smart Dental Compliance",
        role: "Frontend Developer",
        problem: "Dental practices struggled with manual compliance tracking, risking heavy fines and operational inefficiencies.",
        solution: "Implemented a comprehensive dashboard with automated audit trails, document management, and compliance checklists to streamline practice operations."
    },
    {
        id: "sharkspeed",
        title: "Sharkspeed",
        category: "E-commerce",
        url: "https://sharkspeed.se",
        description: "Motorcycle gear and accessories e-commerce store.",
        fullDescription: "A high-traffic e-commerce platform for Sharkspeed, a leading Nordic retailer of motorcycle gear. The project focused on performance optimization and enhancing the user experience for a large product catalog.",
        tags: ["E-commerce", "Performance", "Retail"],
        color: "from-slate-800 to-black",
        year: "2023",
        client: "Sharkspeed",
        role: "Optimization Specialist",
        problem: "Slow page load times and a clunky mobile interface were causing high bounce rates and cart abandonment.",
        solution: "Conducted a full performance audit and implemented advanced image optimization, code splitting, and a revised mobile UX, resulting in a significant uplift in conversion rates."
    },
    {
        id: "im-digital-agency",
        title: "IM Digital Agency",
        category: "Corporate",
        url: "https://imdigitalagency.com",
        description: "Digital marketing agency website.",
        fullDescription: "A vibrant and dynamic website for IM Digital Agency. The site uses bold colors and interactive elements to reflect the agency's creative energy and marketing prowess.",
        tags: ["Marketing", "Agency", "Digital"],
        color: "from-pink-500 to-rose-500",
        year: "2023",
        client: "IM Digital",
        role: "Frontend Developer",
        problem: "The agency's previous site was too generic and failed to capture their creative edge.",
        solution: "Designed and built a lively, motion-enhanced website with bold typography and interactive case study showcases to attract creative-focused clients."
    },
    {
        id: "al-tayeb-cooling",
        title: "Al Tayeb Cooling",
        category: "Corporate",
        url: "https://altayebcooling.com",
        description: "Cooling and HVAC services company website.",
        fullDescription: "A service-focused corporate website for Al Tayeb Cooling. The platform is designed to generate leads by clearly presenting service packages and facilitating easy booking and inquiries.",
        tags: ["Services", "HVAC", "Corporate"],
        color: "from-cyan-500 to-blue-500",
        year: "2023",
        client: "Al Tayeb",
        role: "Frontend Developer",
        problem: "Potential customers found it difficult to understand the range of HVAC services offered and how to book them.",
        solution: "Created a structured service catalog with clear pricing models and a prominent 'Get a Quote' workflow to drive lead generation."
    },
    {
        id: "isuzu-pakistan",
        title: "Isuzu Pakistan",
        category: "Corporate",
        url: "https://isuzupakistan.com",
        description: "Automotive brand website.",
        fullDescription: "The official web presence for Isuzu in Pakistan. The site showcases the vehicle lineup with detailed specifications, dealership locators, and corporate information.",
        tags: ["Automotive", "Brand", "Vehicle"],
        color: "from-red-600 to-gray-800",
        year: "2023",
        client: "Isuzu",
        role: "Frontend Developer",
        problem: "The brand needed a localized digital platform to showcase their latest vehicle models and connect customers with dealers.",
        solution: "Developed a comprehensive automotive showcase with interactive vehicle galleries, detailed spec sheets, and a Google Maps-integrated dealership locator."
    },
    {
        id: "pixel-web-design",
        title: "Pixel Web Design",
        category: "Corporate",
        url: "https://pixelwebdesign.se",
        description: "Creative web design agency portfolio.",
        fullDescription: "A showcase portfolio for Pixel Web Design, a boutique creative agency. The site emphasizes visual aesthetics and design capability through a gallery of past work.",
        tags: ["Design", "Creative", "Portfolio"],
        color: "from-violet-500 to-purple-500",
        year: "2023",
        client: "Pixel Web",
        role: "Frontend Developer",
        problem: "The agency needed a minimalist canvas that would let their portfolio work stand out without distraction.",
        solution: "Built a dark-themed, gallery-style website that puts high-resolution project imagery front and center, supported by subtle micro-interactions."
    },
    {
        id: "goodies",
        title: "Goodies",
        category: "E-commerce",
        url: "https://onlinegoodies.es",
        description: "E-commerce store website.",
        fullDescription: "A colorful and user-friendly e-commerce store for Goodies. The site is designed to be approachable and fun, encouraging browsing and impulse purchases of variety items.",
        tags: ["Shop", "Retail", "Goodies"],
        color: "from-amber-500 to-yellow-500",
        year: "2023",
        client: "Goodies",
        role: "Frontend Developer",
        problem: "The store needed a fun, vibrant online identity to match its physical product range.",
        solution: "Implemented a playful design system with bright colors and easy navigation, creating an enjoyable browsing experience that mirrors the feeling of a physical variety store."
    }
];

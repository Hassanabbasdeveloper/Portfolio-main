import { Code2, Database, Wrench, Layers } from "lucide-react"

export const skills = [
    {
        category: "Programming Languages",
        icon: Code2,
        color: "from-slate-400 to-slate-500",
        items: [
            { name: "Python" },
            { name: "JavaScript" },
            { name: "TypeScript" },
            { name: "SQL" },
        ],
    },

    {
        category: "AI & Machine Learning",
        icon: Layers,
        color: "from-zinc-400 to-zinc-500",
        items: [
            { name: "LangChain" },
            { name: "RAG" },
            { name: "Generative AI" },
            { name: "LLMs" },
        ],
    },

    {
        category: "Web Development",
        icon: Code2,
        color: "from-neutral-400 to-neutral-500",
        items: [
            { name: "React" },
            { name: "Next.js" },
            { name: "Node.js" },
            { name: "REST APIs" },
        ],
    },

    {
        category: "Database & Backend",
        icon: Database,
        color: "from-gray-400 to-gray-500",
        items: [
            { name: "PostgreSQL" },
            { name: "SQL" },
            { name: "FastAPI" },
            { name: "Vector Databases" },
        ],
    },

    {
        category: "Tools & Technologies",
        icon: Wrench,
        color: "from-slate-400 to-slate-500",
        items: [
            { name: "Git" },
            { name: "GitHub" },
            { name: "VS Code" },
            { name: "Docker" },
        ],
    },
]
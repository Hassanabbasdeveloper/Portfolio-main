import type { ProjectItem } from "@/features/projects/components/projects-carousel";

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Bitcoin Web",
    category: "Web Application",
    description:
      "A modern Bitcoin web application built with JavaScript, focused on providing a clean and interactive user experience.",
    techStack: ["JavaScript"],
    github: "https://github.com/Hassanabbasdeveloper/Bitcoin-web",
    image: "/images/projects/bitcoin-web.webp",
  },
  {
    id: 2,
    title: "Weather Web",
    category: "Web Application",
    description:
      "A weather web application that provides users with weather information through a simple and responsive interface.",
    techStack: ["JavaScript"],
    github: "https://github.com/Hassanabbasdeveloper/Weather-web",
    image: "/images/projects/weather-web.webp",
  },
  {
    id: 3,
    title: "News Web Chatbot",
    category: "AI Chatbot",
    description:
      "An AI-powered news chatbot designed to interact with users and provide an intelligent conversational experience.",
    techStack: ["JavaScript", "AI", "Chatbot"],
    github: "https://github.com/Hassanabbasdeveloper/News-web-chatbot",
    image: "/images/projects/news-web-chatbot.webp",
  },
  {
    id: 4,
    title: "RAG Chatbot",
    category: "Generative AI",
    description:
      "A Retrieval-Augmented Generation chatbot built to provide AI-powered responses using relevant retrieved information.",
    techStack: ["Python", "RAG", "LangChain"],
    github: "https://github.com/Hassanabbasdeveloper/Rag-Chatbot",
    image: "/images/projects/rag-chatbot.webp",
  },
  {
    id: 5,
    title: "Groq Chatbot",
    category: "Generative AI",
    description:
      "An AI chatbot powered by Groq, providing fast conversational responses through modern large language model technology.",
    techStack: ["Python", "Groq", "AI"],
    github: "https://github.com/Hassanabbasdeveloper/Groq-Chatbot",
    image: "/images/projects/groq-chatbot.webp",
  },
];
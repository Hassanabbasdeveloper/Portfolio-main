"use client"

import { motion } from "framer-motion"
import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { StreamingText } from "./streaming-text"
import { useChatContext } from "@/features/chat/context/chat-context"
import type { Message } from "@/lib/types"

const SECTIONS = [
    {
        html: `Hi there! 👋 I'm **Hassan Abbas**, a Full-Stack Developer focused on building clean, responsive, and user-friendly web experiences.`
    },
    {
        html: `I enjoy turning ideas into practical digital products by combining design thinking with strong engineering fundamentals and modern frontend/backend tools.`
    },
    {
        html: `My work is centered around creating products that are not only functional, but also smooth, scalable, and enjoyable for users to interact with.`
    },
    {
        html: `I work with technologies like **JavaScript**, **TypeScript**, **React**, **Next.js**, and **Python** to create impactful experiences across web applications and AI-powered tools.`
    },
    {
        html: `I love learning, building, and improving products with a focus on performance, clarity, and real-world value.`,
        isItalic: true
    }
]

interface AboutMeTemplateProps {
    message?: Message
}

export function AboutMeTemplate({ message }: AboutMeTemplateProps) {
    const { scrollToBottom, setIsComponentStreaming } = useChatContext()
    const [isHistorical] = useState(() =>
        message ? (Date.now() - new Date(message.timestamp).getTime() > 3000) : false
    )

    useEffect(() => {
        if (!isHistorical) {
            setIsComponentStreaming(true);
        }
        return () => setIsComponentStreaming(false);
    }, [isHistorical, setIsComponentStreaming]);

    const [currentSection, setCurrentSection] = useState(() => isHistorical ? SECTIONS.length - 1 : 0)

    const handleSectionComplete = useCallback((index: number) => {
        if (index < SECTIONS.length - 1) {
            setCurrentSection(prev => Math.max(prev, index + 1))
        } else {
            setIsComponentStreaming(false);
        }
    }, [setIsComponentStreaming])

    const handleStream = useCallback(() => {
        if (!isHistorical) scrollToBottom('smooth')
    }, [isHistorical, scrollToBottom])

    return (
        <div className="w-full mb-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Visual Avatar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full md:w-1/3 shrink-0 self-start px-4 md:px-0"
                >
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-2 md:p-3 shadow-xl">
                        <div className="aspect-[4/3] md:aspect-[4/5] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg overflow-hidden relative">
                            <Image
                                src="/profile.webp"
                                alt="Hassan Abbas - Full Stack Developer"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Text Content */}
                <div className="w-full md:w-2/3 text-zinc-200 px-4 md:px-0">
                    <div className="space-y-5 leading-7 tracking-wide font-light">
                        {SECTIONS.map((section, index) => {
                            if (index > currentSection) return null
                            return (
                                <div
                                    key={section.html}
                                    className={`mb-5 last:mb-0 ${section.isItalic ? 'text-zinc-400 italic' : ''}`}
                                >
                                    <StreamingText
                                        text={section.html}
                                        delay={index === 0 ? 500 : 0}
                                        speed={8}
                                        onComplete={() => handleSectionComplete(index)}
                                        onStream={handleStream}
                                        instant={isHistorical}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

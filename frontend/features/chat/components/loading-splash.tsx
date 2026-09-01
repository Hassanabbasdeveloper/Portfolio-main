"use client"

import { motion } from "framer-motion"

interface LoadingSplashProps {
    showText?: boolean
}

export function LoadingSplash({ showText = false }: LoadingSplashProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/90"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <div className="flex flex-col items-center gap-4">
                <div className="h-10 w-10 rounded-full border-2 border-indigo-500/30 border-t-indigo-400 animate-spin" />
                {showText && (
                    <p className="text-sm font-medium tracking-[0.2em] text-zinc-300 uppercase">
                        Loading
                    </p>
                )}
            </div>
        </motion.div>
    )
}
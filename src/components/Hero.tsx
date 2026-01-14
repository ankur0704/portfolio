"use client";

import React from "react";
import { motion } from "framer-motion";

const TEXT = "CREATIVE DEVELOPER";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden">
            <div className="z-10 mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="text-accent-secondary font-mono text-sm tracking-widest uppercase mb-4 block">
                        Available for freelance 2026
                    </span>
                    <h1 className="text-[8vw] md:text-[5vw] font-serif font-bold leading-[0.85] uppercase tracking-tighter">
                        {TEXT.split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, rotateX: -90 }}
                                animate={{ opacity: 1, rotateX: 0 }}
                                transition={{
                                    delay: 0.5 + i * 0.03,
                                    duration: 0.8,
                                    ease: "backOut",
                                }}
                                className="inline-block origin-bottom"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-12 max-w-xl"
                >
                    <p className="text-xl md:text-2xl font-mono text-white/60 leading-relaxed border-l-4 border-accent pl-6">
                        Building digital experiences that blend <span className="text-white italic">brutal simplicity</span> with <span className="text-accent underline decoration-2 underline-offset-4">refined motion</span>.
                    </p>

                    <div className="mt-12 flex gap-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="brutalist-card px-8 py-4 bg-accent text-white font-bold uppercase tracking-widest text-sm"
                        >
                            View Work
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors"
                        >
                            Let's Talk
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Glow elements */}
            <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-accent-secondary/10 rounded-full blur-[100px] pointer-events-none" />
        </section>
    );
}

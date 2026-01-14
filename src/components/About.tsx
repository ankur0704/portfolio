"use client";

import React from "react";
import { motion } from "framer-motion";

const STATS = [
    { label: "Years Experience", value: "03+" },
    { label: "Projects Completed", value: "24+" },
    { label: "Cups of Coffee", value: "800+" },
];

export default function About() {
    return (
        <section className="py-24 px-6 md:px-12 border-t-2 border-white/10 bg-[#080808]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Col: Large Heading */}
                <div className="lg:col-span-12 mb-12">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-[10vw] md:text-[6vw] font-serif font-bold uppercase leading-none"
                    >
                        Behind <span className="text-accent italic">The</span> <br />
                        Pixels.
                    </motion.h2>
                </div>

                {/* Mid Col: Bio */}
                <div className="lg:col-span-7">
                    <div className="space-y-8">
                        <p className="text-2xl md:text-3xl font-mono text-white leading-relaxed">
                            I am a <span className="text-accent-secondary glow-text">Creative Developer</span> based in India, obsessive about clean code and interactive aesthetics.
                        </p>
                        <p className="text-lg md:text-xl font-mono text-white/50 leading-relaxed">
                            My work sits at the intersection of design and engineering. I believe that a website shouldn't just function—it should tell a story through movement and tactility.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
                            {STATS.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="brutalist-card p-6 flex flex-col gap-2"
                                >
                                    <span className="text-3xl font-serif font-bold text-accent">{stat.value}</span>
                                    <span className="text-xs uppercase tracking-widest text-white/40">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Col: Capabilities/Tags */}
                <div className="lg:col-span-5 flex flex-col justify-end">
                    <div className="border-4 border-accent p-8 relative overflow-hidden group">
                        <h3 className="text-xl font-bold uppercase tracking-widest mb-6">Expertise</h3>
                        <div className="flex flex-wrap gap-3 font-mono text-sm">
                            {["React", "Next.js", "Three.js", "GSAP", "Tailwind", "Motion", "UI/UX", "WebGL"].map((skill) => (
                                <span key={skill} className="px-3 py-1 border border-white/20 hover:border-accent hover:text-accent transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Background Accent for the box */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all" />
                    </div>
                </div>
            </div>
        </section>
    );
}

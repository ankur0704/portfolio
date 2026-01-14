"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX - 16);
            mouseY.set(e.clientY - 16);
        };

        const handleHoverStart = () => setIsHovering(true);
        const handleHoverEnd = () => setIsHovering(false);

        window.addEventListener("mousemove", moveMouse);

        // Add listeners for all interactive elements
        const interactiveElements = document.querySelectorAll("a, button, [role='button']");
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleHoverStart);
            el.addEventListener("mouseleave", handleHoverEnd);
        });

        return () => {
            window.removeEventListener("mousemove", moveMouse);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleHoverStart);
                el.removeEventListener("mouseleave", handleHoverEnd);
            });
        };
    }, [mouseX, mouseY]);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-accent pointer-events-none z-[99999] flex items-center justify-center mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    scale: isHovering ? 2.5 : 1,
                }}
            >
                <motion.div
                    className="w-1 h-1 bg-accent rounded-full"
                    animate={{
                        scale: isHovering ? 0 : 1
                    }}
                />
            </motion.div>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full bg-accent/20 blur-xl pointer-events-none z-[99998]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    scale: isHovering ? 4 : 2,
                }}
            />
        </>
    );
}

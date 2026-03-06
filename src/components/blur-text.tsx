"use client";

import { motion, Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";

type BlurTextProps = {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    as?: React.ElementType;
};

const wordVariants: Variants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 10 },
    visible: (i: number) => ({
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
            delay: i * 0.08,
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
};

export function BlurText({
    text,
    className = "",
    delay = 0,
    duration = 0.55,
    as: Tag = "span",
}: BlurTextProps) {
    const words = text.split(" ");
    const ref = useRef<HTMLElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const MotionTag = motion(Tag as "span");

    return (
        <MotionTag
            ref={ref as React.RefObject<HTMLElement & HTMLHeadingElement>}
            className={`inline ${className}`}
            style={{ display: "inline" }}
        >
            {words.map((word, i) => (
                <motion.span
                    key={`${word}-${i}`}
                    custom={i + delay / 0.08}
                    variants={wordVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    style={{ display: "inline-block", marginRight: "0.25em" }}
                >
                    {word}
                </motion.span>
            ))}
        </MotionTag>
    );
}

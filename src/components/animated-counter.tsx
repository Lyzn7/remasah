"use client";

import { useRef, useEffect, useState } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion";

type AnimatedCounterProps = {
    target: number;
    suffix?: string;
    prefix?: string;
    duration?: number; // detik
    className?: string;
};

export function AnimatedCounter({
    target,
    suffix = "",
    prefix = "",
    duration = 2,
    className = "",
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const [inView, setInView] = useState(false);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        duration: duration * 1000,
        bounce: 0,
    });
    const displayValue = useTransform(springValue, (latest) =>
        Math.round(latest).toString()
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (inView) {
            motionValue.set(target);
        }
    }, [inView, target, motionValue]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </span>
    );
}

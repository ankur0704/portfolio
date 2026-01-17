"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className={styles.container}>
            <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className={styles.checkbox}
                checked={theme === "dark"}
                onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            />
            <label htmlFor="checkbox" className={styles.label}></label>
        </div>
    );
}

// components/ThemeToggle.jsx
"use client";

export default function ThemeToggle() {
    const setTheme = (mode) => {
        if (mode === "system") {
            localStorage.removeItem("theme");
            const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            document.documentElement.classList.toggle("dark", preferDark);
        } else {
            localStorage.setItem("theme", mode);
            document.documentElement.classList.toggle("dark", mode === "dark");
        }
    };

    return (
        <div className="inline-flex gap-2 rounded-xl border px-2 py-1">
            <button onClick={() => setTheme("light")} className="px-2 py-1">Light</button>
            <button onClick={() => setTheme("dark")} className="px-2 py-1">Dark</button>
            <button onClick={() => setTheme("system")} className="px-2 py-1">System</button>
        </div>
    );
}

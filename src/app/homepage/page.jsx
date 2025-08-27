"use client";

import { useTheme } from "../components/ThemeProvider";

export default function Homepage() {
	const { theme, setTheme } = useTheme();
	const isDark = (theme === "dark") || (theme === "system" && typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

	const colors = {
		primary: "#B019FF",
		secondary: "#8000C4",
		blueGreen: "#00C4CC",
		black: "#1A1A1A",
		white: "#F5F5F7",
	};

	const copy = (text) => {
		try { navigator.clipboard?.writeText(text); } catch {}
	};

	const exampleCode = `<h1 className="text-primary">\n  Gunakan text-[nama warna] untuk memberikan warna sesuai keinginan.\n</h1>`;

	return (
		<main
			className="w-full min-h-screen"
			style={{ backgroundColor: isDark ? colors.black : "#ffffff", color: isDark ? "#ffffff" : "#171717" }}
		>
			<div className="mx-auto max-w-6xl px-6 py-12 space-y-10">
				{/* Hero */}
				<header className="rounded-2xl overflow-hidden border border-white/10"
					style={{ background: isDark ? "radial-gradient(1000px 400px at -10% -10%, rgba(176,25,255,0.18), transparent), radial-gradient(800px 300px at 110% 10%, rgba(0,196,204,0.18), transparent)" : "radial-gradient(1000px 400px at -10% -10%, rgba(176,25,255,0.14), transparent), radial-gradient(800px 300px at 110% 10%, rgba(0,196,204,0.14), transparent)" }}
				>
					<div className="px-8 py-10 sm:px-12 sm:py-14">
						<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Style Guide For Project</h1>
						<p className="mt-2 text-sm opacity-80">Referensi visual dan warna untuk konsistensi antar halaman.</p>
					</div>
				</header>

				{/* Palette banner */}
				<section className="rounded-2xl p-6 border border-white/10"
					style={{ background: "linear-gradient(135deg, rgba(176,25,255,0.12), rgba(128,0,196,0.12))" }}
				>
					<h2 className="text-xl font-semibold mb-5">Palet Warna</h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
						{[
							{ key: "primary", name: "Electric Purple", code: colors.primary },
							{ key: "secondary", name: "Dark Violet", code: colors.secondary },
							{ key: "blueGreen", name: "Maximum Blue Green", code: colors.blueGreen },
							{ key: "black", name: "Eerie Black", code: colors.black },
							{ key: "white", name: "Anti-flash White", code: colors.white },
						].map((c) => (
							<div key={c.key} className="flex flex-col items-center">
								<div className="w-24 h-52 rounded-2xl shadow ring-1 ring-black/10" style={{ backgroundColor: c.code }} />
								<div className="mt-3 text-center text-xs opacity-90">
									<div className="font-medium">{c.name}</div>
									<div className="opacity-70">{c.code.toUpperCase()}</div>
									<button onClick={() => copy(c.code)} className="mt-2 inline-flex items-center gap-1 px-2 py-1 rounded border border-white/15 hover:bg-white/10">Copy</button>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Mapping table */}
				<section className="rounded-2xl border border-white/10 overflow-hidden">
					<table className="w-full text-sm">
						<thead className="bg-white/5">
							<tr>
								<th className="text-left px-5 py-3 font-semibold">Warna Di Gambar</th>
								<th className="text-left px-5 py-3 font-semibold">Di Tailwind</th>
							</tr>
						</thead>
						<tbody>
							{[
								["Electric Purple ("+colors.primary+")","primary"],
								["Dark Violet ("+colors.secondary+")","secondary"],
								["Maximum Blue Green ("+colors.blueGreen+")","blueGreen"],
								["Eerie Black ("+colors.black+")","black"],
								["Anti-flash White ("+colors.white+")","white"],
							].map((row, idx) => (
								<tr key={row[0]} className={"border-t border-white/10 "+(idx%2?"bg-white/2.5":"")}> 
									<td className="px-5 py-3">{row[0]}</td>
									<td className="px-5 py-3">{row[1]}</td>
								</tr>
							))}
						</tbody>
					</table>
				</section>

				{/* Usage example */}
				<section className="rounded-2xl border border-white/10 overflow-hidden">
					<div className="bg-white/5 px-5 py-2 text-sm font-medium flex items-center justify-between">
						<span>Contoh penggunaan</span>
						<button onClick={() => copy(exampleCode)} className="px-2 py-1 rounded border border-white/15 hover:bg-white/10 text-xs">Copy</button>
					</div>
					<pre className="p-5 text-xs overflow-auto" style={{ backgroundColor: isDark ? "#0f0f0f" : "#f7f7f7", color: isDark ? "#e5e7eb" : "#111827" }}>{exampleCode}</pre>
				</section>

				{/* Theme controls */}
				<div className="flex items-center gap-2 pt-1 opacity-80 text-xs">
					<span>Theme:</span>
					<button onClick={() => setTheme("light")} className="px-2 py-1 rounded border border-white/20 hover:bg-white/10">Light</button>
					<button onClick={() => setTheme("dark")} className="px-2 py-1 rounded border border-white/20 hover:bg-white/10">Dark</button>
					<button onClick={() => setTheme("system")} className="px-2 py-1 rounded border border-white/20 hover:bg-white/10">System</button>
					<span className="ml-2">({theme})</span>
				</div>
			</div>
		</main>
	);
}

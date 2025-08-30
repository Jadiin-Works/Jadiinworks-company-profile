"use client";

import React, { useState } from "react";
import { ThemeProvider } from "./ThemeProvider";
import SplashScreen from "./SplashScreen";
import { useSplashScreen } from "./useSplashScreen";

function ClientLayoutContent({ children }) {
	const { showSplash, isLoading, hideSplash } = useSplashScreen();

	return (
		<>
			{showSplash && (
				<SplashScreen onComplete={hideSplash} />
			)}
			{!isLoading && children}
		</>
	);
}

export default function ClientLayout({ children }) {
	return (
		<ThemeProvider>
			<ClientLayoutContent>
				{children}
			</ClientLayoutContent>
		</ThemeProvider>
	);
}


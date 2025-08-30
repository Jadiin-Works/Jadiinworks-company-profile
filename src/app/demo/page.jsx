"use client";

import React from "react";
import Nav from "../components/Nav";
import { useTheme } from "../components/ThemeProvider";
import ClientLayout from "../components/ClientLayout";

export default function DemoPage() {
  const { theme, setTheme } = useTheme();

  return (
    <ClientLayout>
      <Nav />
      <main className="w-full min-h-screen pt-20">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h1 className="text-4xl font-bold mb-8">Navbar Demo</h1>
          
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-white/5 rounded-lg p-6 border border-white/10">
               <h2 className="text-2xl font-semibold mb-4">Enhanced Features</h2>
               <ul className="space-y-2">
                 <li>✅ Responsive design</li>
                 <li>✅ Smooth animations & transitions</li>
                 <li>✅ Dark/Light theme support</li>
                 <li>✅ Ripple effects on hover</li>
                 <li>✅ Glow effects for active links</li>
                 <li>✅ Floating animation</li>
                 <li>✅ Enhanced mobile drawer</li>
                 <li>✅ Custom Jadiinworks logo</li>
                 <li>✅ Staggered animations</li>
                 <li>✅ Pulse effects</li>
               </ul>
             </div>
            
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4">Theme Controls</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Current Theme: {theme}</label>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setTheme("light")}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Light
                    </button>
                    <button 
                      onClick={() => setTheme("dark")}
                      className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
                    >
                      Dark
                    </button>
                    <button 
                      onClick={() => setTheme("system")}
                      className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                    >
                      System
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-white/5 rounded-lg p-6 border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">Navigation</h2>
            <p className="text-lg mb-4">
              Use the navbar above to navigate between different sections. 
              The navbar includes smooth animations and responsive design.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <a href="/" className="block p-4 bg-white/10 rounded-lg hover:bg-white/20 transition">
                <h3 className="font-semibold">Home</h3>
                <p className="text-sm opacity-70">Main page</p>
              </a>
              <a href="/services" className="block p-4 bg-white/10 rounded-lg hover:bg-white/20 transition">
                <h3 className="font-semibold">Services</h3>
                <p className="text-sm opacity-70">Our offerings</p>
              </a>
              <a href="/portfolios" className="block p-4 bg-white/10 rounded-lg hover:bg-white/20 transition">
                <h3 className="font-semibold">Portfolios</h3>
                <p className="text-sm opacity-70">Our work</p>
              </a>
              <a href="/about" className="block p-4 bg-white/10 rounded-lg hover:bg-white/20 transition">
                <h3 className="font-semibold">About</h3>
                <p className="text-sm opacity-70">About us</p>
              </a>
              <a href="/contact" className="block p-4 bg-white/10 rounded-lg hover:bg-white/20 transition">
                <h3 className="font-semibold">Contact</h3>
                <p className="text-sm opacity-70">Get in touch</p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </ClientLayout>
  );
}

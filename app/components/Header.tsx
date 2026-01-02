"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll position to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="group">
          <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition">
            Srikanth<span className="text-blue-600">.</span>
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="#experience" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
            Experience
          </Link>
          <Link 
            href="#contact" 
            className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition shadow-md"
          >
            <Mail size={16} /> Hire Me
          </Link>
        </nav>
      </div>
    </header>
  );
}
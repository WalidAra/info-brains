import { Terminal } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-sm border-b border-white/[0.02]">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-white flex items-center gap-2"
          >
            <Terminal className="h-6 w-6" />
            Infobrains
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="#events"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Events
            </Link>
            {/* <Link
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </Link> */}
            <Link
              href="#achievements"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Achievements
            </Link>
            <Link
              href="#workshops"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Workshops
            </Link>
          </nav>
          <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-full px-6">
            Join Now
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header
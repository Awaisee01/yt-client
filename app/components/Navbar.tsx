'use client';

import { useState } from 'react';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-black text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Left Side - Logo & Title */}
        <div className="flex items-center space-x-2">
          <YouTubeIcon fontSize="large" className="text-red-500" />
          <h1 className="text-xl font-bold">YouTube Downloader</h1>
        </div>

        {/* Right Side - Downloader Nav Item */}
        <div className="hidden md:block">
          <Link href="/downloader" className="text-lg hover:text-gray-400">Downloader</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white p-4">
          <Link href="/downloader" className="block text-lg hover:text-gray-400">Downloader</Link>
        </div>
      )}
    </nav>
  );
}

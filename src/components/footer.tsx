'use client';

import Link from 'next/link';
import { Facebook, Twitter, Youtube } from 'lucide-react';
import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';

const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', 'aria-label': 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', 'aria-label': 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com', 'aria-label': 'YouTube' },
];

const latestPosts = [
    { href: '#', label: 'E paper 15 feb 2024' },
    { href: '#', label: 'E paper 14 feb 2024' },
    { href: '#', label: '12 feb 2024' },
]

export default function Footer() {
  const [selectedDate, setSelectedDate] = useState<string>('2025-12-25');
 
  const handleDateSearch = () => {
    // In a real application, you would navigate to a search results page
    // or filter the news content based on the selectedDate.
    console.log(`Searching for news on: ${selectedDate}`);
    alert(`Searching for news from ${selectedDate}. This feature can be fully implemented next.`);
  };


  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          {/* About Us */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-300">ABOUT US</h4>
            <div className="bg-primary p-2 inline-flex items-center justify-center rounded w-28 h-28">
                <span className="text-5xl font-bold text-primary-foreground font-headline">BS</span>
            </div>
            <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                    <Link key={index} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social['aria-label']} className="text-gray-400 hover:text-primary transition-colors bg-gray-800 p-2 rounded-full">
                        <social.icon className="h-5 w-5" />
                    </Link>
                ))}
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-300">Contact Us</h4>
             <p className="text-gray-400 text-sm leading-relaxed">
                GANDASI SADANANDA SWAMY<br/>
                bharathasarathi@gmail.com<br/>
                +91 9740160669
            </p>
          </div>

          {/* Date Search */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-300">Find News by Date</h4>
            <div className="flex flex-col gap-4 max-w-xs">
                <div className='space-y-2'>
                    <Label htmlFor="news-date" className='text-gray-400 text-xs'>Select a date</Label>
                    <Input
                        id="news-date"
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="bg-gray-800 border-gray-700 text-white"
                    />
                </div>
                <Button onClick={handleDateSearch} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Find News
                </Button>
            </div>
          </div>

          {/* Latest Posts */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-300">LATEST POSTS</h4>
            <ul className="space-y-4">
              {latestPosts.map((post) => (
                <li key={post.label} className='border-b border-gray-700 pb-3 last:border-b-0'>
                  <Link href={post.href} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-3 text-sm">
                    <span className="text-primary">&gt;</span> {post.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Bharatha Sarathi. Powered by FILMY SCOOP.</p>
        </div>
      </div>
    </footer>
  );
}

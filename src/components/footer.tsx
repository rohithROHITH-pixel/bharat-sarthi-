'use client';

import Link from 'next/link';
import { Facebook, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';

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
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Us */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold tracking-wider uppercase text-gray-300">ABOUT US</h4>
            <div className="bg-white p-2 inline-block rounded">
                <Image 
                    src="https://picsum.photos/seed/footer-logo/300/100" 
                    alt="Bharatha Sarathi Logo"
                    width={250}
                    height={80}
                    data-ai-hint="kannada newspaper logo"
                />
            </div>
            <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                    <Link key={index} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social['aria-label']} className="text-gray-400 hover:text-primary transition-colors bg-gray-800 p-2 rounded-full">
                        <social.icon className="h-5 w-5" />
                    </Link>
                ))}
            </div>
          </div>

          {/* Calendar */}
          <div className="space-y-4 flex justify-center">
             <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md bg-gray-800 p-0 text-white"
                classNames={{
                    caption: "text-primary font-bold",
                    head_cell: "text-gray-300",
                    day: "hover:bg-primary hover:text-white",
                    day_selected: "bg-primary text-white !text-primary-foreground",
                    day_today: "bg-primary/50 text-white",
                }}
             />
          </div>

          {/* Latest Posts */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold tracking-wider uppercase text-gray-300">LATEST POSTS</h4>
            <ul className="space-y-3">
              {latestPosts.map((post) => (
                <li key={post.label} className='border-b border-gray-700 pb-3'>
                  <Link href={post.href} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="text-primary">&gt;</span> {post.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Bharatha Sarathi. Powered by FILMY SCOOP.</p>
        </div>
      </div>
    </footer>
  );
}

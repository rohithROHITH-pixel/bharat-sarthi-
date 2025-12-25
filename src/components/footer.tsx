import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Rss } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const navLinks = [
  { href: '#home', label: 'ಮುಖಪುಟ' },
  { href: '#about', label: 'ಬಗ್ಗೆ' },
  { href: '#services', label: 'ಸೇವೆಗಳು' },
  { href: '#contact', label: 'ಸಂಪರ್ಕ' },
];

const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', 'aria-label': 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', 'aria-label': 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', 'aria-label': 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', 'aria-label': 'YouTube' },
    { icon: Rss, href: '#', 'aria-label': 'RSS Feed' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About */}
          <div className="space-y-4 md:col-span-1">
            <h3 className="text-2xl font-headline font-bold text-primary">ಭಾರತ ಸಾರಥಿ</h3>
            <p className="text-gray-400">
              ನಿಮ್ಮ ದೈನಂದಿನ ಸುದ್ದಿಗಳು, ಸ್ವಚ್ಛ ಮತ್ತು ವೇಗವಾಗಿ. ಕರ್ನಾಟಕ ಮತ್ತು ಪ್ರಪಂಚದಾದ್ಯಂತದ ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold tracking-wider uppercase text-gray-300">ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold tracking-wider uppercase text-gray-300">ನಮ್ಮನ್ನು ಹಿಂಬಾಲಿಸಿ</h4>
             <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                    <Link key={index} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social['aria-label']} className="text-gray-400 hover:text-primary transition-colors">
                        <social.icon className="h-6 w-6" />
                    </Link>
                ))}
            </div>
          </div>
          
          {/* Subscribe */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold tracking-wider uppercase text-gray-300">ಸುದ್ದಿಪತ್ರಕ್ಕೆ ಚಂದಾದಾರರಾಗಿ</h4>
            <p className="text-gray-400">ಇತ್ತೀಚಿನ ಸುದ್ದಿಗಳನ್ನು ನೇರವಾಗಿ ನಿಮ್ಮ ಇನ್‌ಬಾಕ್ಸ್‌ಗೆ ಪಡೆಯಿರಿ.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸ" className="bg-gray-800 border-gray-700 text-white" />
              <Button type="submit" variant="default">ಚಂದಾದಾರರಾಗಿ</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} ಭಾರತ ಸಾರಥಿ. ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.</p>
        </div>
      </div>
    </footer>
  );
}

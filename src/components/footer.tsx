import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Rss } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'ಮುಖಪುಟ' },
  { href: '#about', label: 'ಬಗ್ಗೆ' },
  { href: '#services', label: 'ಸೇವೆಗಳು' },
  { href: '#contact', label: 'ಸಂಪರ್ಕ' },
];

const socialLinks = [
    { icon: Facebook, href: '#', 'aria-label': 'Facebook' },
    { icon: Twitter, href: '#', 'aria-label': 'Twitter' },
    { icon: Instagram, href: '#', 'aria-label': 'Instagram' },
    { icon: Linkedin, href: '#', 'aria-label': 'LinkedIn' },
    { icon: Youtube, href: '#', 'aria-label': 'YouTube' },
    { icon: Rss, href: '#', 'aria-label': 'RSS Feed' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-headline font-bold text-primary">ಭಾರತ ಸಾರಥಿ</h3>
            <p className="text-gray-400">
              ಪ್ರಾಚೀನ ಜ್ಞಾನ ಮತ್ತು ಆಕಾಶದ ಒಳನೋಟಗಳೊಂದಿಗೆ ಜೀವನದ ಪ್ರಯಾಣದ ಮೂಲಕ ನಿಮಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ. ಯಶಸ್ಸು ಮತ್ತು ಸಂತೋಷಕ್ಕೆ ನಿಮ್ಮ ಮಾರ್ಗವನ್ನು ಕಂಡುಕೊಳ್ಳಿ.
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

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold tracking-wider uppercase text-gray-300">ನಮ್ಮನ್ನು ಹಿಂಬಾಲಿಸಿ</h4>
            <p className="text-gray-400">ದೈನಂದಿನ ಜಾತಕ ಮತ್ತು ನವೀಕರಣಗಳಿಗಾಗಿ ಸಂಪರ್ಕದಲ್ಲಿರಿ.</p>
            <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                    <Link key={index} href={social.href} aria-label={social['aria-label']} className="text-gray-400 hover:text-primary transition-colors">
                        <social.icon className="h-6 w-6" />
                    </Link>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} ಭಾರತ ಸಾರಥಿ. ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.</p>
        </div>
      </div>
    </footer>
  );
}

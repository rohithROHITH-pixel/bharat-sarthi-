'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { Menu, X, Moon, Sun, ChevronDown, Instagram } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '#about', label: 'ABOUT US' },
  { href: '#international', label: 'ಅಂತಾರಾಷ್ಟ್ರೀಯ' },
  { href: '#health', label: 'ಆರೋಗ್ಯ' },
  { href: '#sports', label: 'ಕ್ರೀಡೆ' },
  { href: '#crime', label: 'ಕ್ರೈಂ ಸುದ್ದಿ' },
  { href: '#politics', label: 'ರಾಜಕೀಯ' },
  { href: '#state', label: 'ರಾಜ್ಯ ಸುದ್ದಿ' },
];

const moreLinks = [
    { href: '#tech', label: 'ತಂತ್ರಜ್ಞಾನ'},
    { href: '#business', label: 'ವ್ಯಾಪಾರ'},
    { href: '#entertainment', label: 'ಮನರಂಜನೆ'},
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="bg-background shadow-sm">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center gap-4">
            <Link href="/" className="flex-shrink-0">
                <Image
                    src="https://picsum.photos/seed/dlogo/400/100"
                    alt="Bharatha Sarathi Logo"
                    width={300}
                    height={75}
                    data-ai-hint="logo newspaper"
                    className="object-contain"
                />
            </Link>
            <div className="hidden md:flex flex-grow items-center justify-center border-2 border-gray-300 p-4 rounded-lg">
                <div className='text-center'>
                    <h2 className='text-4xl font-serif font-bold'>ADVERTISE HERE</h2>
                    <p className='text-sm mt-2'>GANDASI SADANANDA SWAMY | bharathasarathi@gmail.com | +91 9740160669</p>
                </div>
            </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white">
        <div className="container flex h-14 items-center justify-between">
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium uppercase hover:bg-primary hover:text-white transition-colors border-b-2 border-transparent data-[active=true]:border-primary"
                data-active={link.href === '/'}
              >
                {link.label}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium uppercase hover:bg-primary hover:text-white data-[state=open]:bg-primary">
                  MORE <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-900 text-white border-gray-700">
                {moreLinks.map(link => (
                    <DropdownMenuItem key={link.href} asChild>
                        <Link href={link.href} className="hover:bg-primary focus:bg-primary">
                            {link.label}
                        </Link>
                    </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="#epaper" className="px-3 py-2 text-sm font-medium uppercase hover:bg-primary hover:text-white transition-colors">
              ಇ-ಪೇಪರ್
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
             <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-700">
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
             </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-700">
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700 hover:text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-900 text-white p-0">
                  <div className="p-4">
                      <div className="flex justify-between items-center mb-8">
                          <Link href="/" className="text-2xl font-bold font-headline text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                              ಭಾರತ ಸಾರಥಿ
                          </Link>
                          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:bg-gray-700 hover:text-white">
                              <X className="h-6 w-6" />
                          </Button>
                      </div>
                      <nav className="flex flex-col space-y-4">
                          {[...navLinks, ...moreLinks, {href: '#epaper', label: 'ಇ-ಪೇಪರ್'}].map((link) => (
                          <Link
                              key={link.href}
                              href={link.href}
                              className="text-lg font-medium text-gray-300 hover:text-primary transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                          >
                              {link.label}
                          </Link>
                          ))}
                      </nav>
                      <div className="mt-8 pt-4 border-t border-gray-700">
                        <p className='text-sm mt-2'>GANDASI SADANANDA SWAMY | bharathasarathi@gmail.com | +91 9740160669</p>
                      </div>
                  </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

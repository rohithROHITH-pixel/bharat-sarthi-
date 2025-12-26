'use client';

import { useState, useEffect, FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { Menu, X, Moon, Sun, ChevronDown, Phone, Mail, Bell, LogIn } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useUser } from '@/firebase';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useToast } from '@/hooks/use-toast';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '#epaper', label: 'ಇ-ಪೇಪರ್' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { user } = useUser();
  const { toast } = useToast();
  const [isSubscribeOpen, setSubscribeOpen] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState('');

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
  
  const handleSubscriptionSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(`New subscription from: ${subscriberEmail}`);
    toast({
        title: "Subscription Successful!",
        description: "You'll now receive daily news updates."
    });
    setSubscriberEmail('');
    setSubscribeOpen(false);
  };

  return (
    <header className="bg-background shadow-sm">
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
            <div className="flex justify-center md:justify-start">
              <Link href="/" className="flex items-center gap-3 flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary-foreground font-headline">BS</span>
                  </div>
                  <div>
                    <span className="text-2xl font-bold font-headline text-primary">ಭಾರತ ಸಾರಥಿ</span>
                    <p className="text-sm text-muted-foreground">Daily Kannada News</p>
                  </div>
              </Link>
            </div>
            <div className="col-span-1 md:col-span-2 flex items-center justify-center rounded-lg relative h-40 md:h-48 overflow-hidden">
                <Image 
                    src="https://picsum.photos/seed/person-ad/800/400"
                    alt="Person holding an advertisement"
                    fill
                    className="object-cover"
                    data-ai-hint="person holding sign"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className='relative z-10 text-center space-y-2 text-white p-2'>
                    <h3 className='text-lg md:text-2xl font-bold font-headline'>ನಿಮ್ಮ ಜಾಹೀರಾತುಗಳಿಗಾಗಿ ಸಂಪರ್ಕಿಸಿ</h3>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4 text-xs md:text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <span>bharathasarathi@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <span>+91 9740160669</span>
                      </div>
                    </div>
                     <Button size="sm" variant="outline" className="text-foreground mt-2">Advertise Now</Button>
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
          </nav>

          <div className="flex items-center justify-end md:justify-start flex-1 md:flex-none">
            <div className="flex items-center space-x-2">
              {!user ? (
                 <Button asChild variant="ghost" className="hover:bg-primary hover:text-white text-xs sm:text-sm">
                    <Link href="/login">
                      <LogIn className="h-5 w-5 mr-2" />
                      Admin Login
                    </Link>
                 </Button>
              ) : null}
              <Dialog open={isSubscribeOpen} onOpenChange={setSubscribeOpen}>
                <DialogTrigger asChild>
                    <Button variant="ghost" className="hover:bg-primary hover:text-white text-xs sm:text-sm">
                        <Bell className="h-5 w-5 mr-2" />
                        Subscribe
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Subscribe to Daily News</DialogTitle>
                        <DialogDescription>
                            Enter your email to receive daily news updates directly in your inbox.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubscriptionSubmit}>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="email" className="text-right">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={subscriberEmail}
                                    onChange={(e) => setSubscriberEmail(e.target.value)}
                                    className="col-span-3"
                                    required
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="button" variant="secondary">Cancel</Button>
                            </DialogClose>
                            <Button type="submit">Subscribe</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
              </Dialog>
              <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-700">
                  {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700 hover:text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-gray-900 text-white p-0">
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
                          {navLinks.map((link) => (
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
                        <p className='text-xs mt-2'>GANDASI SADANANDA SWAMY | bharathasarathi@gmail.com | +91 9740160669</p>
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

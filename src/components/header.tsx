
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Company", href: "/company" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blogs", href: "/blogs" },
];

export default function Header() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const NavLinkItems = () => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={() => setMenuOpen(false)}
          className={cn(
            "font-medium transition-colors hover:text-primary",
            pathname === link.href ? "text-primary" : "text-foreground/80",
            isMobile && "block py-3 text-lg"
          )}
        >
          {link.name}
        </Link>
      ))}
      <Link
        href="/contact"
        onClick={() => setMenuOpen(false)}
        className={cn(
          "font-medium transition-colors hover:text-primary",
          pathname === "/contact" ? "text-primary" : "text-foreground/80",
          isMobile && "block py-3 text-lg"
        )}
      >
        Contact Us
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm">
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 h-10 flex items-center justify-center text-sm font-medium">
          <a href="tel:+447476469285" className="flex items-center gap-2 group">
            <span className="hidden md:inline">WANT A FREE AMAZON PPC AUDIT?</span>
            <Phone className="h-4 w-4 group-hover:animate-pulse" />
            <span>+44 7476 469285</span>
          </a>
        </div>
      </div>
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex-1 flex justify-start">
            <Logo />
        </div>

        <div className="hidden lg:flex items-center justify-center gap-6">
          <NavLinkItems />
        </div>

        <div className="flex-1 flex justify-end">
            <Button asChild className="hidden lg:flex">
                <Link href="/contact">Get a Quote</Link>
            </Button>
            <div className="lg:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
                <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-80 bg-background p-6">
                <SheetHeader>
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <div className="flex justify-between items-center mb-8">
                        <Logo />
                        <Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)}>
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close menu</span>
                        </Button>
                    </div>
                </SheetHeader>
                <div className="flex flex-col gap-4">
                    <NavLinkItems />
                    <Button asChild className="mt-4">
                        <Link href="/contact">Get a Quote</Link>
                    </Button>
                </div>
                </SheetContent>
            </Sheet>
            </div>
        </div>
      </nav>
    </header>
  );
}


"use client";

import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Logo } from "./logo";
import { Separator } from "./ui/separator";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const companyLinks = [
  { name: "About", href: "/company" },
  { name: "Blog", href: "/blogs" },
  { name: "Our Work", href: "/case-studies" },
  { name: "Clients", href: "/case-studies#testimonials" },
];

const resourceLinks = [
    { name: "Resources", href: "/blogs" },
    { name: "Career", href: "/contact" },
    { name: "Sitemap", href: "/" },
];

const servicesLinks = [
  { name: "PPC Management", href: "/services" },
  { name: "Listing Optimization/SEO", href: "/services" },
  { name: "Amazon A-Z Launch", href: "/services" },
  { name: "EBC/Creatives", href: "/services" },
  { name: "TM Filing", href: "/services" },
  { name: "Listing Writing", href: "/services" },
  { name: "TikTok Shop Launch", href: "/services" },
  { name: "Amazon Brand Audit", href: "/services" },
];

const contactDetails = {
    address: "123 Amazon Way, Sunshine State, FL, 34567, USA",
    phone: "+44 7476 469285",
    phoneHref: "tel:+447476469285",
    email: "hello@amazonaid.com",
    emailHref: "mailto:hello@amazonaid.com",
};


export default function Footer() {
  return (
    <footer className="bg-secondary/70 text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            <div className="lg:col-span-4">
                <h3 className="font-headline text-xl font-bold mb-4">Let’s Grow your Brand</h3>
                <p className="text-muted-foreground mb-4">
                    Subscribe to our newsletter for the latest Amazon insights and strategies.
                </p>
                <form className="flex gap-2">
                    <Input type="email" placeholder="Your email address" className="bg-background"/>
                    <Button type="submit" variant="default">Subscribe</Button>
                </form>
            </div>
            <div className="lg:col-span-2 lg:col-start-6">
                <h4 className="font-headline font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                {companyLinks.map((link) => (
                    <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {link.name}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
            <div className="lg:col-span-2">
                <h4 className="font-headline font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                {servicesLinks.slice(0,4).map((link) => (
                    <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {link.name}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
            <div className="lg:col-span-3">
                 <h4 className="font-headline font-semibold mb-4">Contact</h4>
                 <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 mt-1 shrink-0 text-primary" />
                        <span>{contactDetails.address}</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Phone className="h-5 w-5 shrink-0 text-primary" />
                        <a href={contactDetails.phoneHref} className="hover:text-primary transition-colors">{contactDetails.phone}</a>
                    </li>
                     <li className="flex items-center gap-2">
                        <Mail className="h-5 w-5 shrink-0 text-primary" />
                        <a href={contactDetails.emailHref} className="hover:text-primary transition-colors">{contactDetails.email}</a>
                    </li>
                 </ul>
            </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <Logo />
            <p className="text-sm text-muted-foreground mt-2">
              © {new Date().getFullYear()} Amazonaid. All Rights Reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

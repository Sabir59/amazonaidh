import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Award, BarChart, FileText, Palette, Rocket, Search, ShieldCheck, Star, Target, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const logos = [
  { name: "Brand A", src: "https://placehold.co/150x60.png", hint: "tech logo" },
  { name: "Brand B", src: "https://placehold.co/150x60.png", hint: "fashion logo" },
  { name: "Brand C", src: "https://placehold.co/150x60.png", hint: "food logo" },
  { name: "Brand D", src: "https://placehold.co/150x60.png", hint: "health logo" },
  { name: "Brand E", src: "https://placehold.co/150x60.png", hint: "sports logo" },
  { name: "Brand F", src: "https://placehold.co/150x60.png", hint: "auto logo" },
];

const services = [
  { icon: BarChart, title: "PPC Management", description: "Expert management of your Amazon PPC campaigns to maximize ROI." },
  { icon: Search, title: "Listing Optimization/SEO", description: "Improve your product visibility and ranking with our A9 algorithm expertise." },
  { icon: Rocket, title: "Amazon A-Z Launch", description: "Comprehensive launch strategies for new products to ensure a strong start." },
  { icon: Palette, title: "EBC/Creatives", description: "Create stunning A+ Content and storefronts that convert visitors into customers." },
  { icon: ShieldCheck, title: "TM Filing", description: "Protect your brand on Amazon with our hassle-free trademark filing service." },
  { icon: FileText, title: "Listing Writing", description: "Compelling, keyword-rich copy that tells your brand story and drives sales." },
];

const testimonials = [
    { name: "Victor", quote: "Working with them was a game-changer for our Amazon strategy.", company: "CEO, TechBrand" },
    { name: "Ailon", quote: "Their deep understanding of the A9 algorithm is unparalleled.", company: "Marketing Head, Style Co." },
    { name: "Nguyễn", quote: "Professional, responsive, and results-driven. Highly recommend.", company: "Founder, Foodies Inc." },
];

const stats = [
  { value: "11%", label: "Average CVR Increase" },
  { value: "9.65M", label: "Client Revenue Generated" },
  { value: "9%", label: "Average RoAS Increase" },
  { value: "11.9", label: "Average TACOS Decrease" },
];

const caseStudies = [
  { title: "60% Higher Sales For a Home Goods Brand", image: "https://placehold.co/600x400.png", hint: "home goods" },
  { title: "120% RoAS Increase for an Electronics Brand", image: "https://placehold.co/600x400.png", hint: "electronics gadgets" },
];

const whatWeDo = [
  { icon: Target, title: "Full Account Management" },
  { icon: Award, title: "Brand Management" },
  { icon: TrendingUp, title: "Growth Consulting" },
  { icon: Users, title: "Creative Services" },
  { icon: BarChart, title: "PPC & DSP Advertising" },
  { icon: FileText, title: "Listing Optimization" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative pt-20 pb-10 md:pt-32 md:pb-20 bg-gradient-to-b from-sky-100 via-sky-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                The Amazon Agency that sky-rockets your business and adds Rocket-fuel
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
                Rated 4.9/5.0 by our clients for our outstanding services and support.
              </p>
              <div className="mt-4 flex justify-center md:justify-start items-center gap-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
                <span className="font-semibold">4.9/5.0</span>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Button asChild size="lg" className="font-bold">
                  <Link href="/free-audit">CLAIM YOUR FREE AUDIT</Link>
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">No credit card required.</p>
            </div>
            <div className="relative">
              <Image src="https://placehold.co/600x600.png" alt="Happy client with phone apps" width={600} height={600} className="rounded-lg mx-auto" data-ai-hint="man suit phone" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <p className="text-center font-semibold text-muted-foreground mb-8">Trusted by Leading Ecommerce, D2C, FBA, and VC-Backed Brands</p>
          <div
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          >
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-scroll opacity-70">
              {logos.map((logo, index) => (
                <li key={`${logo.name}-${index}`}>
                  <Image src={logo.src} alt={logo.name} width={120} height={50} data-ai-hint={logo.hint} className="grayscale hover:grayscale-0 transition-all" />
                </li>
              ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-scroll opacity-70" aria-hidden="true">
              {logos.map((logo, index) => (
                <li key={`${logo.name}-${index + logos.length}`}>
                   <Image src={logo.src} alt={logo.name} width={120} height={50} data-ai-hint={logo.hint} className="grayscale hover:grayscale-0 transition-all" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Ultimate All-in-One Solution offering</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              From PPC to creative design, we provide a full suite of services to elevate your Amazon presence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="font-headline mt-4 text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <CardContent>
                   <Button variant="link" asChild>
                      <Link href="/services">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Success Stories</h2>
             <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from brands we've helped succeed on Amazon.
            </p>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader className="flex-row items-center gap-4">
                    <Avatar className="h-12 w-12">
                        <AvatarImage src={`https://placehold.co/48x48.png?text=${testimonial.name.charAt(0)}`} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.company}</CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                  </div>
                  <p className="text-muted-foreground">&quot;{testimonial.quote}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Helping great brands win Bigger since 2020</h2>
             <p className="mt-4 text-lg opacity-90 max-w-3xl mx-auto">
              We are a data-driven agency and our results are a testament to our commitment. We are transparent and have a proven track record.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                 <div className="bg-white/20 rounded-full w-32 h-32 mx-auto flex flex-col justify-center items-center border-4 border-white/30">
                    <p className="text-3xl font-bold font-headline text-white">{stat.value}</p>
                 </div>
                <p className="mt-4 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-sky-50">
          <div className="container mx-auto px-4">
             <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Case Study</h2>
               <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We partner with brands to achieve remarkable results on Amazon. Here’s a look at our work.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {caseStudies.map((study, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <Image src={study.image} alt={study.title} width={600} height={400} className="w-full h-56 object-cover" data-ai-hint={study.hint}/>
                  <CardContent className="p-6">
                    <h3 className="font-headline text-xl font-bold">{study.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
             <div className="text-center mt-12">
              <Button asChild size="lg" variant="default">
                <Link href="/case-studies">View all Case Studies</Link>
              </Button>
            </div>
          </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-900 text-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">What we can do for you?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {whatWeDo.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center gap-4">
                <div className="bg-slate-700/50 rounded-full p-4">
                   <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container mx-auto px-4 py-16 md:py-20 text-center">
            <h2 className="text-3xl font-bold font-headline">Ready to Scale Your Amazon Business?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's talk about your brand's potential. Get a free, no-obligation consultation with our Amazon experts.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="default" className="font-bold">
                <Link href="/free-audit">GET A FREE CONSULTATION</Link>
              </Button>
            </div>
          </div>
      </section>
    </div>
  );
}

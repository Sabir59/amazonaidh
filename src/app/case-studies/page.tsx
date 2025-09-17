import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, PlayCircle, Star } from "lucide-react";

const logos = [
  { name: "Anker", src: "/images/logos/anker.svg", hint: "electronics logo" },
  { name: "Bose", src: "/images/logos/bose.svg", hint: "audio logo" },
  { name: "Crest", src: "/images/logos/crest.svg", hint: "health logo" },
  { name: "Hydro Flask", src: "/images/logos/hydroflask.svg", hint: "outdoors logo" },
  { name: "Lego", src: "/images/logos/lego.svg", hint: "toys logo" },
  { name: "Neutrogena", src: "/images/logos/neutrogena.svg", hint: "beauty logo" },
];

const caseStudies = [
  { title: "Transformative Growth for a Home Goods Brand", result: "60% Higher Sales", image: "https://placehold.co/600x400.png", hint: "home goods", slug: "home-goods-growth" },
  { title: "Dominating the Electronics Category", result: "120% RoAS Increase", image: "https://placehold.co/600x400.png", hint: "electronics gadgets", slug: "electronics-category-domination" },
  { title: "Successful Launch for a New Beauty Product", result: "Top 10 in Category", image: "https://placehold.co/600x400.png", hint: "beauty products", slug: "beauty-product-launch" },
  { title: "Scaling a Sports Nutrition Supplement", result: "50% Lower ACoS", image: "https://placehold.co/600x400.png", hint: "nutrition supplement", slug: "sports-nutrition-scaling" },
  { title: "Revitalizing an Apparel Brand's Presence", result: "200% YOY Growth", image: "https://placehold.co/600x400.png", hint: "apparel fashion", slug: "apparel-brand-revitalization" },
  { title: "Expanding a Pet Supplies Business Globally", result: "Entered 3 New Markets", image: "https://placehold.co/600x400.png", hint: "pet supplies", slug: "pet-supplies-expansion" },
];

const testimonials = [
    { name: "Victor", quote: "Working with them was a game-changer for our Amazon strategy." },
    { name: "Ailon", quote: "Their deep understanding of the A9 algorithm is unparalleled." },
    { name: "Nguyễn", quote: "Professional, responsive, and results-driven. Highly recommend." },
    { name: "Shehryar", quote: "Our PPC campaigns have never been more efficient. ACoS is down 30%!" },
    { name: "Luis", quote: "The creative team delivered A+ Content that truly converts." },
    { name: "Kevin", quote: "They handled our trademark filing seamlessly. A huge weight off our shoulders." },
    { name: "Chase", quote: "From listing writing to launch, their process is flawless." },
    { name: "Pratik", quote: "Our TikTok shop launch was a massive success thanks to their expertise." },
    { name: "Christopher", quote: "The brand audit they provided was incredibly insightful and actionable." },
];

const videoTestimonials = [
    { name: "Amit", image: "https://placehold.co/600x400.png", hint: "man talking" },
    { name: "Ijaz", image: "https://placehold.co/600x400.png", hint: "woman smiling" },
];


export default function CaseStudiesPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Success Stories</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We partner with brands to achieve remarkable results on Amazon. Here’s a look at our work.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 font-headline">Trusted by Top Brands</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            {logos.map((logo) => (
              <Image key={logo.name} src={logo.src} alt={logo.name} width={150} height={60} data-ai-hint={logo.hint} className="grayscale hover:grayscale-0 transition-all" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((study) => (
                    <Card key={study.slug} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <Image src={study.image} alt={study.title} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={study.hint}/>
                        <CardHeader>
                            <CardTitle className="font-headline text-xl">{study.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <div className="flex items-center gap-2 text-primary font-bold">
                                <CheckCircle className="h-6 w-6" />
                                <span className="text-lg">{study.result}</span>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="default" asChild className="w-full">
                                <Link href={`/case-studies/${study.slug}`}>READ CASE STUDY</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from brands we've helped succeed on Amazon.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader className="flex-row items-center gap-4">
                    <Avatar>
                        <AvatarImage src={`https://placehold.co/40x40.png?text=${testimonial.name.charAt(0)}`} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <div className="flex text-yellow-500 mt-1">
                            {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground italic">&quot;{testimonial.quote}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Separator className="my-16" />

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoTestimonials.map((video, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative group">
                  <Image src={video.image} alt={`Video testimonial from ${video.name}`} width={600} height={338} className="w-full h-auto object-cover" data-ai-hint={video.hint} />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <PlayCircle className="h-20 w-20 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  </div>
                   <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold text-lg font-headline">{video.name}</p>
                    <p>CEO, Client Company</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 md:py-20 text-center">
            <h2 className="text-3xl font-bold font-headline">Ready to Be Our Next Success Story?</h2>
            <p className="mt-4 text-lg opacity-80 max-w-2xl mx-auto">
              Partner with us to unlock your brand's full potential on Amazon.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="secondary" className="font-bold">
                <Link href="/free-audit">GET A FREE CONSULTATION</Link>
              </Button>
            </div>
          </div>
      </section>
    </>
  );
}

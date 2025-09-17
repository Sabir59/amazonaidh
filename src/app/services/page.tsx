import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { BarChart, Search, Rocket, Palette, Shield, FileText, Store, ClipboardCheck } from "lucide-react";

const services = [
  { name: "PPC Management", icon: BarChart, description: "Expert management of your Amazon PPC campaigns to maximize ROI." },
  { name: "Listing Optimization/SEO", icon: Search, description: "Improve your product visibility and ranking with our A9 algorithm expertise." },
  { name: "Amazon A-Z Launch", icon: Rocket, description: "Comprehensive launch strategies for new products to ensure a strong start." },
  { name: "EBC/Creatives", icon: Palette, description: "Create stunning A+ Content and storefronts that convert visitors into customers." },
  { name: "TM Filing", icon: Shield, description: "Protect your brand on Amazon with our hassle-free trademark filing service." },
  { name: "Listing Writing", icon: FileText, description: "Compelling, keyword-rich copy that tells your brand story and drives sales." },
  { name: "TikTok Shop Launch", icon: Store, description: "Expand your reach by launching and integrating a successful TikTok Shop." },
  { name: "Amazon Brand Audit", icon: ClipboardCheck, description: "A complete health check of your brand's presence on Amazon with actionable insights." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Services</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete suite of solutions designed to help your brand thrive on Amazon and beyond.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.name} className="flex flex-col text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="font-headline mt-4 text-xl">{service.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
             <Card className="md:col-span-2 lg:col-span-1 flex flex-col text-center bg-primary text-primary-foreground justify-center items-center p-8">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Ready to grow?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="opacity-80">Let's discuss how our services can be tailored to meet your unique goals.</p>
                  <a href="/contact" className="mt-4 inline-block font-bold bg-primary-foreground text-primary py-2 px-4 rounded-md hover:bg-primary-foreground/90 transition-colors">
                    Contact Us
                  </a>
                </CardContent>
              </Card>
          </div>
        </div>
      </section>
    </>
  );
}

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Eye, Handshake, HeartHandshake, Lightbulb, Megaphone, Rocket, ShieldCheck, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const coreValues = [
  { icon: HeartHandshake, title: "Integrity", description: "Set realistic goals and maintain transparent communication." },
  { icon: Rocket, title: "Results-Driven", description: "Focus on data-driven strategies that deliver measurable growth." },
  { icon: Target, title: "Client Focus", description: "Your success is our success. We are your dedicated partners." },
  { icon: Lightbulb, title: "Innovation", description: "Stay ahead of Amazon trends to keep you in the lead." },
  { icon: Megaphone, title: "Clear Communication", description: "Proactive and clear updates on your campaign performance." },
  { icon: Eye, title: "Transparency", description: "Full access to your data and our processes. No black boxes." },
  { icon: Handshake, title: "Partnership", description: "We foster long-term relationships built on trust and mutual respect." },
  { icon: ShieldCheck, title: "Quality", description: "Deliver top-tier work in every aspect of our service." },
];

const journeyPoints = [
  {
    title: "Founded in 2021",
    description: "Our agency was established in 2021 with the goal of helping brands of all sizes navigate the complexities of Amazon and achieve measurable success faster than they could alone."
  },
  {
    title: "Global Client Base",
    description: "We proudly support clients in more than 15 countries, including key markets in North America, Europe, and Middle East, giving us a strong understanding of different marketplaces and regional strategies."
  },
  {
    title: "Specialized Team",
    description: "Our team includes over 13 experienced Amazon specialists, each focusing on specific areas such as PPC advertising, listing optimization, account health, creative design, and more—ensuring every part of your business gets expert attention."
  },
    {
    title: "Over 50 Brands Supported",
    description: "Since our founding, we’ve helped more than 100 unique brands—from startups to established companies—successfully launch, grow, and scale their products on Amazon."
  },
  {
    title: "250+ Products Managed",
    description: "Our team has worked with over 250+ SKUs across various categories, building deep experience in managing, optimizing, and positioning a wide range of products to increase sales and improve rankings."
  },
];


export default function CompanyPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="font-headline text-4xl md:text-5xl font-bold">Your Partner in Transforming Amazon Businesses</h1>
              <p className="mt-6 text-lg text-muted-foreground">
                We are a team of passionate Amazon experts dedicated to helping brands navigate the complexities of the marketplace. Our mission is to combine data-driven strategies with creative excellence to unlock sustainable growth for your business. We believe in building true partnerships, grounded in transparency and a relentless pursuit of your goals.
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/free-audit">GET A FREE CONSULTATION</Link>
                </Button>
              </div>
            </div>
            <div>
              <Image src="https://placehold.co/600x400.png" alt="Our Team" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="team meeting" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">The Standards Behind Our Work and Relationships</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and our partnerships.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value) => (
              <Card key={value.title} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="font-headline mt-4 text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Journey</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              From a small startup to a leading Amazon agency.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {journeyPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="h-8 w-8 text-green-500 mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold font-headline">{point.title}</h3>
                  <p className="text-muted-foreground mt-1">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <Card className="bg-primary/5 border-primary/20">
              <div className="grid grid-cols-1 md:grid-cols-5 items-center p-8 md:p-12 gap-8">
                <div className="md:col-span-2 flex justify-center">
                    <Image src="https://placehold.co/600x600.png" alt="Amazon Trusted Partner Badge" width={600} height={600} className="rounded-lg" data-ai-hint="badge award"/>
                </div>
                <div className="md:col-span-3 text-center md:text-left">
                    <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary">Amazon Trusted Partner</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We’re dedicated to making your Amazon journey as smooth and stress-free as possible. Our team works closely with you to understand your goals, communicate clearly, and create a comfortable partnership where you feel supported every step of the way. With us, you can focus on your products while we handle the rest.
                    </p>
                </div>
              </div>
            </Card>
        </div>
      </section>
    </>
  );
}

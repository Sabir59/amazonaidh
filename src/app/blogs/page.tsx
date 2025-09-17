import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredPosts = [
  {
    title: "Amazon Listing Optimization: A Step-by-Step Guide",
    category: "Lead Generation",
    date: "09 Mar 2025",
    image: "https://placehold.co/600x400.png",
    aiHint: "business strategy",
    slug: "amazon-listing-optimization-a-step-by-step-guide",
  },
  {
    title: "The Ultimate Checklist for a Successful Amazon Product Launch",
    category: "Marketing Strategies",
    date: "02 Mar 2025",
    image: "https://placehold.co/600x400.png",
    aiHint: "product launch",
    slug: "the-ultimate-checklist-for-a-successful-amazon-product-launch",
  },
  {
    title: "Decoding the A9 Algorithm: How to Rank Higher on Amazon",
    category: "Amazon SEO",
    date: "25 Feb 2025",
    image: "https://placehold.co/600x400.png",
    aiHint: "data algorithm",
    slug: "decoding-the-a9-algorithm-how-to-rank-higher-on-amazon",
  },
  {
    title: "Mastering Amazon PPC: From Beginner to Pro",
    category: "PPC Advertising",
    date: "18 Feb 2025",
    image: "https://placehold.co/600x400.png",
    aiHint: "digital advertising",
    slug: "mastering-amazon-ppc-from-beginner-to-pro",
  },
];

const categories = [
  "Social Media Engagement",
  "Lead Generation",
  "Content Marketing",
  "Email Marketing",
  "Marketing Strategies",
  "Facebook Analytics",
  "PPC Advertising",
  "Amazon SEO",
];

export default function BlogsPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Insights & Strategies</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Your expert source for navigating the Amazon marketplace and beyond.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <Card key={post.title} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <Link href={`/blogs/${post.slug}`}>
                      <Image src={post.image} alt={post.title} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={post.aiHint} />
                    </Link>
                    <CardHeader>
                      <div className="text-sm text-muted-foreground">
                        <span>{post.category}</span> &bull; <span>{post.date}</span>
                      </div>
                      <CardTitle className="font-headline text-xl mt-2 hover:text-primary">
                        <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription>
                        Dive deep into strategies that drive growth and visibility on the world's largest marketplace.
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" asChild className="p-0">
                        <Link href={`/blogs/${post.slug}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                <div className="p-6 rounded-lg bg-card border">
                  <h3 className="font-headline text-xl font-semibold mb-4">Search</h3>
                  <div className="relative">
                    <Input placeholder="Search..." className="pr-10" />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  </div>
                </div>
                <div className="p-6 rounded-lg bg-card border">
                  <h3 className="font-headline text-xl font-semibold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category}>
                        <Link href="/blogs" className="flex justify-between items-center text-muted-foreground hover:text-primary transition-colors">
                          <span>{category}</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
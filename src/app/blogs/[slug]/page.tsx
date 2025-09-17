import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Calendar, Facebook, Linkedin, Twitter, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const blogPost = {
    title: "Amazon Listing Optimization: A Step-by-Step Guide",
    author: "Jane Doe",
    date: "09 Mar 2025",
    category: "Lead Generation",
    image: "https://placehold.co/1200x600.png",
    aiHint: "business strategy meeting",
    content: [
      "In the hyper-competitive world of Amazon, a well-optimized product listing is not just an option—it's a necessity. It's the digital equivalent of prime shelf space, compelling packaging, and a knowledgeable salesperson all rolled into one. This guide will walk you through the essential steps to elevate your Amazon listings from mediocre to magnificent, ensuring you capture attention and drive sales.",
      "The foundation of any great listing is understanding who you're talking to. Before you write a single word, delve into customer reviews for your products and your competitors'. What language do they use? What features do they rave about? What problems are they trying to solve? Create a customer persona to guide your copy and creative decisions. This isn't just a marketing exercise; it's about building a genuine connection with your audience.",
      "Keywords are the bridge between a customer's search and your product. Your goal is to find relevant, high-volume keywords that aren't overly competitive. Tools like Helium 10, Jungle Scout, or even Amazon's own Brand Analytics can provide a treasure trove of data. Don't just focus on the obvious; look for long-tail keywords (e.g., 'organic hypoallergenic dog treats for sensitive stomachs') which often have higher conversion rates. Integrate these keywords naturally into your title, bullet points, and backend search terms.",
      "Your product title is your most powerful piece of real estate. It needs to be informative, keyword-rich, and compelling. A strong formula is: **[Brand Name] [Main Keywords] - [Key Feature/Benefit], [Size/Quantity]**. For example, 'EcoFresh Bamboo Toothbrush - Soft Bristles for Sensitive Gums, 4-Pack'. Avoid keyword stuffing and all caps; clarity and readability are paramount.",
      "Think of your bullet points as a quick sales pitch. You have five opportunities to highlight the most important benefits and features of your product. Lead with the benefit, then explain the feature. For example, instead of 'Made with 100% cotton,' try 'Enjoy All-Day Comfort with Ultra-Soft 100% Cotton'. Use this space to address potential customer questions and overcome objections before they even arise.",
      "High-quality images are non-negotiable. They are the primary way customers interact with your product online. Your image stack should include:",
      "- **Main Image:** A crystal-clear shot of the product on a pure white background.",
      "- **Lifestyle Images:** Show your product in use, helping customers visualize it in their own lives.",
      "- **Infographics:** Use text and icons to highlight key features, dimensions, or benefits.",
      "- **Comparison Charts:** Show how your product stacks up against competitors.",
      "- **Video:** A short product video can increase conversion rates significantly.",
      "If your brand is registered, A+ Content (formerly Enhanced Brand Content) is a powerful tool to tell your brand's story. Use high-quality modules, compelling copy, and a consistent brand aesthetic to build trust and further differentiate your product. This is your chance to go beyond the basic description and create a rich, immersive shopping experience.",
      "Optimization is not a one-time task. Continuously monitor your listing's performance. A/B test different titles, images, and bullet points using Amazon's 'Manage Your Experiments' tool. Pay close attention to your conversion rate, session data, and keyword rankings. The Amazon marketplace is always evolving, and your listings should too. By staying vigilant and data-driven, you can maintain a competitive edge and ensure your products are always positioned for success."
    ]
};

const recentPosts = [
  {
    title: "The Ultimate Checklist for a Successful Amazon Product Launch",
    slug: "the-ultimate-checklist-for-a-successful-amazon-product-launch",
    image: "https://placehold.co/600x400.png",
    aiHint: "product launch checklist",
  },
  {
    title: "Decoding the A9 Algorithm: How to Rank Higher on Amazon",
    slug: "decoding-the-a9-algorithm-how-to-rank-higher-on-amazon",
    image: "https://placehold.co/600x400.png",
    aiHint: "data algorithm chart",
  },
  {
    title: "Mastering Amazon PPC: From Beginner to Pro",
    slug: "mastering-amazon-ppc-from-beginner-to-pro",
    image: "https://placehold.co/600x400.png",
    aiHint: "digital advertising graph",
  },
];


export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the blog post data based on the slug.
  // For this example, we'll use the hardcoded blogPost object.
  const { title, author, date, image, aiHint, content } = blogPost;

  return (
    <>
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <header className="mb-8 text-center">
              <Link href="/blogs" className="text-primary font-semibold hover:underline">{blogPost.category}</Link>
              <h1 className="font-headline text-3xl md:text-5xl font-bold mt-2">{title}</h1>
              <div className="mt-4 flex justify-center items-center gap-6 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{date}</span>
                </div>
              </div>
            </header>
            <Image src={image} alt={title} width={1200} height={600} className="w-full rounded-lg shadow-lg mb-12" data-ai-hint={aiHint}/>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            <aside className="lg:col-span-3 lg:order-1">
              <div className="sticky top-24 space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Author</h4>
                  <div className="flex items-center gap-3">
                    <Avatar>
                        <AvatarImage src="https://placehold.co/40x40.png" alt={author} />
                        <AvatarFallback>{author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">{author}</p>
                        <p className="text-sm text-muted-foreground">Content Strategist</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Share this post</h4>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" asChild>
                      <a href="#" aria-label="Share on Twitter"><Twitter className="h-4 w-4" /></a>
                    </Button>
                     <Button variant="outline" size="icon" asChild>
                      <a href="#" aria-label="Share on Facebook"><Facebook className="h-4 w-4" /></a>
                    </Button>
                     <Button variant="outline" size="icon" asChild>
                      <a href="#" aria-label="Share on LinkedIn"><Linkedin className="h-4 w-4" /></a>
                    </Button>
                  </div>
                </div>
              </div>
            </aside>
            
            <article className="lg:col-span-9 lg:order-2 prose prose-lg max-w-none text-foreground/90 prose-headings:font-headline prose-headings:text-foreground prose-a:text-primary hover:prose-a:underline prose-strong:text-foreground">
              {content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </article>

          </div>
        </div>
      </section>

      <Separator />

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-headline text-2xl md:text-3xl font-bold">Recent Posts</h2>
              <Button variant="outline" asChild>
                <Link href="/blogs">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentPosts.map((post) => (
                    <Card key={post.slug} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <Link href={`/blogs/${post.slug}`}>
                            <Image src={post.image} alt={post.title} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={post.aiHint} />
                        </Link>
                        <CardHeader>
                            <CardTitle className="font-headline text-lg mt-2 hover:text-primary">
                                <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                           <Button variant="link" asChild className="p-0 text-sm">
                                <Link href={`/blogs/${post.slug}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}
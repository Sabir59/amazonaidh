import { ArrowRight, CheckCircle, Eye, Handshake, Lightbulb, Scale, Target } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const caseStudiesData = {
  'home-goods-growth': {
    title: "Transformative Growth for a Home Goods Brand",
    result: "60% Higher Sales",
    image: "https://placehold.co/1200x600.png",
    aiHint: "modern living room",
    client: "Urban Nest",
    industry: "Home Goods",
    challenge: "Urban Nest, a premium home goods brand, faced stagnant sales and low visibility on Amazon. Their product listings were not optimized, and their advertising campaigns were delivering a low Return on Ad Spend (RoAS). They needed a comprehensive strategy to boost their presence and drive significant growth.",
    solution: [
      {
        title: "Complete Listing Optimization",
        description: "We conducted in-depth keyword research and rewrote all product titles, bullet points, and descriptions to improve SEO ranking. We also produced high-quality infographics and lifestyle images to increase conversion rates.",
        icon: Eye
      },
      {
        title: "Strategic PPC Overhaul",
        description: "Our team restructured their entire PPC campaigns, targeting long-tail keywords and implementing a data-driven bidding strategy. This reduced wasted ad spend and focused the budget on high-converting search terms.",
        icon: Target
      },
      {
        title: "A+ Content Implementation",
        description: "We designed and implemented a stunning A+ Content layout that told the brand's story, highlighted key product features, and built trust with customers, leading to a measurable increase in session-to-conversion rate.",
        icon: Lightbulb
      }
    ],
    results: [
      {
        value: "60%",
        label: "Increase in Total Sales"
      },
      {
        value: "120%",
        label: "Boost in RoAS"
      },
      {
        value: "45%",
        label: "Reduction in ACoS"
      },
       {
        value: "Top 5",
        label: "Ranking for Main Keywords"
      },
    ]
  },
  'electronics-category-domination': {
    title: "Dominating the Electronics Category", result: "120% RoAS Increase", image: "https://placehold.co/1200x600.png", aiHint: "electronic gadgets", client: "TechPulse", industry: "Electronics",
    challenge: "TechPulse was struggling with intense competition from established brands and low brand visibility. Their ACoS was high, and their organic ranking for key high-volume keywords was poor, limiting their market share.",
    solution: [
        { title: "Strategic PPC Overhaul", description: "Launched aggressive Sponsored Brands and Sponsored Display campaigns targeting competitor ASINs. Implemented a dynamic bidding strategy focused on top-of-search placements to capture high-intent buyers.", icon: Target },
        { title: "Advanced SEO & Listing Enrichment", description: "Overhauled titles and bullets with high-volume, long-tail keywords. Developed premium A+ Content with comparison charts and technical spec callouts to improve conversion.", icon: Eye },
        { title: "DSP Retargeting Campaign", description: "Utilized Amazon's Demand-Side Platform (DSP) to retarget users who viewed TechPulse's products but didn't purchase, using compelling video and display ads to drive them back to the product page.", icon: Lightbulb }
    ],
    results: [{ value: "120%", label: "Increase in RoAS" }, { value: "70%", label: "Sales Growth" }, { value: "30%", label: "Market Share Gain" }, { value: "Top 3", label: "Category Ranking" }]
  },
  'beauty-product-launch': {
    title: "Successful Launch for a New Beauty Product", result: "Top 10 in Category", image: "https://placehold.co/1200x600.png", aiHint: "beauty products", client: "AuraBeauty", industry: "Beauty & Personal Care",
    challenge: "AuraBeauty needed to launch a new, premium skincare line in the highly saturated beauty market on Amazon. They had zero product reviews, no brand recognition, and a limited launch budget.",
    solution: [
        { title: "Pre-Launch Buzz Creation", description: "Leveraged Amazon Posts and social media integration to build anticipation. Ran a 'coming soon' campaign targeting competitor audiences to build an early interest list.", icon: Handshake },
        { title: "Amazon Vine & Review Program", description: "Enrolled the product in the Amazon Vine program to secure early, high-quality reviews, which are crucial for building trust and driving initial sales velocity.", icon: Eye },
        { title: "Tiered PPC Launch Strategy", description: "Started with a low-budget 'discovery' campaign to gather keyword data, then scaled aggressively on high-performing keywords while maintaining a positive ACoS.", icon: Target }
    ],
    results: [{ value: "Top 10", label: "in Category within 30 days" }, { value: "5k+", label: "Units Sold in First Month" }, { value: "4.8/5", label: "Average Star Rating" }, { value: "25%", label: "New-to-Brand Customers" }]
  },
  'sports-nutrition-scaling': {
    title: "Scaling a Sports Nutrition Supplement", result: "50% Lower ACoS", image: "https://placehold.co/1200x600.png", aiHint: "nutrition supplement", client: "Peak Performance", industry: "Health & Fitness",
    challenge: "Peak Performance had a successful product but hit a growth plateau. Their Advertising Cost of Sale (ACoS) was too high to scale profitably, and they were losing market share to new competitors.",
    solution: [
        { title: "Profitability-Driven PPC", description: "Restructured campaigns to focus on Total ACoS (TACoS) instead of just ACoS. This involved reallocating budget to campaigns that drove both ad sales and organic ranking improvements.", icon: Scale },
        { title: "Subscribe & Save Optimization", description: "Designed A+ Content and promotional campaigns specifically to increase 'Subscribe & Save' adoption, improving customer lifetime value and predictable revenue.", icon: CheckCircle },
        { title: "Competitive Intelligence", description: "Monitored competitor pricing, promotions, and keyword strategies daily, allowing us to pivot our own strategy in real-time to defend and gain market share.", icon: Target }
    ],
    results: [{ value: "50%", label: "Lower ACoS" }, { value: "80%", label: "Increase in Subscriptions" }, { value: "300%", label: "YOY Growth" }, { value: "No. 1", label: "Best Seller Badge" }]
  },
  'apparel-brand-revitalization': {
    title: "Revitalizing an Apparel Brand's Presence", result: "200% YOY Growth", image: "https://placehold.co/1200x600.png", aiHint: "apparel fashion", client: "UrbanThreads", industry: "Apparel",
    challenge: "UrbanThreads, an established fashion brand, was seeing its Amazon presence decline. Their storefront was outdated, their imagery didn't resonate with the current audience, and organic traffic was dropping.",
    solution: [
        { title: "Complete Storefront Redesign", description: "Overhauled the entire Amazon Storefront with a modern, editorial feel. Created curated collection pages and integrated lifestyle videos to create an immersive brand experience.", icon: Lightbulb },
        { title: "Lifestyle & Video Creative", description: "Produced a new suite of creative assets, including on-model lifestyle photos and short-form video for product pages, showing the apparel in real-world scenarios.", icon: Eye },
        { title: "Amazon Posts & Followers", description: "Implemented a consistent Amazon Posts strategy to engage customers directly on the platform, growing their brand follower count by 400% and driving repeat purchases.", icon: Handshake }
    ],
    results: [{ value: "200%", label: "YOY Growth" }, { value: "60%", label: "Increase in Organic Traffic" }, { value: "40%", label: "Higher Repeat Purchase Rate" }, { value: "Featured", label: "in Amazon's Fashion Edit" }]
  },
  'pet-supplies-expansion': {
    title: "Expanding a Pet Supplies Business Globally", result: "Entered 3 New Markets", image: "https://placehold.co/1200x600.png", aiHint: "pet supplies", client: "Paws & Whiskers", industry: "Pet Supplies",
    challenge: "Paws & Whiskers dominated the US market but wanted to expand into Europe (UK, Germany) and Canada. They needed a strategy to navigate different regulations, languages, and consumer behaviors.",
    solution: [
        { title: "Market-Specific Localization", description: "Translated and localized all listings for the UK, German, and Canadian markets, taking into account local search terms, cultural nuances, and measurement units.", icon: Eye },
        { title: "International Logistics & Compliance", description: "Guided the client through the process of setting up international shipping, VAT registration, and ensuring all products met the compliance standards for each new marketplace.", icon: CheckCircle },
        { title: "Global Campaign Management", description: "Managed PPC campaigns across all four marketplaces from a single, unified dashboard, adjusting bids and budgets based on the performance and seasonality of each region.", icon: Target }
    ],
    results: [{ value: "3", label: "New Markets Entered (UK, DE, CA)" }, { value: "50%", label: "International Sales Growth" }, { value: "95%", label: "Account Health Maintained" }, { value: "Unified", label: "Brand Storefronts" }]
  },
};

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudiesData[params.slug as keyof typeof caseStudiesData];

  if (!caseStudy) {
    notFound();
  }
  
  const { title, image, aiHint, client, industry, challenge, solution, results } = caseStudy;

  return (
    <>
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <header className="mb-8 text-center">
              <p className="text-primary font-semibold mb-2">{industry}</p>
              <h1 className="font-headline text-3xl md:text-5xl font-bold">{title}</h1>
              <p className="mt-4 text-lg text-muted-foreground">Client: {client}</p>
            </header>
            <Image src={image} alt={title} width={1200} height={600} className="w-full rounded-lg shadow-lg mb-12" data-ai-hint={aiHint}/>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <h2 className="font-headline text-2xl font-bold mb-4">The Challenge</h2>
              </div>
              <div className="md:col-span-3">
                <p className="text-lg text-muted-foreground">{challenge}</p>
              </div>
            </div>
            
            <hr className="my-12 md:my-16" />

             <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <h2 className="font-headline text-2xl font-bold mb-4">The Solution</h2>
              </div>
              <div className="md:col-span-3 space-y-8">
                {solution.map(item => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-primary/10 text-primary rounded-full p-3 w-fit">
                        <item.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-bold">{item.title}</h3>
                      <p className="text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <hr className="my-12 md:my-16" />

            <div>
              <h2 className="font-headline text-center text-3xl font-bold mb-10">The Results</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {results.map(stat => (
                  <div key={stat.label} className="text-center p-6 bg-secondary/50 rounded-lg">
                    <p className="text-4xl font-bold font-headline text-primary">{stat.value}</p>
                    <p className="mt-2 text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
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

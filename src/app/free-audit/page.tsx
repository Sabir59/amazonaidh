import Image from "next/image";
import { FreeAuditForm } from "./free-audit-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const auditBenefits = [
    "Uncover wasted ad spend.",
    "Identify new keyword opportunities.",
    "Optimize your campaign structure.",
    "Receive actionable recommendations from experts."
];

export default function FreeAuditPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Get Your Free Amazon PPC Audit</h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            Find out how you can improve your advertising performance and drive more sales. No commitment required.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <h2 className="font-headline text-3xl font-bold mb-6">What You'll Get</h2>
                    <p className="text-muted-foreground mb-8">
                        Our comprehensive audit provides a deep dive into your Amazon advertising accounts. We analyze your campaigns to find critical areas for improvement, helping you increase efficiency and profitability.
                    </p>
                    <ul className="space-y-4">
                        {auditBenefits.map(benefit => (
                            <li key={benefit} className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                                <span className="text-lg">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="order-1 lg:order-2">
                    <Card className="shadow-2xl">
                        <CardHeader className="text-center">
                            <CardTitle className="text-2xl font-headline">Request Your Free Audit Now</CardTitle>
                            <CardDescription>Fill out the form below to get started.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <FreeAuditForm />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}

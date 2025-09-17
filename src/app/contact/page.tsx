import { Mail, Phone } from "lucide-react";
import { ContactForm } from "./contact-form";

const contactDetails = {
  description: "Looking to get in touch with our Full Service Amazon Agency? You can reach us with the info below.",
  hours: "Monday to Friday\n3 am EST till 5 pm EST",
  phones: [
    { number: "+44 7476 469285", href: "tel:+447476469285" },
    { number: "+1 669 6695811", href: "tel:+16696695811" },
  ],
  emails: [
    { address: "hello@amazonaid.com", href: "mailto:hello@amazonaid.com" },
    { address: "support@amazonaid.com", href: "mailto:support@amazonaid.com" }
  ]
};

export default function ContactPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">Contact Us</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the power of what results-driven marketing strategies could do. Contact us today to discuss your goals and take your brand to the next level with our proven strategies and expert team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <aside>
              <div className="bg-secondary/50 border border-border p-8 rounded-lg space-y-6">
                <p className="text-foreground/80">{contactDetails.description}</p>
                <p className="text-foreground/80 whitespace-pre-line">{contactDetails.hours}</p>

                <div>
                  <h3 className="font-semibold flex items-center gap-2 mb-2 text-primary">
                    <Phone className="h-5 w-5" />
                    Phone
                  </h3>
                  <div className="space-y-1">
                  {contactDetails.phones.map((phone) => (
                    <a key={phone.href} href={phone.href} className="block text-muted-foreground hover:text-primary transition-colors">{phone.number}</a>
                  ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold flex items-center gap-2 mb-2 text-primary">
                    <Mail className="h-5 w-5" />
                    Email
                  </h3>
                   <div className="space-y-1">
                  {contactDetails.emails.map((email) => (
                    <a key={email.href} href={email.href} className="block text-muted-foreground hover:text-primary transition-colors">{email.address}</a>
                  ))}
                  </div>
                </div>
              </div>
            </aside>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

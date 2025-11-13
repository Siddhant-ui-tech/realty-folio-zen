import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to find your dream property? Our experts are here to help
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto animate-slide-up">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
            <h3 className="font-playfair text-2xl font-bold mb-6 text-foreground">
              Send us a Message
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  className="bg-secondary border-border"
                />
                <Input
                  placeholder="Phone Number"
                  className="bg-secondary border-border"
                />
              </div>
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-secondary border-border"
              />
              <Input
                placeholder="Property Interest"
                className="bg-secondary border-border"
              />
              <Textarea
                placeholder="Your Message"
                className="bg-secondary border-border min-h-32"
              />
              <Button variant="premium" className="w-full h-12 font-semibold">
                Submit Inquiry
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-playfair text-xl font-bold mb-2 text-foreground">
                    Call Us
                  </h4>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                  <p className="text-muted-foreground">Mon-Sat, 9AM-8PM</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-playfair text-xl font-bold mb-2 text-foreground">
                    Email Us
                  </h4>
                  <p className="text-muted-foreground">info@shashirealty.in</p>
                  <p className="text-muted-foreground">support@shashirealty.in</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-playfair text-xl font-bold mb-2 text-foreground">
                    Visit Office
                  </h4>
                  <p className="text-muted-foreground">
                    123 Business Plaza, BKC,
                    <br />
                    Mumbai - 400051
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto animate-slide-up">
          {/* Email */}
          <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all shadow-card">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-playfair text-xl font-bold mb-2 text-foreground">
                  Email Us
                </h4>
                <p className="text-muted-foreground">bmavenue0@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all shadow-card">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-playfair text-xl font-bold mb-2 text-foreground">
                  Call Us
                </h4>
                <p className="text-muted-foreground">+91 9724700082</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all shadow-card">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-playfair text-xl font-bold mb-2 text-foreground">
                  Visit Us
                </h4>
                <p className="text-muted-foreground">
                  BM AVENUE, F.P. NO.: 37, T.P.S. NO.: 54
                </p>
                <p className="text-muted-foreground">Bhestan Canal Road, Bhestan, Surat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

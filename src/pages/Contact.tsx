import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const offices = [
    {
      city: "Surat",
      address: "BM AVENUE, F.P. NO.: 37, T.P.S. NO.: 54, Bhestan Canal Road, Bhestan, Surat",
      phone: "+91 9724700082",
      email: "info@shashirealty.in",
    },
  ];

  return (
    <div className="min-h-screen font-inter bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to find your dream property? Our experts are here to help you every step of the way
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-card animate-slide-up">
              <h2 className="font-playfair text-3xl font-bold mb-6 text-foreground">
                Send us a Message
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Full Name</label>
                    <Input
                      placeholder="John Doe"
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Phone Number</label>
                    <Input
                      placeholder="+91 98765 43210"
                      className="bg-secondary border-border"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Email Address</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-secondary border-border"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Property Interest</label>
                  <Input
                    placeholder="Villa, Apartment, Penthouse..."
                    className="bg-secondary border-border"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Your Message</label>
                  <Textarea
                    placeholder="Tell us about your requirements..."
                    className="bg-secondary border-border min-h-32"
                  />
                </div>
                <Button variant="premium" className="w-full h-12 font-semibold">
                  Submit Inquiry
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card animate-fade-in">
                <h3 className="font-playfair text-2xl font-bold mb-6 text-foreground">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                      <p className="text-muted-foreground">+91 9724700082</p>
                      <p className="text-muted-foreground">+91 9724700084</p>
                      <p className="text-muted-foreground">+91 8141544411</p>
                      <p className="text-sm text-muted-foreground">Mon-Sat, 9AM-8PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                      <p className="text-muted-foreground">info@shashirealty.in</p>
                      <p className="text-muted-foreground">support@shashirealty.in</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                      <p className="text-muted-foreground">Chat with us instantly</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Start Chat
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                      <p className="text-muted-foreground">Monday - Saturday</p>
                      <p className="text-muted-foreground">9:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule Visit */}
              <div className="bg-gradient-primary rounded-2xl p-8 text-center">
                <h3 className="font-playfair text-2xl font-bold mb-3 text-primary-foreground">
                  Schedule a Site Visit
                </h3>
                <p className="text-primary-foreground/90 mb-6">
                  Book a personalized tour of properties that match your preferences
                </p>
                <Button variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20">
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold mb-12 text-center text-foreground">
            Our <span className="text-primary">Office Locations</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-luxury"
              >
                <h3 className="font-playfair text-2xl font-bold mb-4 text-foreground">
                  {office.city}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <p className="text-muted-foreground text-sm">{office.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <p className="text-muted-foreground text-sm">{office.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

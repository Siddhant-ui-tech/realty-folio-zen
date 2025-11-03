import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Building, Award, Clock, Users, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Complete transparency in all our dealings with clients and partners",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Commitment to delivering only the finest properties and services",
    },
    {
      icon: Users,
      title: "Client-First",
      description: "Your dreams and satisfaction are at the heart of everything we do",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Leveraging technology to make property search seamless",
    },
  ];

  const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "500+", label: "Properties Listed" },
    { number: "50+", label: "Trusted Builders" },
    { number: "10,000+", label: "Happy Clients" },
  ];

  const team = [
    { name: "Rajesh Kumar", role: "Founder & CEO", experience: "20 years in real estate" },
    { name: "Priya Sharma", role: "Head of Operations", experience: "15 years experience" },
    { name: "Amit Patel", role: "Chief Technology Officer", experience: "12 years in PropTech" },
    { name: "Sneha Reddy", role: "Head of Customer Success", experience: "10 years experience" },
  ];

  return (
    <div className="min-h-screen font-inter bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 text-foreground">
              About <span className="text-primary">LuxeSpaces</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              India's most trusted platform for discovering and investing in premium real estate.
              We connect discerning buyers with their dream properties through verified listings
              and unparalleled service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl font-bold mb-8 text-center text-foreground">
              Our <span className="text-primary">Mission</span>
            </h2>
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-card">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At LuxeSpaces, we believe that finding your dream home should be an exciting,
                transparent, and seamless experience. Our mission is to revolutionize the real
                estate industry in India by providing a platform that brings together the finest
                properties, trusted builders, and verified information - all in one place.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are committed to maintaining the highest standards of integrity, ensuring every
                property on our platform is RERA verified, and providing our clients with expert
                guidance throughout their property buying journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold mb-12 text-center text-foreground">
            Our <span className="text-primary">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-luxury text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold mb-12 text-center text-foreground">
            Meet Our <span className="text-primary">Leadership</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-luxury text-center"
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4"></div>
                <h3 className="font-playfair text-xl font-bold mb-1 text-foreground">
                  {member.name}
                </h3>
                <div className="text-primary font-semibold mb-2">{member.role}</div>
                <p className="text-sm text-muted-foreground">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-4xl font-bold mb-8 text-foreground">
              Why Choose <span className="text-primary">LuxeSpaces?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl p-8 border border-border text-left">
                <Building className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-playfair text-xl font-bold mb-3 text-foreground">
                  Premium Selection
                </h3>
                <p className="text-muted-foreground">
                  Handpicked properties from India's most trusted builders and developers
                </p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border text-left">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-playfair text-xl font-bold mb-3 text-foreground">
                  100% Verified
                </h3>
                <p className="text-muted-foreground">
                  Every property is RERA verified and legally compliant
                </p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border text-left">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-playfair text-xl font-bold mb-3 text-foreground">
                  24/7 Support
                </h3>
                <p className="text-muted-foreground">
                  Expert assistance available whenever you need guidance
                </p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border text-left">
                <Award className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-playfair text-xl font-bold mb-3 text-foreground">
                  Industry Leaders
                </h3>
                <p className="text-muted-foreground">
                  Over 15 years of excellence in luxury real estate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

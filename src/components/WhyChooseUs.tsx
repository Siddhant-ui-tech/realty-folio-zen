import { Shield, Building, Award, Clock } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "100% RERA Verified",
      description: "All properties are verified and compliant with regulatory standards",
    },
    {
      icon: Building,
      title: "Trusted Builders",
      description: "Partner with India's most reputable and established developers",
    },
    {
      icon: Award,
      title: "Premium Selection",
      description: "Curated collection of luxury homes in prime locations",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Expert assistance available round the clock for your needs",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Choose <span className="text-primary">Shashi Realty</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in finding the perfect luxury home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-up">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-luxury text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-gradient-primary transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const About = () => {
  const completedProjects = [
    {
      name: "SHASHIROOP HOMES",
      type: "Residential Low Rise",
      units: "241 Flats, 42 Shops",
      completion: "May 2014",
    },
    {
      name: "KRISHNA VILLA",
      type: "Row House Plots",
      units: "70",
      completion: "Apr 2015",
    },
    {
      name: "VIJYALAXMI RESIDENCY",
      type: "Residential Low Rise",
      units: "38",
      completion: "May 2018",
    },
    {
      name: "BHAGYALAXMI RESIDENCY",
      type: "Residential Low Rise",
      units: "394 Flats, 12 Shops",
      completion: "Dec 2018",
    },
    {
      name: "VAIBHAVLAXMI SHOPPING",
      type: "Commercial",
      units: "247",
      completion: "Sep 2022",
    },
    {
      name: "BM VILLA",
      type: "Row House",
      units: "92",
      completion: "Jul 2023",
    },
    {
      name: "SHASHIKUNJ",
      type: "Row House",
      units: "64",
      completion: "Sep 2025",
    },
  ];

  const ongoingProjects = [
    {
      name: "SHASHIDHWAR",
      type: "Residential Low Rise",
      units: "196 Flats, 26 Shops",
      status: "On Going",
    },
    {
      name: "BM AVENUE",
      type: "Commercial & Residential Low Rise",
      units: "135 Shops, 336 Flats",
      status: "On Going",
    },
  ];

  const stats = [
    { number: "860+", label: "Flats Delivered" },
    { number: "325+", label: "Shops Built" },
    { number: "220+", label: "Row Houses/Plots" },
    { number: "10+", label: "Years of Excellence" },
  ];

  return (
    <div className="min-h-screen font-inter bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 text-foreground">
              About <span className="text-primary">Shashi Realty</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Shashi Realty, a promising real estate group based in Bhestan, Surat, has been blending affordability with modern architecture for over a decade. The group has extensive experience in developing residential, commercial, and row house projects, delivering quality homes and spaces that inspire trust and satisfaction.
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

      {/* Completed Projects Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold mb-8 text-center text-foreground">
            Completed <span className="text-primary">Projects</span>
          </h2>
          <div className="max-w-6xl mx-auto bg-card rounded-2xl border border-border shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">Project Name</TableHead>
                    <TableHead className="font-bold">Type</TableHead>
                    <TableHead className="font-bold">Total Units</TableHead>
                    <TableHead className="font-bold">Year of Completion</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {completedProjects.map((project, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-semibold">{project.name}</TableCell>
                      <TableCell>{project.type}</TableCell>
                      <TableCell>{project.units}</TableCell>
                      <TableCell>{project.completion}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold mb-8 text-center text-foreground">
            Ongoing <span className="text-primary">Projects</span>
          </h2>
          <div className="max-w-6xl mx-auto bg-card rounded-2xl border border-border shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">Project Name</TableHead>
                    <TableHead className="font-bold">Type</TableHead>
                    <TableHead className="font-bold">Total Units</TableHead>
                    <TableHead className="font-bold">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ongoingProjects.map((project, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-semibold">{project.name}</TableCell>
                      <TableCell>{project.type}</TableCell>
                      <TableCell>{project.units}</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                          {project.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Commitment Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl font-bold mb-8 text-center text-foreground">
              Experience & <span className="text-primary">Commitment</span>
            </h2>
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-card">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The group has successfully built more than 860 flats, 325 shops, and 220 row houses/plots. Shashi Realty is committed to delivering high-quality, affordable homes with a comprehensive range of amenities, ensuring every project becomes a space people are proud to call home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

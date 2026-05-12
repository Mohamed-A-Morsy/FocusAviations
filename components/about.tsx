import { Target, Eye, Award, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
            About Us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Connecting the World Through Air Cargo
          </p>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Focus Aviations has been at the forefront of air cargo services in
            Egypt, serving as a trusted General Sales Agent for leading
            airlines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Who We Are
                </h3>
                {/* <p className="mt-2 text-muted-foreground">
                  Focus Logistics is a leading General Sales Agent (GSA) based in Egypt, 
                  specializing in air cargo solutions. We represent international airlines 
                  and provide comprehensive cargo booking, handling, and logistics services 
                  to businesses across the region.
                </p>  */}
                <p className="mt-2 text-muted-foreground">
                  Focus Aviations is a trusted General Sales Agent (GSA) based
                  in Egypt, specializing in air cargo solutions. We work closely
                  with airlines and freight partners to deliver efficient cargo
                  operations, sales representation, and reliable logistics
                  support across regional and international markets.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Our Expertise
                </h3>
                <p className="mt-2 text-muted-foreground">
                  With more than 25 years of experience in the aviation
                  industry, Our team combines industry knowledge with
                  operational efficiency to support airlines in managing cargo
                  sales, coordination, and customer service with professionalism
                  and accuracy.
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-6">
            <div className="bg-background rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                  <Target className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Our Mission
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to provide reliable and efficient air cargo
                representation services that help airlines grow their cargo
                presence while ensuring smooth operations and long-term
                partnerships.
              </p>
            </div>

            <div className="bg-primary rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-primary-foreground/20 rounded-lg">
                  <Eye className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground">
                  Our Vision
                </h3>
              </div>
              <p className="text-primary-foreground/90 leading-relaxed">
                Our vision is to become a leading air cargo GSA partner in the
                region by building trusted relationships, delivering consistent
                performance, and creating long-term value for our airline
                partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

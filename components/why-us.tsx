import { CheckCircle, Globe, Shield, Zap, Users, Award } from "lucide-react";

const reasons = [
  {
    icon: Globe,
    title: "Extensive Network",
    description:
      "Access to a vast network of airlines and destinations, ensuring optimal routing for your cargo.",
  },
  {
    icon: Shield,
    title: "Reliability & Trust",
    description:
      "Reliable operational support with transparent communication and consistent service standards.",
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    description:
      "Efficient coordination and responsive operations ensuring timely cargo movement and reduced delays.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Seasoned professionals with deep industry knowledge and commitment to excellence.",
  },
  {
    icon: Award,
    title: "Competitive Rates",
    description:
      "Competitive cargo rates supported by strong airline partnerships and efficient capacity management.",
  },
  {
    icon: CheckCircle,
    title: "End-to-End Solutions",
    description:
      "Complete cargo management from booking to delivery with single-point accountability.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
              Why Choose Us
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Your Cargo is our <span className="text-primary">Focus</span>
            </p>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Focus Aviations combines industry expertise, reliable airline
              partnerships, and efficient cargo operations to deliver dependable
              air freight solutions tailored to our clients’ needs.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.slice(0, 4).map((reason, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                      <reason.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {reason.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl" />
            <div className="relative bg-background rounded-2xl p-8 border border-border">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground">
                  Our Commitment
                </h3>
                <p className="mt-2 text-muted-foreground">
                  What sets us apart in the industry
                </p>
              </div>

              <div className="space-y-6">
                {reasons.slice(4).map((reason, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-xl">
                        <reason.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {reason.title}
                      </h4>
                      <p className="mt-1 text-muted-foreground">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className="mt-8 pt-8 border-t border-border">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-xs text-muted-foreground">
                      Airline Partnerships
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-xs text-muted-foreground">
                      Customer Support
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">1000+</div>
                    <div className="text-xs text-muted-foreground">
                      Happy Clients
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

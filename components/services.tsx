import {
  Plane,
  Package,
  FileCheck,
  TrendingUp,
  Clock,
  Headphones,
} from "lucide-react";


const services = [
  {
    icon: Plane,
    title: "Air Cargo Booking",
    description:
      "Efficient cargo booking solutions with access to strategic airline networks and optimized freight capacity.",
  },
  {
    icon: Package,
    title: "Cargo Handling",
    description:
      "Reliable cargo coordination and operational support ensuring smooth shipment movement from origin to destination.",
  },
  {
    icon: FileCheck,
    title: "Documentation & Customs",
    description:
      "End-to-end documentation and customs coordination to ensure compliant and seamless cargo clearance.",
  },
  {
    icon: TrendingUp,
    title: "Sales Representation",
    description:
      "Strategic airline sales representation focused on market growth, revenue optimization, and cargo performance.",
  },
  {
    icon: Clock,
    title: "Express Services",
    description:
      "Time-critical cargo solutions with expedited handling and priority booking for urgent shipments.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Responsive customer support with real-time shipment updates and operational assistance throughout the cargo journey.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
            Our Services
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Comprehensive GSA Solutions
          </p>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Professional air cargo GSA services designed to support airlines,
            freight forwarders, and global cargo operations.{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

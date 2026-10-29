
import {
  MapPin,
  Building2,
  Plane,
  Globe,
  Warehouse,
  Navigation,
} from "lucide-react";

const branches = [
  {
    icon: MapPin,
    title: "Beijing Branch",
    code: "PEK",
    country: "China",
    address: "Full Tower, No. 9 East 3rd Ring Road, Chaoyang District, Beijing",
  },
  {
    icon: MapPin,
    title: "Riyadh Branch",
    code: "RUH",
    country: "Kingdom of Saudi Arabia",
    address: "Olaya Street, King Fahd District, Riyadh, KSA",
  },
  {
    icon: MapPin,
    title: "Dubai Branch",
    code: "DXB",
    country: "United Arab Emirates",
    address: "East Wing, Dubai Airport Free Zone",
  },
  {
    icon: MapPin,
    title: "Frankfurt Branch",
    code: "FRA",
    country: "Germany",
    address: "Rüsselsheimer Str., Kelsterbach, Germany",
  },
  {
    icon: MapPin,
    title: "New York Branch",
    code: "NYC",
    country: "United States",
    address: "1981 Marcus Ave, New Hyde Park, New York, United States",
  },
  {
    icon: MapPin,
    title: "Bucharest (OTP), Romania",
    code: "OTP",
    country: "Romania",
    address: "Calea Bucureștilor nr. 66D, bloc 5",
  },
];

export function Branches() {
  return (
    <section id="branches" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
            Our Global Network
          </h2>

          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Our Branches
          </p>

          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            With a presence across key international markets, we deliver
            reliable air cargo solutions and professional support to our
            partners worldwide.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => (
            <div
              key={branch.code}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                <branch.icon className="h-7 w-7 text-primary" />
              </div>

              {/* Branch Name */}
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-semibold text-foreground">
                  {branch.title}
                </h3>

                <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                  {branch.code}
                </span>
              </div>

              {/* Country */}
              <div className="mb-4 flex items-start gap-2 text-sm font-medium text-primary">
                <Globe className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{branch.country}</span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {branch.address}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

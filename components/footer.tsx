import Link from "next/link";
import { Plane } from "lucide-react";

const navigation = {
  main: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Air Cargo Booking", href: "#services" },
    { name: "Cargo Handling", href: "#services" },
    { name: "Documentation", href: "#services" },
    { name: "Express Services", href: "#services" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#home" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <Plane className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-background">
                Focus{" "}
                <span className="text-primary-foreground/80">Aviations</span>
              </span>
            </Link>
            <p className="mt-4 text-background/70 max-w-md leading-relaxed">
              Focus Aviations delivers professional air cargo GSA services,
              helping airlines expand their cargo presence in the Egyptian
              market through strategic sales, operational support, and reliable
              logistics coordination.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20">
          <p className="text-center text-sm text-background/60">
            &copy; {new Date().getFullYear()} Focus Aviations. All rights
            reserved. | General Sales Agent - Egypt
          </p>
        </div>
      </div>
    </footer>
  );
}

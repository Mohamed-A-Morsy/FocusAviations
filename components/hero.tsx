import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Plane, Globe, Shield } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-3">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Plane className="h-4 w-4" />
              <span>General Sales Agent in Egypt</span>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            Leading{" "}
            <span className="text-primary">Air Cargo GSA </span> Services in Egypt
          </h1>
           
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Focus Aviations delivers professional air cargo GSA services, helping airlines expand their cargo presence in the Egyptian market through strategic sales, operational support, and reliable logistics coordination.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#services">
                 Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Get a Quote</Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">25+</div>
              <div className="text-sm text-muted-foreground">Years of Air Cargo Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3">
                <Plane className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">200+</div>
              <div className="text-sm text-muted-foreground">Destinations Worldwide</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

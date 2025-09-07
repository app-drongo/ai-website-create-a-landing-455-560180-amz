import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  BarChart3, 
  CreditCard,
  Code2,
  Headphones,
  Lock
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Process transactions and account data in real-time with sub-second API response times.",
      badge: "Performance"
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "PCI DSS Level 1 compliant with 256-bit encryption and multi-layer security protocols.",
      badge: "Security"
    },
    {
      icon: CreditCard,
      title: "Multi-Bank Support",
      description: "Connect to 500+ financial institutions across North America and Europe.",
      badge: "Coverage"
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Distributed API endpoints ensure low latency and high availability worldwide.",
      badge: "Infrastructure"
    },
    {
      icon: BarChart3,
      title: "Transaction Analytics",
      description: "Advanced financial data insights with categorization and spending analysis.",
      badge: "Analytics"
    },
    {
      icon: Smartphone,
      title: "Mobile SDK",
      description: "Native iOS and Android SDKs for seamless mobile banking integrations.",
      badge: "Mobile"
    },
    {
      icon: Code2,
      title: "Developer Tools",
      description: "Comprehensive APIs, webhooks, and sandbox environment for rapid development.",
      badge: "Developer"
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Dedicated fintech specialists available 24/7 for integration assistance.",
      badge: "Support"
    },
    {
      icon: Lock,
      title: "Regulatory Compliance",
      description: "Full compliance with PSD2, Open Banking, and regional financial regulations.",
      badge: "Compliance"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Banking API Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Financial Innovation
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Powerful banking integration features designed to help fintech companies build, 
            scale, and innovate with confidence and regulatory compliance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to integrate with banking APIs?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Start Free Trial
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Explore API Docs
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
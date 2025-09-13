import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    title: "No Realtor Commissions",
    description: "Keep 100% of your sale price. No 6% commission fees eating into your profits.",
    icon: "💵",
    highlight: "Save Thousands"
  },
  {
    title: "No Repairs Needed",
    description: "We buy land in any condition. No need to spend money fixing issues.",
    icon: "🔧",
    highlight: "As-Is Purchase"
  },
  {
    title: "Fast Closing",
    description: "Close in 7-14 days, not months. Get your money when you need it.",
    icon: "⚡",
    highlight: "Quick Process"
  },
  {
    title: "All Cash Offers",
    description: "No financing contingencies. Our offers are guaranteed and backed by cash.",
    icon: "🏦",
    highlight: "Guaranteed"
  },
  {
    title: "We Handle Paperwork",
    description: "Our team manages all legal documents and closing procedures for you.",
    icon: "📄",
    highlight: "Hassle-Free"
  },
  {
    title: "Fair Market Value",
    description: "We provide competitive offers based on current market conditions.",
    icon: "📊",
    highlight: "Fair Pricing"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Sell to <span className="text-primary">Cash-4-Property</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Skip the traditional hassles of selling land. We make the process simple, fast, and profitable for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 group">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">{benefit.icon}</div>
                  <Badge variant="secondary" className="bg-success/10 text-success hover:bg-success/20">
                    {benefit.highlight}
                  </Badge>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
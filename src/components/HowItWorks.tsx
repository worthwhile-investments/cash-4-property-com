import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Submit Your Property",
    description: "Fill out our simple form with your land details. It takes just 2 minutes.",
    icon: "📝"
  },
  {
    number: "02", 
    title: "Get Your Cash Offer",
    description: "We'll analyze your property and send you a fair cash offer within 24 hours.",
    icon: "💰"
  },
  {
    number: "03",
    title: "Close Fast",
    description: "Accept our offer and we'll handle all the paperwork. Close in as little as 7 days.",
    icon: "🏆"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Selling your land has never been easier. Our streamlined process gets you cash fast.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={step.number} className="relative border-0 shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6">{step.icon}</div>
                <div className="text-primary font-bold text-lg mb-4">
                  STEP {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                
                {/* Connecting Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-primary text-2xl">
                    →
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
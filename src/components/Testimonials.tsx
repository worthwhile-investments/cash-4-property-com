import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Austin, TX", 
    quote: "I inherited 10 acres from my grandmother and didn't know what to do with it. Cash-4-Property made the process so easy. I got my cash offer in one day and closed in a week!",
    rating: 5
  },
  {
    name: "Mike Rodriguez",
    location: "Phoenix, AZ",
    quote: "Had a vacant lot that was just costing me property taxes. These guys gave me a fair offer with no haggling and handled all the paperwork. Couldn't be happier.",
    rating: 5
  },
  {
    name: "Jennifer Chen",
    location: "Denver, CO", 
    quote: "After trying to sell through a realtor for 8 months with no luck, I found Cash-4-Property. They closed in 10 days and I didn't pay any commissions. Amazing service!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real property owners say about their experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8">
                {/* Star Rating */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold text-xl">★</span>
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <div className="border-t pt-6">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>4.9/5 Customer Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              <span>500+ Properties Purchased</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
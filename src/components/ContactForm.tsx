import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Form Submitted Successfully!",
      description: "We'll contact you within 24 hours with your cash offer.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-trust/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get Your <span className="text-primary">Cash Offer</span> Today
          </h2>
          <p className="text-xl text-muted-foreground">
            Fill out the form below and we'll send you a no-obligation cash offer within 24 hours.
          </p>
        </div>

        <Card className="shadow-elegant border-0">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl text-foreground">Property Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" required className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" required className="h-12" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" required className="h-12" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Property Address *</Label>
                <Input id="address" required className="h-12" placeholder="Street, City, State, ZIP" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="size">Property Size (acres)</Label>
                  <Input id="size" className="h-12" placeholder="e.g., 2.5 acres" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Desired Price</Label>
                  <Input id="price" className="h-12" placeholder="e.g., $50,000" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Property Description</Label>
                <Textarea 
                  id="description" 
                  className="min-h-[100px]" 
                  placeholder="Tell us about your property - terrain, access, utilities, etc." 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline">When do you need to sell?</Label>
                <Input id="timeline" className="h-12" placeholder="e.g., ASAP, within 3 months" />
              </div>

              <Button 
                type="submit" 
                variant="cta" 
                size="lg" 
                className="w-full h-14 text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get My Cash Offer Now"}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you agree to be contacted by Cash-4-Property regarding your property. 
                No spam, and you can opt out at any time.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
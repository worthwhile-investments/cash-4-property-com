import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-land.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Turn Your Land Into 
          <span className="bg-gradient-to-r from-gold to-accent bg-clip-text text-transparent"> Cash</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          We buy land directly from property owners. Fast, fair, and hassle-free transactions with cash offers in 24 hours.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Get Your Cash Offer
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
            Learn How It Works
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-gold mb-2">24 Hours</div>
            <div className="text-gray-200">Fast Cash Offers</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-gold mb-2">No Fees</div>
            <div className="text-gray-200">Zero Hidden Costs</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-gold mb-2">Any Condition</div>
            <div className="text-gray-200">We Buy As-Is</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
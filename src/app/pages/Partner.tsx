import { useState } from "react";

export function Partner() {
  const [formType, setFormType] = useState<"seller" | "destination">("seller");

  return (
    <div className="bg-cream pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-12">
          <p className="text-gold text-[9px] uppercase tracking-[5px] mb-3">Partner With Us</p>
          <h1 className="font-playfair text-5xl text-dark mb-6">Begin the <em className="text-rose">Collaboration</em></h1>
          
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={() => setFormType("seller")}
              className={`px-8 py-2 text-[10px] uppercase tracking-[3px] transition-all ${formType === "seller" ? "bg-dark text-cream" : "bg-linen text-dark"}`}
            >
              Seller Onboarding
            </button>
            <button 
              onClick={() => setFormType("destination")}
              className={`px-8 py-2 text-[10px] uppercase tracking-[3px] transition-all ${formType === "destination" ? "bg-dark text-cream" : "bg-linen text-dark"}`}
            >
              Destination Registration
            </button>
          </div>
        </div>

        <form className="bg-linen p-12 space-y-6 shadow-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[2px] text-gold">Business Name</label>
              <input type="text" className="w-full bg-cream border border-rose/10 p-3 text-sm outline-none focus:border-rose transition-colors" placeholder="Legal Entity Name" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[2px] text-gold">Contact Person</label>
              <input type="text" className="w-full bg-cream border border-rose/10 p-3 text-sm outline-none focus:border-rose transition-colors" placeholder="Full Name" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[2px] text-gold">Email Address</label>
            <input type="email" className="w-full bg-cream border border-rose/10 p-3 text-sm outline-none focus:border-rose transition-colors" placeholder="contact@business.com" />
          </div>

          {formType === "destination" && (
            <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-dark/5">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[2px] text-gold">Destination Type</label>
                <select className="w-full bg-cream border border-rose/10 p-3 text-sm outline-none focus:border-rose appearance-none">
                  <option>Select Category</option>
                  <option>Salon</option>
                  <option>Spa</option>
                  <option>Yoga Studio</option>
                  <option>Massage Therapy</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[2px] text-gold">Location</label>
                <input type="text" className="w-full bg-cream border border-rose/10 p-3 text-sm outline-none focus:border-rose transition-colors" placeholder="City, State" />
              </div>
            </div>
          )}

          <div className="pt-8">
            <button type="submit" className="w-full bg-dark text-cream py-4 text-[10px] uppercase tracking-[4px] hover:bg-terra transition-colors">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
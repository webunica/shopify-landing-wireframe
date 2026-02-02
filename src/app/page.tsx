import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { FeatureDrop, LogoGrid } from "@/components/FeatureDrop";
import { Features } from "@/components/Features";
import { Integrations, TealCTA } from "@/components/Sections";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeatureDrop />
      <LogoGrid />
      <Features />
      <Integrations />
      <TealCTA />

      {/* Testimonial Section Inline */}
      <section className="py-24 bg-white text-center">
        <div className="container-custom">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-10">Trusted by Experts</div>

          <div className="bg-beige rounded-[2rem] p-10 lg:p-20 max-w-4xl mx-auto shadow-sm">
            <span className="font-bold text-sm uppercase tracking-wider mb-6 block text-gray-500">Key Strategy</span>
            <h3 className="text-2xl lg:text-4xl font-serif italic leading-relaxed text-bg-dark font-medium mb-10">
              "The one tool I recommend to all my ecommerce clients is Omnisend. It just works, generates money, and requires zero maintenance."
            </h3>
            <div className="font-bold text-lg">Digital Agency CEO</div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

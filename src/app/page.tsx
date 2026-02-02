import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { FeatureDrop, LogoGrid } from "@/components/FeatureDrop";
import { Features } from "@/components/Features";
import { Integrations, TealCTA } from "@/components/Sections";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

// Fetch data from Sanity directly in the Server Component
async function getData() {
  // Use try-catch to handle build errors if Sanity is not yet configured with credentials
  try {
    return await client.fetch(groq`{
      "hero": *[_type == "hero"][0],
      "features": *[_type == "feature"] | order(_createdAt asc),
      "logoGrid": *[_type == "logoGrid"][0]
    }`, {}, { cache: 'no-store' }); // Disable cache for dev
  } catch (error) {
    console.warn("Sanity fetch failed (likely missing credentials). Using fallback data.");
    return { hero: null, features: [], logoGrid: null };
  }
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero data={data.hero} />
      <FeatureDrop />
      <LogoGrid />

      {/* If we have features from CMS, show them. Otherwise fallback to hardcoded (optional, but here we just pass empty array if none) */}
      <Features data={data.features || []} />

      {/* If no features form CMS, we might want to show hardcoded ones for visual test if user hasn't added content yet? 
          For now, I'll assume user will use CMS. If array is empty, Features returns null.
      */}

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

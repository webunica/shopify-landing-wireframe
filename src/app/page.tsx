import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { LogoGrid } from "@/components/FeatureDrop";
import { Features } from "@/components/Features";
import { Portfolio, LiquidSection } from "@/components/Portfolio";
import { Process, Testimonials } from "@/components/Process";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Integrations } from "@/components/Sections"; // Keeping Integrations for the B2B part if needed later, but standard layout first

// Fetch data from Sanity directly in the Server Component
async function getData() {
  try {
    return await client.fetch(groq`{
      "hero": *[_type == "hero"][0],
      "features": *[_type == "feature"] | order(_createdAt asc),
      "logoGrid": *[_type == "logoGrid"][0]
    }`, {}, { cache: 'no-store' }); // Disable cache for dev
  } catch (error) {
    console.warn("Using fallback data for Agency content.");
    return { hero: null, features: [], logoGrid: null };
  }
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="min-h-screen font-sans">
      <Navbar />

      {/* 1. Hero: Propuesta de Valor Agencia */}
      <Hero data={data.hero} />

      {/* 2. Logos: Ecosistema Local (Webpay, Starken) */}
      <LogoGrid />

      {/* 3. Features: ¿Por qué elegirnos? */}
      {/* Pasar array vacío fuerza el uso de los features por defecto en español (Payments, UX) que definimos en el componente */}
      <Features data={data.features} />

      {/* 4. Portfolio: Diseños que Venden */}
      <Portfolio />

      {/* 5. Tech: Código Liquid & Personalización */}
      <LiquidSection />

      {/* 6. Process: Método de 3 Pasos */}
      <Process />

      {/* 7. Social Proof: Testimonios */}
      <Testimonials />

      {/* 8. Footer */}
      <Footer />
    </main>
  );
}

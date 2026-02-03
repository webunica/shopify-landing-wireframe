import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Hero from "@/components/Hero";
import { Features } from "@/components/Features";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { LogoGrid } from "@/components/FeatureDrop";
import { notFound } from "next/navigation";

import exampleData from "../../../example_ferreteria.json";
import exampleModa from "../../../example_moda.json";
import exampleFarmacia from "../../../example_farmacia.json";

// Force dynamic rendering to ensure new CMS content is fetched
export const dynamic = 'force-dynamic';

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

async function getLandingData(slug: string) {
    try {
        const data = await client.fetch(groq`
        *[_type == "landingPage" && slug.current == $slug][0] {
          meta,
          content
        }
      `, { slug }, { cache: 'no-store' });

        if (data) return data;
    } catch (e) {
        console.warn("Sanity fetch failed, checking local fallback...");
    }

    // Fallback for local testing (demo purpose)
    if (slug === exampleData.slug) {
        return exampleData;
    }
    if (slug === exampleModa.slug) {
        return exampleModa;
    }
    if (slug === exampleFarmacia.slug) {
        return exampleFarmacia;
    }

    return null;
}

export async function generateMetadata(props: Props) {
    const params = await props.params;
    const data = await getLandingData(params.slug);
    if (!data) return {};

    return {
        title: data.meta?.title || 'Webunica Landing',
        description: data.meta?.description || '',
    };
}

export default async function LandingPage(props: Props) {
    const params = await props.params;
    const data = await getLandingData(params.slug);

    if (!data) {
        notFound();
    }

    const { content } = data;

    // Map "Solucion Nicho" to Features format
    const featuresData = content.solucion_nicho?.puntos_clave?.map((pto: any, i: number) => ({
        _id: `feature-${i}`,
        title: pto.label,
        description: pto.desc,
        // Alternate badge or icon based on index or logic if needed
        badge: i === 0 ? "Especialidad" : (i === 1 ? "Técnico" : "Estrategia"),
        reversed: i % 2 !== 0,
        image: null // We might not have images in the JSON prompt, Features component handles null image
    })) || [];

    // Map "Integraciones" to a simple text block or LiquidSection style? 
    // For now, let's create a custom 'IntegrationsBlock' inline or reuse a component.
    // The prompt separates 'pagos' and 'logistica'.

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* 1. Hero */}
            <Hero data={{
                title: content.hero?.h1,
                subtitle: content.hero?.p,
                images: [] // Use default hero images if none specific
            }} />

            {/* 2. LogoGrid (Constant for credibility) */}
            <LogoGrid />

            {/* 3. Solucion Nicho (Features) */}
            {content.solucion_nicho && (
                <div className="bg-bg-card">
                    <div className="container-custom pt-24 text-center">
                        <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6 pt-12">
                            {content.solucion_nicho.titulo}
                        </h2>
                    </div>
                    <Features data={featuresData} />
                </div>
            )}

            {/* 4. Integraciones (Custom Block) */}
            {content.integraciones && (
                <section className="py-24 bg-soft-green">
                    <div className="container-custom">
                        <h2 className="text-3xl font-heading font-bold text-bg-dark mb-12 text-center">Integraciones Locales</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm">
                                <h3 className="text-xl font-bold mb-4 text-teal-800">Pasarelas de Pago</h3>
                                <p className="text-gray-600 leading-relaxed">{content.integraciones.pagos}</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm">
                                <h3 className="text-xl font-bold mb-4 text-teal-800">Logística y Envíos</h3>
                                <p className="text-gray-600 leading-relaxed">{content.integraciones.logistica}</p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* 5. FAQS */}
            {content.faqs && <FAQ items={content.faqs} />}

            {/* 6. CTA Final (Using params from content) */}
            <section className="py-20 bg-bg-dark text-center border-t border-white/5">
                <div className="container-custom">
                    <h2 className="text-4xl font-heading font-bold text-white mb-8">
                        ¿Listo para empezar?
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <a href="#contact" className="bg-primary-green text-bg-dark px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                            {content.cta?.primary || "Cotizar Ahora"}
                        </a>
                        <a href="https://wa.me/569xxxxxxx" target="_blank" className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-colors">
                            {content.cta?.secondary || "WhatsApp"}
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

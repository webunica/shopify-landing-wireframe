import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { CreditCard, Truck } from "lucide-react";
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
                <section className="py-24 bg-bg-dark relative overflow-hidden">
                    {/* Background Glows */}
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-green/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="container-custom relative z-10">
                        <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-16 text-center">
                            Integraciones Locales <span className="text-primary-green">.</span>
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Pagos Card */}
                            <div className="group bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-green/20">
                                <div className="w-16 h-16 rounded-2xl bg-primary-green/20 flex items-center justify-center text-primary-green mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <CreditCard size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary-green transition-colors">Pasarelas de Pago</h3>
                                <p className="text-gray-400 leading-relaxed text-lg">{content.integraciones.pagos}</p>
                            </div>

                            {/* Logistica Card */}
                            <div className="group bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
                                <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <Truck size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">Logística y Envíos</h3>
                                <p className="text-gray-400 leading-relaxed text-lg">{content.integraciones.logistica}</p>
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

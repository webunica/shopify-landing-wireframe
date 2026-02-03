import { Zap, Truck, FileText, Smartphone, Palette, Globe } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

interface Feature {
    _id: string;
    title: string;
    description: string;
    badge?: string;
    reversed?: boolean;
    ctaText?: string;
    image?: any;
}

interface FeaturesProps {
    data: Feature[];
}

function FeatureItem({ feature }: { feature: Feature }) {
    const imageUrl = feature.image ? urlFor(feature.image).url() : null;

    return (
        <div className={`flex flex-col lg:flex-row items-center gap-16 py-24 ${feature.reversed ? "lg:flex-row-reverse" : ""}`}>
            {/* Content */}
            <div className="flex-1 space-y-6">
                {feature.badge && (
                    <div className="flex items-center gap-2 text-primary-green font-bold text-sm tracking-widest uppercase">
                        <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse" /> <span>{feature.badge}</span>
                    </div>
                )}
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-bg-dark leading-tight">
                    {feature.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                </p>
            </div>

            {/* Visual */}
            <div className="flex-1 w-full relative group">
                <div className="bg-gray-50 rounded-3xl aspect-square lg:aspect-[4/3] flex items-center justify-center p-8 overflow-hidden relative shadow-sm border border-black/5">
                    {/* Decor */}
                    <div className={`absolute w-1/2 h-1/2 ${feature.reversed ? 'bg-teal-500/10' : 'bg-primary-green/10'} rounded-full blur-3xl`} />

                    {/* Image or Icon Placeholder */}
                    {imageUrl ? (
                        <img src={imageUrl} alt={feature.title} className="relative z-10 w-full rounded-xl shadow-lg transform group-hover:scale-[1.02] transition duration-500" />
                    ) : (
                        <div className="bg-white/80 p-8 rounded-2xl shadow-sm text-center">
                            {/* Fallback Icon based on title logic could go here, but for now generic */}
                            <span className="text-4xl">⚡</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export function Features({ data }: FeaturesProps) {
    // DEFAULT HARDCODED CONTENT (Why Choose Us)
    // This will be used if CMS returns empty array, effectively overriding the previous placeholders if CMS is empty.
    const defaultFeatures: Feature[] = [
        {
            _id: "f1",
            title: "Vende en Pesos Chilenos",
            description: "Pasarelas locales listas (Webpay Plus, Fintoc, MercadoPago) para que el dinero llegue directo a tu cuenta bancaria en Chile sin complicaciones.",
            badge: "Pasarelas de Pago",
            reversed: false,
            image: null // Components handles null image cleanly
        },
        {
            _id: "f2",
            title: "Envíos Automáticos",
            description: "Conecta tu tienda con Starken, Chilexpress o BlueExpress. Olvida las planillas Excel y genera etiquetas de envío automáticas.",
            badge: "Logística Inteligente",
            reversed: true,
            image: null
        },
        {
            _id: "f3",
            title: "Diseño UX/UI que Convierte",
            description: "No usamos plantillas básicas genéricas. Adaptamos la experiencia visual para generar confianza y reflejar la identidad de tu marca.",
            badge: "Diseño Premium",
            reversed: false,
            image: null
        }
    ];

    const featuresToRender = (data && data.length > 0) ? data : defaultFeatures;

    return (
        <section className="container-custom py-12" id="why-us">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">¿Por qué elegirnos?</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">Entendemos el mercado chileno. No te entregamos solo una web, te entregamos un canal de ventas operativo.</p>
            </div>

            {featuresToRender.map((feature, index) => (
                <FeatureItem key={feature._id} feature={feature} />
            ))}
        </section>
    );
}

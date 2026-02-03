import { Zap, Truck, FileText, Smartphone, Palette, Globe, CreditCard } from "lucide-react";
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
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 py-16 ${feature.reversed ? "lg:flex-row-reverse" : ""}`}>
            {/* Content */}
            <div className="flex-1 space-y-6">
                {feature.badge && (
                    <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-green/20 text-primary-green">
                            <Zap size={16} fill="currentColor" />
                        </span>
                        <span className="text-primary-green font-bold text-sm tracking-widest uppercase">{feature.badge}</span>
                    </div>
                )}
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white leading-tight">
                    {feature.title}
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                    {feature.description}
                </p>
            </div>

            {/* Visual */}
            <div className="flex-1 w-full relative group">
                <div className="relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">

                    {/* Decorative Glow Behind */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 ${feature.reversed ? 'bg-teal-500/20' : 'bg-primary-green/20'} rounded-full blur-[80px] -z-10 transition-opacity duration-700 group-hover:opacity-100 opacity-60`} />

                    {/* Image or Icon Placeholder */}
                    {imageUrl ? (
                        <img src={imageUrl} alt={feature.title} className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-gray-600 gap-4 p-8 relative z-10">
                            {/* Dynamic Icon based on content context purely for visual flair if no image */}
                            {feature.title.includes("Pesos") && <CreditCard size={64} className="text-white/20" />}
                            {feature.title.includes("Envíos") && <Truck size={64} className="text-white/20" />}
                            {feature.title.includes("Diseño") && <Palette size={64} className="text-white/20" />}

                            <p className="text-sm font-mono text-gray-500 bg-black/40 px-3 py-1 rounded border border-white/5">
                                Visual Preview: {feature.title}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export function Features({ data }: FeaturesProps) {
    const defaultFeatures: Feature[] = [
        {
            _id: "f1",
            title: "Vende en Pesos Chilenos",
            description: "Pasarelas locales listas (Webpay Plus, Fintoc, MercadoPago) para que el dinero llegue directo a tu cuenta bancaria en Chile sin complicaciones.",
            badge: "Pagos Locales",
            reversed: false,
            image: null
        },
        {
            _id: "f2",
            title: "Envíos Automáticos",
            description: "Conecta tu tienda con Starken, Chilexpress o BlueExpress. Olvida las planillas Excel y genera etiquetas de envío automáticas.",
            badge: "Logística",
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
        <section className="bg-bg-card py-24 relative overflow-hidden" id="features">
            {/* Background noise/grid */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6">¿Por qué elegirnos?</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Entendemos el mercado chileno. No te entregamos solo una web,<br className="hidden md:block" /> te entregamos una máquina de ventas operativa.
                    </p>
                </div>

                <div className="space-y-12 lg:space-y-0">
                    {featuresToRender.map((feature, index) => (
                        <FeatureItem key={feature._id} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}

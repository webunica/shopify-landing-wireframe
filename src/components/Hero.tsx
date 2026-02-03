"use client";

import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";
import { CheckCircle, ArrowRight } from "lucide-react";

interface HeroProps {
    data: {
        title?: string;
        subtitle?: string;
        image?: any;
    } | null;
}

export default function Hero({ data }: HeroProps) {
    // Fallback con el contenido Real de Shopify Partners Chile
    const title = data?.title || "Desarrollo y Diseño de Tiendas Shopify en Chile";
    const subtitle = data?.subtitle || "Llevamos tu negocio al siguiente nivel con un E-commerce diseñado para vender. Resultados medibles y tiendas optimizadas.";
    const imageUrl = data?.image ? urlFor(data.image).url() : "/shopify-dashboard.png";

    return (
        <section className="bg-bg-dark text-white pt-24 pb-32 overflow-hidden relative">
            <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary-green/10 text-primary-green font-bold text-xs tracking-widest uppercase mb-6 border border-primary-green/20">
                        Shopify Partners Oficial
                    </span>

                    <h1 className="text-5xl lg:text-6xl font-heading font-extrabold leading-[1.1] tracking-tight mb-6 text-balance">
                        {title}
                    </h1>

                    <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
                        {subtitle}
                    </p>

                    <ul className="mb-10 space-y-3">
                        {[
                            "Integración Transbank & MercadoPago",
                            "Autoadministrable 100%",
                            "Personalización de Diseño Única"
                        ].map((item) => (
                            <li key={item} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                                <CheckCircle className="text-primary-green w-5 h-5 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-4 items-center">
                        <a
                            href="#contact"
                            className="bg-primary-green text-bg-dark px-8 py-4 rounded-full font-bold text-base hover:shadow-[0_0_30px_rgba(163,230,53,0.4)] transition-all hover:-translate-y-1 flex items-center gap-2"
                        >
                            Cotizar mi Tienda (Gratis) <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="#portfolio"
                            className="px-8 py-4 rounded-full font-bold text-base border border-white/20 hover:bg-white/5 transition-colors"
                        >
                            Ver Tiendas Realizadas
                        </a>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Abstract blobs background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-green/20 blur-[100px] rounded-full -z-10" />

                    <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-bg-card">
                        <div className="absolute top-0 left-0 w-full h-8 bg-black/50 flex items-center px-4 gap-2 border-b border-white/5">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <img
                            src={imageUrl}
                            alt="Shopify Dashboard"
                            className="w-full h-auto mt-8 opacity-90 hover:scale-105 transition-transform duration-700 block bg-bg-dark"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

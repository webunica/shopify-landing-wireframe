"use client";

import { motion, AnimatePresence } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

interface HeroProps {
    data: {
        title?: string;
        subtitle?: string;
        images?: any[]; // Updated to Array
        image?: any; // Fallback for legacy single image
    } | null;
}

export default function Hero({ data }: HeroProps) {
    const title = data?.title || "Desarrollo y Diseño de Tiendas Shopify en Chile";
    const subtitle = data?.subtitle || "Llevamos tu negocio al siguiente nivel con un E-commerce diseñado para vender. Resultados medibles y tiendas optimizadas.";

    // Logic to build the image array:
    // 1. CMS Array
    // 2. CMS Single Image (wrapped in array)
    // 3. Hardcoded defaults
    let slides: string[] = [];

    if (data?.images && data.images.length > 0) {
        slides = data.images.map((img: any) => urlFor(img).url());
    } else if (data?.image) {
        slides = [urlFor(data.image).url()];
    } else {
        // Default placeholders if CMS is empty
        slides = [
            "/shopify-dashboard.png", // Ensure this exists or use a remote URL
            "https://cdn.shopify.com/s/files/1/0070/7032/files/shopify-plus_1.jpg?v=1613768393", // Example generic shopify wallpaper
            "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800"
        ];
    }

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play Effect
    useEffect(() => {
        if (slides.length <= 1) return; // Don't cycle if only 1 image

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 4000); // Change every 4 seconds

        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="bg-bg-dark text-white pt-24 pb-32 overflow-hidden relative">
            <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-20"
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

                {/* Carousel Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative lg:h-[600px] flex items-center"
                >
                    {/* Abstract blobs background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-green/20 blur-[100px] rounded-full -z-10" />

                    <div className="relative z-10 w-full aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-bg-card">
                        {/* Browser Header */}
                        <div className="absolute top-0 left-0 w-full h-8 bg-black/80 backdrop-blur z-20 flex items-center px-4 gap-2 border-b border-white/5">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>

                        {/* Carousel Images */}
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentIndex}
                                src={slides[currentIndex]}
                                alt="Shopify Store Preview"
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className="w-full h-full object-cover bg-bg-dark absolute inset-0"
                            />
                        </AnimatePresence>

                        {/* Carousel Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-primary-green w-6' : 'bg-white/30 hover:bg-white'}`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

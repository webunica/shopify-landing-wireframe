"use client";

import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";

interface HeroProps {
    data: {
        title?: string;
        subtitle?: string;
        image?: any;
    } | null;
}

export default function Hero({ data }: HeroProps) {
    // Fallback content if no data in CMS
    const title = data?.title || "Email & SMS marketing so good, it's boring.";
    const subtitle = data?.subtitle || "Drive sales on autopilot with the ecommerce marketing platform designed for nimble teams.";
    const imageUrl = data?.image ? urlFor(data.image).url() : "/shopify-dashboard.png";

    return (
        <section className="bg-bg-dark text-white pt-20 pb-32 overflow-hidden relative">
            <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* We render title as HTML to allow line breaks if passed from plain text, or just simple text */}
                    <h1 className="text-5xl lg:text-7xl font-heading font-extrabold leading-[1.1] tracking-tight mb-8 text-balance">
                        {title}
                    </h1>

                    <p className="text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
                        {subtitle}
                    </p>

                    <div className="flex flex-wrap gap-4 items-center">
                        <a
                            href="#"
                            className="bg-primary-green text-bg-dark px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(163,230,53,0.4)] transition-all hover:-translate-y-1"
                        >
                            Start for free
                        </a>
                        <a
                            href="#"
                            className="px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/5 transition-colors"
                        >
                            Get a demo
                        </a>
                    </div>

                    <p className="mt-6 text-sm text-gray-400 font-medium">
                        No credit card required &bull; 24/7 Support
                    </p>
                </motion.div>

                {/* Visual Content - Circular Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative lg:ml-auto"
                >
                    {/* Abstract blobs background */}
                    <div className="absolute inset-0 bg-primary-green/20 blur-[100px] rounded-full scale-110 -z-10" />

                    <div className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden bg-teal-800 border-[8px] border-white/5 relative z-10 shadow-2xl">
                        <img
                            src={imageUrl}
                            alt="Hero Visual"
                            className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

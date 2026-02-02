"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-bg-dark text-white pt-20 pb-32 overflow-hidden relative">
            <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8">
                        Email & SMS<br />
                        marketing so good,<br />
                        <span className="text-primary-green">it's boring.</span>
                    </h1>

                    <p className="text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
                        Drive sales on autopilot with the ecommerce marketing platform designed for nimble teams.
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
                        {/* Using Next.Image with a placeholder or local asset */}
                        <img
                            src="/shopify-dashboard.png"
                            alt="Dashboard Preview"
                            className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Floating Badge (Feature Drop) */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
            >
                {/* This will be handled by the FeatureDrop component below, just a placeholder anchor */}
            </motion.div>
        </section>
    );
}

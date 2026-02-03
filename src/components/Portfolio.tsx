"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
    { name: "Moda Urbana", tag: "Fashion", gradient: "from-pink-500 to-rose-500" },
    { name: "Tecnología Premium", tag: "Electronics", gradient: "from-blue-500 to-cyan-500" },
    { name: "Estilo de Vida", tag: "Lifestyle", gradient: "from-amber-500 to-orange-500" },
    { name: "Decoración Minimalista", tag: "Home Decor", gradient: "from-emerald-500 to-green-500" },
    { name: "Cuidado Personal", tag: "Beauty", gradient: "from-purple-500 to-violet-500" },
    { name: "Accesorios & Joyas", tag: "Accessories", gradient: "from-indigo-500 to-blue-500" },
    { name: "Deportes Extremos", tag: "Sports", gradient: "from-red-500 to-orange-500" },
    { name: "Gourmet & Food", tag: "Food", gradient: "from-yellow-500 to-amber-500" },
];

export function Portfolio() {
    return (
        <section className="py-32 bg-bg-dark relative" id="portfolio">
            {/* Decorative gradient blur top */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-bg-card to-bg-dark pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/5 pb-12">
                    <div>
                        <span className="text-primary-green font-bold tracking-wider text-sm uppercase mb-3 block">Portafolio</span>
                        <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white leading-tight">
                            Diseños que <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-teal-400">Venden</span>
                        </h2>
                    </div>
                    <button className="flex items-center gap-2 text-white bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full font-bold transition-all group border border-white/10">
                        Ver todos los proyectos <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-bg-card border border-white/5 hover:border-white/20 transition-colors cursor-pointer"
                        >
                            {/* Fake UI Header inside Card */}
                            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 rounded-full bg-white/20" />
                                    <div className="w-2 h-2 rounded-full bg-white/20" />
                                </div>
                                <div className="px-2 py-1 rounded bg-black/50 backdrop-blur text-[10px] text-gray-400 font-mono border border-white/5">
                                    store.com
                                </div>
                            </div>

                            {/* Abstract Gradient Background representing the "Site" */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

                            {/* Content at bottom */}
                            <div className="absolute bottom-0 left-0 w-full p-6 z-20 bg-gradient-to-t from-black via-black/80 to-transparent">
                                <p className="text-xs font-bold text-primary-green uppercase mb-1 tracking-wider">{cat.tag}</p>
                                <h3 className="text-xl font-bold text-white group-hover:text-primary-green transition-colors">{cat.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function LiquidSection() {
    return (
        <section className="bg-black text-white py-32 overflow-hidden relative border-t border-white/5">
            <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">
                <div className="relative z-10 order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-green text-sm font-bold mb-8">
                        <span className="animate-pulse">⚡</span> Expertise Técnico
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-heading font-bold mb-8 leading-tight">
                        Más allá de las<br />
                        plantillas. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-emerald-400">Personalización total.</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
                        No nos limitamos a lo que ofrece el tema por defecto. Escribimos código Liquid, HTML, CSS y JS personalizado para crear funcionalidades únicas.
                    </p>

                    <div className="space-y-8">
                        {[
                            { title: "Secciones Exclusivas", desc: "Creamos bloques modulares que se adaptan 100% a tu identidad." },
                            { title: "Optimización de Velocidad", desc: "Puntuaciones 90+ en Google PageSpeed Insights." },
                            { title: "Partnership B2B", desc: "Tu equipo técnico White-Label invisible." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5 group">
                                <div className="w-1 bg-white/10 group-hover:bg-primary-green h-auto rounded-full transition-colors duration-300" />
                                <div>
                                    <h4 className="font-bold text-white text-xl mb-1 group-hover:text-primary-green transition-colors">{item.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Code Visual */}
                <div className="relative order-1 lg:order-2">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary-green/20 to-blue-500/20 rounded-[2rem] blur-2xl -z-10" />

                    <div className="font-mono text-sm bg-bg-card rounded-2xl p-8 shadow-2xl border border-white/10 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                        <div className="flex gap-2 mb-6 border-b border-white/5 pb-4">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                            <span className="ml-auto text-xs text-slate-500">sections/product-template.liquid</span>
                        </div>

                        <div className="space-y-1.5 text-slate-300 leading-relaxed">
                            <p><span className="text-purple-400">if</span> (product.metafields.custom.is_preorder) <span className="text-purple-400">{`{`}</span></p>
                            <p className="pl-4"><span className="text-blue-400">render</span> 'preorder-badge',</p>
                            <p className="pl-8"><span className="text-sky-300">date</span>: product.variants.first.incoming_date</p>
                            <p><span className="text-purple-400">{`}`}</span></p>

                            <p className="py-2 text-slate-600 italic">// Custom Add to Cart logic</p>

                            <p><span className="text-purple-400">form</span> 'product', product <span className="text-purple-400">{`{`}</span></p>
                            <p className="pl-4"><span className="text-yellow-300">.custom-cart-btn</span> <span className="text-purple-400">{`{`}</span></p>
                            <p className="pl-8"><span className="text-blue-300">background</span>: var(--brand-color);</p>
                            <p className="pl-8"><span className="text-blue-300">transform</span>: scale(1.05);</p>
                            <p className="pl-8"><span className="text-blue-300">animation</span>: pulse 2s infinite;</p>
                            <p className="pl-4"><span className="text-purple-400">{`}`}</span></p>
                            <p><span className="text-purple-400">{`}`}</span></p>
                        </div>

                        {/* Floating Tag */}
                        <div className="absolute bottom-6 right-6 bg-primary-green/90 backdrop-blur text-bg-dark font-extrabold px-4 py-2 text-xs rounded-lg shadow-lg rotate-[-2deg] border border-white/20">
                            100% LIQUID CODE
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

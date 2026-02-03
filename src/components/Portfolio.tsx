"use client";

import { motion } from "framer-motion";

const categories = [
    { name: "Moda Urbana", tag: "Fashion" },
    { name: "Tecnología Premium", tag: "Electronics" },
    { name: "Estilo de Vida", tag: "Lifestyle" },
    { name: "Decoración Minimalista", tag: "Home Decor" },
    { name: "Cuidado Personal", tag: "Beauty" },
    { name: "Accesorios & Joyas", tag: "Accessories" },
    { name: "Deportes Extremos", tag: "Sports" },
    { name: "Gourmet & Food", tag: "Food" },
];

export function Portfolio() {
    return (
        <section className="py-24 bg-gray-50" id="portfolio">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-primary-green font-bold tracking-wider text-sm uppercase mb-2 block">Diseños que Venden</span>
                        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-bg-dark">
                            Explora nuestros<br />diseños
                        </h2>
                    </div>
                    <button className="text-bg-dark border-b-2 border-primary-green pb-1 font-bold text-lg hover:text-primary-green transition">
                        Ver todo el portafolio &rarr;
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-200 cursor-pointer"
                        >
                            {/* Placeholder Content for Image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />

                            {/* Fake Image Background */}
                            <div className="absolute inset-0 bg-gray-300 group-hover:scale-110 transition-transform duration-700" />

                            <div className="absolute bottom-0 left-0 p-6 z-20 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                                <p className="text-xs font-bold text-primary-green uppercase mb-1">{cat.tag}</p>
                                <h3 className="text-xl font-bold leading-tight">{cat.name}</h3>
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
        <section className="bg-black text-white py-24 overflow-hidden relative">
            <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-primary-green text-sm font-bold mb-6">
                        <span className="animate-pulse">⚡</span> Código Liquid a Medida
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
                        Más allá de las<br />
                        plantillas. <span className="text-primary-green">Personalización total.</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        No nos limitamos a lo que ofrece el tema por defecto. Escribimos código Liquid, HTML, CSS y JS personalizado para crear funcionalidades únicas que tu competencia no tiene.
                    </p>

                    <div className="space-y-6">
                        {[
                            { title: "Secciones Exclusivas", desc: "Creamos bloques modulares que se adaptan 100% a tu identidad." },
                            { title: "Optimización de Velocidad", desc: "Limpiamos código innecesario para lograr puntuaciones 90+ en Google." },
                            { title: "Partnership B2B", desc: "¿Eres agencia? Trabajamos como tu equipo técnico White-Label." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="w-1 bg-primary-green h-auto rounded-full" />
                                <div>
                                    <h4 className="font-bold text-white text-lg">{item.title}</h4>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Code Visual */}
                <div className="relative font-mono text-sm bg-[#1e1e1e] rounded-xl p-6 shadow-2xl border border-white/10 rotate-1 lg:rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="flex gap-2 mb-4 border-b border-white/5 pb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="ml-auto text-xs text-gray-500">product-template.liquid</span>
                    </div>

                    <div className="space-y-1 text-gray-300">
                        <p><span className="text-purple-400">if</span> (product.available) <span className="text-purple-400">{`{`}</span></p>
                        <p className="pl-4"><span className="text-blue-400">return</span> (</p>
                        <p className="pl-8 text-green-300">{`<div className="custom-cart-btn">`}</p>
                        <p className="pl-12">Añadir al Carrito ✨</p>
                        <p className="pl-8 text-green-300">{`</div>`}</p>
                        <p className="pl-4">)</p>
                        <p><span className="text-purple-400">{`}`}</span></p>
                        <br />
                        <p className="text-gray-500">// Estilos personalizados</p>
                        <p><span className="text-yellow-300">.custom-btn</span> <span className="text-purple-400">{`{`}</span></p>
                        <p className="pl-4"><span className="text-blue-300">background</span>: #6366f1;</p>
                        <p className="pl-4"><span className="text-blue-300">box-shadow</span>: 0 4px 12px rgba(0,0,0,0.1);</p>
                        <p><span className="text-purple-400">{`}`}</span></p>
                    </div>

                    <div className="absolute top-10 right-10 bg-primary-green text-bg-dark font-bold px-3 py-1 text-xs rounded shadow-lg transform rotate-12">
                        100% Custom
                    </div>
                </div>
            </div>
        </section>
    );
}

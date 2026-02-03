"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useRef } from "react";

const projects = [
    { name: "Kine Lawen", category: "Salud", url: "https://www.kinelawen.com/", gradient: "from-cyan-500 to-blue-500" },
    { name: "TerraAndes Plus", category: "Export", url: "https://terraandesplus.com/", gradient: "from-amber-700 to-orange-500" },
    { name: "AntarctiCare", category: "Cosmética", url: "https://antarcticare.cl/", gradient: "from-blue-100 to-indigo-300" },
    { name: "SpinMedical", category: "Equipamiento", url: "https://spinmedical.cl/", gradient: "from-sky-500 to-indigo-500" },
    { name: "Divan Tienda", category: "Mobiliario", url: "https://divantienda.cl/", gradient: "from-stone-500 to-stone-700" },
    { name: "Librería Bazarte", category: "Arte", url: "https://libreriabazarte.cl/", gradient: "from-rose-500 to-pink-600" },
    { name: "Chiletronics", category: "Tech", url: "https://chiletronics.cl/", gradient: "from-violet-600 to-indigo-600" },
    { name: "Altavista Chile", category: "Táctico", url: "https://altavistachile.cl/", gradient: "from-green-800 to-emerald-600" },
    { name: "PHY Waters", category: "Suplementos", url: "https://phywaters.com/", gradient: "from-cyan-400 to-teal-400" },
    { name: "Recovery Zone", category: "Deporte", url: "https://recoveryzone.cl/", gradient: "from-red-600 to-orange-600" },
    { name: "Tecno-Mobile", category: "Retail", url: "https://tecno-mobile.cl/", gradient: "from-blue-600 to-cyan-500" },
    { name: "Only Jeep", category: "Accesorios", url: "https://www.onlyjeep.cl/", gradient: "from-yellow-600 to-amber-600" },
    { name: "EvertSport", category: "Indumentaria", url: "https://eversport.cl/", gradient: "from-lime-500 to-green-600" },
    { name: "Anteros", category: "Ferretería", url: "https://tienda.anteros.cl/", gradient: "from-orange-600 to-red-600" },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
    // Mouse interaction for tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set((clientX - left) / width - 0.5);
        y.set((clientY - top) / height - 0.5);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);

    return (
        <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative min-w-[300px] h-[420px] rounded-2xl bg-bg-card border border-white/5 overflow-hidden group cursor-none"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={onMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            whileHover={{ scale: 1.02 }}
        >
            {/* Fake UI Header */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20 opacity-60 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/40" />
                    <div className="w-2 h-2 rounded-full bg-white/40" />
                </div>
                <ExternalLink className="w-4 h-4 text-white/60" />
            </div>

            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-50 transition-all duration-700`} />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 bg-gradient-to-t from-black via-transparent to-transparent">
                <p className="text-xs font-bold text-primary-green uppercase tracking-widest mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {project.category}
                </p>
                <h3 className="text-2xl font-bold text-white group-hover:text-primary-green transition-colors leading-tight">
                    {project.name}
                </h3>
            </div>

            {/* Custom Cursor Text (Visual only, actual cursor hidden via class) */}
            <div className="pointer-events-none absolute inset-0 z-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-bold border border-white/20">
                    VISITAR
                </div>
            </div>
        </motion.a>
    );
}

export function Portfolio() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

    return (
        <section ref={targetRef} className="py-24 bg-bg-dark relative h-[400vh]" id="portfolio">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                <div className="container-custom mb-12">
                    <span className="text-primary-green font-bold tracking-wider text-sm uppercase mb-3 block">Portafolio</span>
                    <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white leading-tight">
                        Nuestro trabajo <span className="text-gray-600">habla por sí mismo.</span>
                    </h2>
                </div>

                <motion.div style={{ x }} className="flex gap-8 pl-[10vw]">
                    {projects.map((project, i) => (
                        <ProjectCard key={i} project={project} />
                    ))}
                    {/* End Card */}
                    <div className="min-w-[300px] h-[420px] flex flex-col items-center justify-center text-white/50 border border-dashed border-white/10 rounded-2xl">
                        <p className="text-sm font-bold uppercase tracking-widest mb-4">Tu Proyecto Aquí</p>
                        <a href="#contact" className="bg-primary-green text-bg-dark px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                            Cotizar Ahora
                        </a>
                    </div>
                </motion.div>
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

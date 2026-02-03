"use client";

import { MessageSquare } from "lucide-react";

export function Process() {
    const steps = [
        {
            num: "01",
            title: "Co-Diseño & Estrategia",
            desc: "Nos reunimos contigo para definir objetivos. Diseñamos la experiencia (UX/UI) en Adobe XD y validamos cada pantalla contigo antes de programar."
        },
        {
            num: "02",
            title: "Desarrollo Transparente",
            desc: "Construimos tu tienda dándote acceso al entorno de desarrollo (preview). Podrás ver el avance en tiempo real y aportar feedback directo."
        },
        {
            num: "03",
            title: "Lanzamiento & Capacitación",
            desc: "No solo te entregamos la tienda; te enseñamos a usarla. Capacitamos a tu equipo y te acompañamos durante el lanzamiento oficial."
        }
    ];

    return (
        <section className="py-24 bg-white" id="process">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="text-primary-green font-bold uppercase tracking-widest text-sm">Nuestro Proceso Colaborativo</span>
                    <h2 className="text-4xl lg:text-5xl font-heading font-bold mt-3 mb-6">Método de 3 Pasos</h2>
                    <p className="text-gray-500 max-w-xl mx-auto">Te involucramos en cada etapa. No somos una caja negra; co-creamos tu éxito digital contigo.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {steps.map((step, i) => (
                        <div key={i} className="relative p-8 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all bg-white group">
                            <span className="text-6xl font-black text-gray-100 group-hover:text-green-50 transition-colors absolute top-4 right-4 select-none">
                                {step.num}
                            </span>
                            <h3 className="text-2xl font-bold mb-4 relative z-10">{step.title}</h3>
                            <p className="text-gray-600 relative z-10 leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function Testimonials() {
    const reviews = [
        {
            quote: "Increíble trabajo. Nuestra tasa de conversión se duplicó en el primer mes de lanzamiento.",
            author: "Carlos M.",
            role: "CEO, FashionShoes",
            initial: "C",
            color: "bg-blue-100 text-blue-600"
        },
        {
            quote: "Entendieron perfectamente la estética que buscábamos. Soporte 10/10.",
            author: "Andrea R.",
            role: "Marketing, OrganicFood",
            initial: "A",
            color: "bg-green-100 text-green-600"
        },
        {
            quote: "La migración de WooCommerce a Shopify fue transparente y sin perder datos. Un alivio.",
            author: "Felipe S.",
            role: "Fundador, TechGear",
            initial: "F",
            color: "bg-purple-100 text-purple-600"
        }
    ];

    return (
        <section className="bg-soft-green py-24">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <div className="inline-block p-3 bg-white rounded-full shadow-sm mb-4">
                        <MessageSquare className="w-6 h-6 text-teal-700" />
                    </div>
                    <h2 className="text-4xl font-heading font-bold">Lo que dicen nuestros clientes</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-2 transition-transform duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${review.color}`}>
                                    {review.initial}
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">{review.author}</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider">{review.role}</div>
                                </div>
                            </div>
                            <p className="text-gray-600 italic leading-relaxed">"{review.quote}"</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://wa.me/xxx"
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-full font-bold hover:brightness-110 transition"
                    >
                        Conversar por WhatsApp 💬
                    </a>
                </div>
            </div>
        </section>
    );
}

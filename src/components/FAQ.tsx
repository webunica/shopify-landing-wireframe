"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

interface FAQItem {
    q: string;
    a: string;
}

interface FAQProps {
    items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-bg-card relative">
            <div className="container-custom max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-primary-green font-bold uppercase tracking-widest text-sm">¿Dudas?</span>
                    <h2 className="text-4xl font-heading font-bold mt-3 text-white">Preguntas Frecuentes</h2>
                </div>

                <div className="space-y-4">
                    {items.map((item, i) => (
                        <div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === i ? 'bg-white/10 border-primary-green/30 shadow-lg shadow-primary-green/10' : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/[0.07]'}`}>
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex justify-between items-center p-6 text-left"
                            >
                                <span className={`font-bold text-lg transition-colors ${openIndex === i ? 'text-primary-green' : 'text-white'}`}>{item.q}</span>
                                <span className="text-primary-green bg-primary-green/20 p-1 rounded-full">
                                    {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                                </span>
                            </button>
                            <motion.div
                                initial={false}
                                animate={{ height: openIndex === i ? "auto" : 0, opacity: openIndex === i ? 1 : 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 pt-0 text-gray-400 leading-relaxed text-base">
                                    {item.a}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

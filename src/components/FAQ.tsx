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
        <section className="py-24 bg-white relative">
            <div className="container-custom max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-primary-green font-bold uppercase tracking-widest text-sm">¿Dudas?</span>
                    <h2 className="text-4xl font-heading font-bold mt-3 text-bg-dark">Preguntas Frecuentes</h2>
                </div>

                <div className="space-y-4">
                    {items.map((item, i) => (
                        <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-gray-50/50 hover:bg-white transition-colors">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex justify-between items-center p-6 text-left"
                            >
                                <span className="font-bold text-lg text-bg-dark">{item.q}</span>
                                <span className="text-primary-green">
                                    {openIndex === i ? <Minus /> : <Plus />}
                                </span>
                            </button>
                            <motion.div
                                initial={false}
                                animate={{ height: openIndex === i ? "auto" : 0, opacity: openIndex === i ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
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

import { Zap, Moon, MessageSquare, ArrowRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

interface Feature {
    _id: string;
    title: string;
    description: string;
    badge?: string;
    reversed?: boolean;
    ctaText?: string;
    image?: any;
}

interface FeaturesProps {
    data: Feature[];
}

function FeatureItem({ feature }: { feature: Feature }) {
    const imageUrl = feature.image ? urlFor(feature.image).url() : null;

    return (
        <div className={`flex flex-col lg:flex-row items-center gap-16 py-24 ${feature.reversed ? "lg:flex-row-reverse" : ""}`}>
            {/* Content */}
            <div className="flex-1 space-y-6">
                {feature.badge && (
                    <div className="flex items-center gap-2 text-primary-green-dark font-bold text-2xl">
                        <Zap className="text-primary-green" fill="currentColor" /> <span>{feature.badge}</span>
                    </div>
                )}
                <h2 className="text-4xl lg:text-5xl font-heading font-bold text-bg-dark leading-tight">
                    {feature.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                    {feature.description}
                </p>
                <button className="flex items-center gap-2 text-teal-700 font-bold hover:gap-3 transition-all group">
                    {feature.ctaText || "Learn more"} <ArrowRight className="w-4 h-4" />
                </button>
            </div>

            {/* Visual */}
            <div className="flex-1 w-full relative group">
                <div className="bg-gray-50 rounded-[2rem] aspect-square lg:aspect-[4/3] flex items-center justify-center p-8 overflow-hidden relative shadow-inner">
                    {/* Decor */}
                    <div className={`absolute w-3/4 h-3/4 ${feature.reversed ? 'bg-purple-100' : 'bg-primary-green/10'} rounded-full blur-3xl`} />

                    {/* Image or Placeholder */}
                    {imageUrl ? (
                        <img src={imageUrl} alt={feature.title} className="relative z-10 w-full rounded-xl shadow-lg transform group-hover:-translate-y-2 transition duration-500" />
                    ) : (
                        <div className="bg-white p-6 rounded-2xl shadow-xl w-3/4 z-10 transform group-hover:-translate-y-2 transition duration-500 border border-gray-100 min-h-[200px] flex items-center justify-center">
                            <span className="text-gray-300 font-bold">No Image</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export function Features({ data }: FeaturesProps) {
    // If no data, show nothing (or could show skeletons)
    if (!data || data.length === 0) return null;

    return (
        <section className="container-custom">
            {data.map((feature, index) => (
                <div key={feature._id}>
                    <FeatureItem feature={feature} />

                    {/* Insert Support Banner after the first item as in the original design */}
                    {index === 0 && (
                        <div className="bg-soft-green rounded-[3rem] p-12 lg:p-20 text-center my-12">
                            <div className="inline-block p-4 bg-white rounded-full shadow-md mb-6 animate-bounce">
                                <MessageSquare className="w-8 h-8 text-teal-700" />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-bg-dark mb-6">
                                Get <span className="text-teal-700 italic">award-winning</span><br />customer support
                            </h2>
                            <p className="max-w-xl mx-auto text-gray-600 mb-10">
                                We're here for you 24/7. Our global support team is rated 5 stars.
                            </p>
                            <div className="flex justify-center -space-x-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-300 overflow-hidden" />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
}

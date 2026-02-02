import { Zap, Moon, MessageSquare, ArrowRight } from "lucide-react";

interface FeatureProps {
    title: string;
    description: string;
    badge?: string;
    icon: React.ReactNode;
    reversed?: boolean;
    imageSrc?: string;
    ctaText?: string;
}

function FeatureItem({ title, description, badge, icon, reversed, ctaText = "Learn more" }: FeatureProps) {
    return (
        <div className={`flex flex-col lg:flex-row items-center gap-16 py-24 ${reversed ? "lg:flex-row-reverse" : ""}`}>
            {/* Content */}
            <div className="flex-1 space-y-6">
                {badge && (
                    <div className="flex items-center gap-2 text-primary-green-dark font-bold text-2xl">
                        {icon} <span>{badge}</span>
                    </div>
                )}
                <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-bg-dark leading-tight">
                    {title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                    {description}
                </p>
                <button className="flex items-center gap-2 text-teal-700 font-bold hover:gap-3 transition-all group">
                    {ctaText} <ArrowRight className="w-4 h-4" />
                </button>
            </div>

            {/* Visual */}
            <div className="flex-1 w-full relative group">
                <div className="bg-gray-50 rounded-[2rem] aspect-square lg:aspect-[4/3] flex items-center justify-center p-8 overflow-hidden relative shadow-inner">
                    {/* Decor */}
                    <div className={`absolute w-3/4 h-3/4 ${reversed ? 'bg-purple-100' : 'bg-primary-green/10'} rounded-full blur-3xl`} />

                    {/* Placeholder UI */}
                    <div className="bg-white p-6 rounded-2xl shadow-xl w-3/4 z-10 transform group-hover:-translate-y-2 transition duration-500 border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-full bg-gray-200" />
                            <div className="h-2 w-24 bg-gray-200 rounded" />
                        </div>
                        <div className="space-y-2">
                            <div className="h-2 w-full bg-gray-100 rounded" />
                            <div className="h-2 w-5/6 bg-gray-100 rounded" />
                            <div className="h-2 w-4/6 bg-gray-100 rounded" />
                        </div>
                        <div className="mt-4 flex gap-2">
                            <div className="h-8 w-20 bg-primary-green rounded-md" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Features() {
    return (
        <section className="container-custom">
            <FeatureItem
                badge="35% Revenue"
                icon={<Zap className="text-primary-green" fill="currentColor" />}
                title="Powerful alone, unbeatable together"
                description="Combine Email and SMS to create a unified customer experience. Automate your workflows and watch your sales grow on autopilot."
                ctaText="Explore Automation"
            />

            {/* Support Banner Middle */}
            <div className="bg-soft-green rounded-[3rem] p-12 lg:p-20 text-center my-12">
                <div className="inline-block p-4 bg-white rounded-full shadow-md mb-6 animate-bounce">
                    <MessageSquare className="w-8 h-8 text-teal-700" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-bg-dark mb-6">
                    Get <span className="text-teal-700 italic">award-winning</span><br />customer support
                </h2>
                <p className="max-w-xl mx-auto text-gray-600 mb-10">
                    We're here for you 24/7. Our global support team is rated 5 stars and typically replies in under 3 minutes.
                </p>
                <div className="flex justify-center -space-x-4">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-300 overflow-hidden" />
                    ))}
                </div>
            </div>

            <FeatureItem
                reversed
                badge="Sleep Sales"
                icon={<Moon className="text-purple-500" fill="currentColor" />}
                title="Money doesn't sleep (but you can)"
                description="Set up pre-built workflows for abandon carts, welcome series, and transactional emails in minutes, not days."
                ctaText="See Workflows"
            />
        </section>
    );
}

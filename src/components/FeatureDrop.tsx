import { LucideIcon } from "lucide-react";

// Subcomponent for Logo Grid
export function LogoGrid() {
    const brands = [
        "Shopify Partner",
        "Webpay Plus",
        "MercadoPago",
        "Starken",
        "BlueExpress",
        "Google Ads",
        "Meta Ads"
    ];

    return (
        <div className="py-24 border-y border-white/5 bg-bg-dark relative z-10">
            <div className="container-custom overflow-hidden relative">
                <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest mb-16 opacity-60">
                    Tecnologías & Partners que utilizamos
                </p>

                {/* Gradient Masks for smooth fade effect */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-bg-dark to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-bg-dark to-transparent z-10 pointer-events-none" />

                <div className="relative flex overflow-x-hidden group">
                    <div className="animate-marquee whitespace-nowrap flex gap-24 items-center">
                        {/* Triple duplication to ensure smooth infinite loop on wide screens */}
                        {[...brands, ...brands, ...brands].map((brand, i) => (
                            <span
                                key={`${brand}-${i}`}
                                className="text-3xl md:text-4xl font-heading font-bold text-white/90 hover:text-primary-green transition-all duration-300 cursor-default select-none hover:scale-110 active:scale-95"
                                style={{ textShadow: '0 0 20px rgba(255,255,255,0.1)' }}
                            >
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function FeatureDrop() {
    return null; // Disabling the old "Feature Drop" component as it doesn't fit the Agency vibes
}

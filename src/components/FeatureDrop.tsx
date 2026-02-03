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
        <div className="py-12 border-y border-white/5 bg-black/40 backdrop-blur-sm relative z-10">
            <div className="container-custom overflow-hidden relative">
                <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest mb-10">
                    Tecnologías & Partners que utilizamos
                </p>

                {/* Gradient Masks for smooth fade effect */}
                <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none" />

                <div className="relative flex overflow-x-hidden group">
                    <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
                        {/* Triple duplication to ensure smooth infinite loop on wide screens */}
                        {[...brands, ...brands, ...brands].map((brand, i) => (
                            <span
                                key={`${brand}-${i}`}
                                className="text-xl md:text-2xl font-heading font-bold text-gray-500 hover:text-white transition-colors cursor-default select-none"
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

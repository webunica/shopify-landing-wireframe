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
        <div className="py-10 border-y border-white/5 bg-black/20">
            <div className="container-custom overflow-hidden">
                <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">
                    Tecnologías & Partners que utilizamos
                </p>

                <div className="relative flex overflow-x-hidden group">
                    <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
                        {[...brands, ...brands].map((brand, i) => (
                            <span key={`${brand}-${i}`} className="text-xl md:text-2xl font-heading font-bold text-white/40 hover:text-white hover:opacity-100 transition-all cursor-default">
                                {brand}
                            </span>
                        ))}
                    </div>

                    <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 items-center ml-16">
                        {/* Duplicate for infinite loop effect if needed, though simple flex gap often suffices for static lists. 
                 For now keeping it simple grid style for better mobile view if marquee is too complex to implement perfectly without custom CSS animation keyframes being checked.
             */}
                    </div>
                </div>

                {/* Simple Grid Fallback for robustness */}
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mt-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {brands.map((brand) => (
                        <span key={brand} className="text-lg font-bold text-white hover:text-primary-green transition-colors cursor-default">
                            {brand}
                        </span>
                    ))}
                </div>

            </div>
        </div>
    );
}

export function FeatureDrop() {
    return null; // Disabling the old "Feature Drop" component as it doesn't fit the Agency vibes
}

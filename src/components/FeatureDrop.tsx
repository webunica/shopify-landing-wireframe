import { LucideIcon } from "lucide-react";

export function FeatureDrop() {
    return (
        <div className="container-custom relative z-20 -mt-16 mb-20">
            <div className="bg-gradient-to-r from-soft-green to-green-100 rounded-3xl p-8 lg:p-12 shadow-xl border border-white/50 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span className="bg-white text-bg-dark font-extrabold text-xs px-3 py-1 rounded uppercase tracking-wider mb-3 inline-block shadow-sm">
                        New Feature Drop
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold text-bg-dark leading-tight">
                        Another feature drop?<br />
                        <span className="italic">Groundbreaking...</span>
                    </h3>
                </div>
                <div className="flex gap-4">
                    {/* Abstract graphics mimicking the wireframe cube */}
                    <div className="w-16 h-16 bg-primary-green rounded-lg shadow-inner rotate-3 transform border-2 border-bg-dark/10"></div>
                    <div className="w-16 h-16 bg-white rounded-lg shadow-sm -rotate-6 transform border border-gray-100"></div>
                </div>
                <button className="bg-bg-dark text-white px-6 py-3 rounded-full font-bold hover:bg-black transition text-sm">
                    See what's new
                </button>
            </div>
        </div>
    );
}

// Subcomponent for Logo Grid
export function LogoGrid() {
    return (
        <div className="py-12 text-center border-b border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
                Trusted by 100,000+ Ecommerce Brands
            </p>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {["Shopify", "WooCommerce", "BigCommerce", "Wix", "Magento"].map((brand) => (
                    <span key={brand} className="text-xl font-heading font-black text-bg-dark">{brand}</span>
                ))}
            </div>
        </div>
    );
}

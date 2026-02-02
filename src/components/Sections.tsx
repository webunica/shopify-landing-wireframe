import { CheckCircle } from "lucide-react";

export function Integrations() {
    return (
        <section className="py-20 text-center container-custom">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
                Connect Omnisend to your<br />ecommerce platform
            </h2>
            <p className="text-gray-500 mb-12">One-click integration with all major platforms.</p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {["Shopify", "BigCommerce", "WooCommerce", "Wix", "Magento", "API"].map((platform) => (
                    <div key={platform} className="border border-gray-200 py-4 rounded-xl font-bold text-gray-700 hover:border-black hover:bg-gray-50 transition cursor-pointer">
                        {platform}
                    </div>
                ))}
            </div>
        </section>
    );
}

export function TealCTA() {
    return (
        <section className="bg-teal-800 text-white py-24">
            <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="text-primary-green font-bold tracking-wider text-sm uppercase mb-4 block">Easy Setup</span>
                    <h2 className="text-4xl lg:text-5xl font-heading font-bold leading-tight mb-8">
                        Get up and<br />running in<br />30 minutes
                    </h2>
                    <button className="text-white border-b border-primary-green pb-1 font-bold hover:text-primary-green transition">
                        Read the case study &rarr;
                    </button>
                </div>

                <div className="bg-white text-bg-dark p-8 lg:p-10 rounded-2xl shadow-2xl">
                    <ul className="space-y-4">
                        {["Import your contacts", "Connect your store", "Activate automations", "Send your first campaign"].map((item) => (
                            <li key={item} className="flex items-center gap-3 font-medium text-lg border-b border-gray-100 pb-3 last:border-0">
                                <CheckCircle className="text-green-500 w-6 h-6" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

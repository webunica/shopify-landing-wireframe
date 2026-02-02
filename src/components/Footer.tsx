export default function Footer() {
    return (
        <footer className="bg-black text-gray-400">
            {/* Top CTA Area */}
            <div className="bg-bg-card relative overflow-hidden py-24">
                <div className="container-custom relative z-10">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-10 leading-tight">
                        Join the <span className="text-primary-green">100,000+ brands</span><br />
                        who trust us to help<br />
                        their business grow.
                    </h2>
                    <div className="flex gap-6">
                        <button className="bg-primary-green text-bg-dark px-8 py-4 rounded-full font-bold text-lg hover:brightness-110 transition">
                            Start free
                        </button>
                        <button className="text-white font-bold px-4 hover:underline">
                            Contact Sales
                        </button>
                    </div>
                </div>
                {/* Green shape decoration */}
                <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-primary-green rounded-full blur-[100px] opacity-20 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[300px] border-l-transparent border-b-[300px] border-b-primary-green opacity-90 hidden lg:block" />
            </div>

            {/* Links Grid */}
            <div className="container-custom py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-sm">
                <div className="col-span-2 lg:col-span-1">
                    <span className="text-white font-bold text-xl">OMNISEND<span className="text-primary-green">_CLONE</span></span>
                </div>

                {[
                    { title: "Product", links: ["Features", "Pricing", "Integrations", "Changelog"] },
                    { title: "Company", links: ["About us", "Careers", "Contact", "Customers"] },
                    { title: "Resources", links: ["Blog", "Podcasts", "Ebooks", "Help Center"] },
                    { title: "Social", links: ["Twitter", "LinkedIn", "Instagram", "YouTube"] },
                ].map((col) => (
                    <div key={col.title}>
                        <h4 className="text-white font-bold mb-6">{col.title}</h4>
                        <ul className="space-y-4">
                            {col.links.map(link => (
                                <li key={link}><a href="#" className="hover:text-primary-green transition">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="border-t border-gray-800 py-8 text-center text-xs">
                &copy; 2024 Omnisend Clone Project. Built with Next.js & Tailwind.
            </div>
        </footer>
    );
}

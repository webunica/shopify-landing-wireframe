export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 border-t border-white/10">
            {/* Links Grid */}
            <div className="container-custom py-32 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 text-sm">
                <div className="col-span-2 lg:col-span-1">
                    <span className="text-white font-bold text-2xl font-heading">WEB<span className="text-primary-green">UNICA</span></span>
                    <p className="mt-6 text-gray-500 leading-relaxed">
                        Expertos en e-commerce y partners certificados de Shopify en Chile.
                    </p>
                </div>

                {[
                    { title: "Servicios", links: ["Desarrollo Shopify", "Diseño UX/UI", "Migraciones", "Consultoría"] },
                    { title: "Empresa", links: ["Sobre Nosotros", "Portafolio", "Blog", "Contacto"] },
                    { title: "Legal", links: ["Términos de Servicio", "Política de Privacidad", "Política de Cookies"] },
                    { title: "Síguenos", links: ["LinkedIn", "Instagram", "Behance"] },
                ].map((col) => (
                    <div key={col.title}>
                        <h4 className="text-white font-bold mb-8 text-lg">{col.title}</h4>
                        <ul className="space-y-4">
                            {col.links.map(link => (
                                <li key={link}><a href="#" className="hover:text-primary-green transition-colors duration-200">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="border-t border-white/10 py-12 text-center text-sm text-gray-600">
                &copy; {new Date().getFullYear()} WebUnica. Todos los derechos reservados.
            </div>
        </footer>
    );
}

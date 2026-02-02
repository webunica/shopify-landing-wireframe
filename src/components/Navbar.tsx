"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-bg-dark text-white py-5 sticky top-0 z-50 border-b border-white/5">
            <div className="container-custom flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="font-black text-2xl tracking-tighter">
                    OMNISEND<span className="text-primary-green">_CLONE</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
                    <Link href="#features" className="hover:text-white transition">Features</Link>
                    <Link href="#pricing" className="hover:text-white transition">Pricing</Link>
                    <Link href="#resources" className="hover:text-white transition">Resources</Link>
                    <Link href="#customers" className="hover:text-white transition">Customers</Link>
                </div>

                {/* CTA Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login" className="font-semibold text-sm hover:text-primary-green transition">
                        Log in
                    </Link>
                    <Link
                        href="/start"
                        className="bg-primary-green text-bg-dark px-6 py-3 rounded-full font-bold text-sm hover:translate-y-[-2px] transition-transform shadow-[0_0_20px_rgba(163,230,53,0.3)]"
                    >
                        Start free
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-bg-dark p-6 border-b border-white/10 flex flex-col gap-4 shadow-xl">
                    <Link href="#features" className="text-lg font-medium">Features</Link>
                    <Link href="#pricing" className="text-lg font-medium">Pricing</Link>
                    <Link href="/login" className="text-lg font-medium">Log in</Link>
                    <Link href="/start" className="bg-primary-green text-bg-dark text-center py-3 rounded-full font-bold mt-2">
                        Start free
                    </Link>
                </div>
            )}
        </nav>
    );
}

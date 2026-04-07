import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/85 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
                <Link to="/" className="flex items-center gap-4" onClick={closeMenu}>
                    <div className="relative flex h-24 w-24 items-center justify-center">
                        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-sky-400/30 to-blue-600/20 blur-md" />

                        <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-neutral-600 shadow-lg">
                            <img
                                src={logo}
                                alt="AeroStack Labs"
                                className="h-full w-full scale-125 object-contain"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="text-lg font-semibold tracking-tight text-white">
                            AeroStack Labs
                        </div>
                        <div className="text-xs text-sky-300">
                            More stack. More aero time.
                        </div>
                    </div>
                </Link>

                <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wide text-white/85 md:flex">
                    <Link to="/story" className="transition hover:text-sky-300">
                        The Story
                    </Link>
                    <Link to="/products" className="transition hover:text-sky-300">
                        Products
                    </Link>
                    <Link to="/contact" className="transition hover:text-sky-300">
                        Contact
                    </Link>
                    <Link to="/faq" className="transition hover:text-sky-300">
                        FAQ
                    </Link>
                    <Link to="/terms" className="transition hover:text-sky-300">
                        Terms
                    </Link>
                </nav>

                <button
                    type="button"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    <div className="flex flex-col gap-1.5">
                        <span className="block h-0.5 w-5 rounded-full bg-white" />
                        <span className="block h-0.5 w-5 rounded-full bg-white" />
                        <span className="block h-0.5 w-5 rounded-full bg-white" />
                    </div>
                </button>
            </div>

            {menuOpen && (
                <div className="border-t border-white/10 bg-neutral-950 md:hidden">
                    <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white/85">
                        <Link
                            to="/story"
                            onClick={closeMenu}
                            className="border-b border-white/10 py-3 transition hover:text-sky-300"
                        >
                            The Story
                        </Link>
                        <Link
                            to="/products"
                            onClick={closeMenu}
                            className="border-b border-white/10 py-3 transition hover:text-sky-300"
                        >
                            Products
                        </Link>
                        <Link
                            to="/contact"
                            onClick={closeMenu}
                            className="border-b border-white/10 py-3 transition hover:text-sky-300"
                        >
                            Contact
                        </Link>
                        <Link
                            to="/faq"
                            onClick={closeMenu}
                            className="border-b border-white/10 py-3 transition hover:text-sky-300"
                        >
                            FAQ
                        </Link>
                        <Link
                            to="/terms"
                            onClick={closeMenu}
                            className="py-3 transition hover:text-sky-300"
                        >
                            Terms
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
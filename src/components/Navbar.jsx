import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/85 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
                <Link to="/" className="flex items-center gap-3">
                    <div className="relative flex h-12 w-12 items-center justify-center">
                        <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-sky-400/30 to-blue-600/20 blur-md" />

                        <div className="relative flex h-full w-full items-center justify-center rounded-xl border border-white/10 bg-neutral-900/90">
                            <img
                                src={logo}
                                alt="AeroStack Labs"
                                className="h-8 w-auto object-contain brightness-125 contrast-110"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="text-lg font-semibold tracking-tight text-white">
                            AeroStack Labs
                        </div>
                        <div className="text-xs text-sky-300">More stack. More aero time.</div>
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
                </nav>
            </div>
        </header>
    );
}
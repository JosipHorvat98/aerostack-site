import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/85 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
                <Link to="/" className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-400/30 bg-white/5">
                        <div className="space-y-1">
                            <div className="mx-auto h-0 w-0 border-l-[8px] border-r-[8px] border-b-[10px] border-l-transparent border-r-transparent border-b-sky-400" />
                            <div className="mx-auto h-0 w-0 border-l-[10px] border-r-[10px] border-b-[8px] border-l-transparent border-r-transparent border-b-sky-500" />
                            <div className="mx-auto h-0 w-0 border-l-[12px] border-r-[12px] border-b-[8px] border-l-transparent border-r-transparent border-b-blue-700" />
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
                </nav>
            </div>
        </header>
    );
}
import { Routes, Route, Link } from "react-router-dom";
import { products } from "./data/products";
import ProductPage from "./pages/ProductPage";

function HomePage() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white">
            <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/85 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-400/30 bg-white/5">
                            <div className="space-y-1">
                                <div className="mx-auto h-0 w-0 border-l-[8px] border-r-[8px] border-b-[10px] border-l-transparent border-r-transparent border-b-sky-400" />
                                <div className="mx-auto h-0 w-0 border-l-[10px] border-r-[10px] border-b-[8px] border-l-transparent border-r-transparent border-b-sky-500" />
                                <div className="mx-auto h-0 w-0 border-l-[12px] border-r-[12px] border-b-[8px] border-l-transparent border-r-transparent border-b-blue-700" />
                            </div>
                        </div>
                        <div>
                            <div className="text-lg font-semibold tracking-tight">AeroStack Labs</div>
                            <div className="text-xs text-sky-300">More stack. More aero time.</div>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <section className="relative overflow-hidden">
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "radial-gradient(circle at top left, rgba(56,189,248,0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(37,99,235,0.16), transparent 30%)",
                        }}
                    />
                    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
                        <div className="relative z-10">
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-1.5 text-sm text-sky-200">
                                Precision cockpit components for Canyon Gear Groove setups
                            </div>
                            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                                Increase stack height and make your aero position actually usable.
                            </h1>
                            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                                Developed during real Ironman preparation, AeroStack components solve one of the most common limitations of the Canyon Gear Groove aero extension system.
                            </p>
                        </div>

                        <div className="relative z-10">
                            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-sky-950/30">
                                <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-6">
                                    <div className="flex h-full flex-col justify-between">
                                        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/40">
                                            <span>AeroStack Labs</span>
                                            <span>Gear Groove</span>
                                        </div>
                                        <div className="mx-auto w-full max-w-sm rounded-[2rem] border border-white/10 bg-neutral-900/80 p-5">
                                            <div className="mb-5 flex items-center gap-3 text-sm text-white/60">
                                                <div className="h-3 w-3 rounded-full bg-sky-400" />
                                                Stack riser concept
                                            </div>
                                            <div className="space-y-3">
                                                <div className="h-12 rounded-2xl bg-neutral-800" />
                                                <div className="mx-auto h-24 w-20 rounded-[1.5rem] bg-gradient-to-b from-neutral-700 to-neutral-900" />
                                                <div className="h-12 rounded-2xl bg-neutral-800" />
                                            </div>
                                            <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs text-white/55">
                                                <div className="rounded-xl border border-white/10 bg-white/5 px-2 py-2">30 mm</div>
                                                <div className="rounded-xl border border-white/10 bg-white/5 px-2 py-2">20 mm</div>
                                                <div className="rounded-xl border border-white/10 bg-white/5 px-2 py-2">15 degree tilt</div>
                                            </div>
                                        </div>
                                        <div className="rounded-[1.5rem] border border-sky-400/20 bg-sky-400/10 p-4 text-sm text-sky-100">
                                            The biggest difference was not just more height. It was finally being able to stay aero comfortably for long periods.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="products" className="border-t border-white/10">
                    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
                        <div className="max-w-3xl">
                            <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Products</p>
                            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                                Components built around the Canyon Gear Groove interface.
                            </h2>
                        </div>

                        <div className="mt-12 grid gap-6 lg:grid-cols-3">
                            {products.map((product) => (
                                <Link
                                    key={product.slug}
                                    to={`/products/${product.slug}`}
                                    className="rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/10"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-2xl font-semibold tracking-tight">{product.name}</h3>
                                            <p className="mt-1 text-sm text-sky-300">{product.subtitle}</p>
                                        </div>
                                        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-white/75">
                                            {product.price}
                                        </span>
                                    </div>

                                    <p className="mt-5 text-base leading-7 text-white/70">
                                        {product.description}
                                    </p>

                                    <ul className="mt-6 space-y-3 text-sm text-white/75">
                                        {product.details.slice(0, 4).map((detail) => (
                                            <li key={detail} className="flex items-center gap-3">
                                                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t border-white/10 bg-neutral-950">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-white/50 lg:flex-row lg:items-center lg:justify-between lg:px-10">
                    <div>AeroStack Labs</div>
                    <div>More stack. More aero time.</div>
                </div>
            </footer>
        </div>
    );
}

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:slug" element={<ProductPage />} />
        </Routes>
    );
}
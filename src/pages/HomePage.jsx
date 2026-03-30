import {Link } from "react-router-dom";
import { products } from "../data/products";
import Navbar from "../components/Navbar";
import heroImage from "../assets/hero.JPEG";


export default function HomePage() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white">
            <Navbar />

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
                            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-sky-950/30">

                                {/* glow efekt */}
                                <div className="absolute -inset-4 rounded-[2rem] bg-sky-500/10 blur-2xl" />

                                <div className="relative overflow-hidden rounded-[1.5rem]">
                                    <img
                                        src={heroImage}
                                        alt="Aero cockpit"
                                        className="w-full h-full object-cover"
                                    />
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
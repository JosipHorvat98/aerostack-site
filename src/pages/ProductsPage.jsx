import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { products } from "../data/products";

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white">
            <Navbar />

            <main className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
                <div className="max-w-3xl">
                    <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Products</p>
                    <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                        Components built around the Canyon Gear Groove interface.
                    </h1>
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
            </main>
        </div>
    );
}
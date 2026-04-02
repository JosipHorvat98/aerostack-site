import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import Navbar from "../components/Navbar";

export default function ProductPage() {
    const { slug } = useParams();
    const product = products.find((item) => item.slug === slug);
    const [selectedImage, setSelectedImage] = useState(null);

    if (!product) {
        return (
            <div className="min-h-screen bg-neutral-950 text-white">
                <Navbar />
                <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
                    <h1 className="text-3xl font-semibold">Product not found</h1>
                    <Link to="/products" className="mt-6 inline-block text-sky-300">
                        Back to products
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-950 text-white">
            <Navbar />

            <main className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
                <div className="mb-8">
                    <Link to="/products" className="text-sm text-sky-300 hover:text-sky-200">
                        ← Back to products
                    </Link>
                </div>

                <div className="grid gap-12 lg:grid-cols-2">
                    <div>
                        <img
                            src={product.image}
                            alt={product.name}
                            onClick={() => setSelectedImage(product.image)}
                            className="w-full cursor-zoom-in rounded-2xl border border-white/10"
                        />

                        {product.gallery?.length > 0 && (
                            <div className="mt-4 grid grid-cols-2 gap-3">
                                {product.gallery.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`${product.name} ${index + 1}`}
                                        onClick={() => setSelectedImage(img)}
                                        className="cursor-zoom-in rounded-xl border border-white/10 transition hover:opacity-80"
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-sky-300">
                            Product
                        </p>

                        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
                            {product.name}
                        </h1>

                        <p className="mt-2 text-lg text-sky-300">
                            {product.subtitle}
                        </p>

                        <div className="mt-6 flex flex-col gap-2">
                            <div className="flex items-center gap-4">
                                {product.oldPrice && (
                                    <span className="text-lg text-white/40 line-through">
                                        {product.oldPrice}
                                    </span>
                                )}

                                {product.salePrice ? (
                                    <span className="text-2xl font-semibold">
                                        {product.salePrice}
                                    </span>
                                ) : (
                                    <span className="text-2xl font-semibold">
                                        {product.price}
                                    </span>
                                )}
                            </div>

                            {product.price === "Coming soon" && (
                                <div className="text-sm font-medium uppercase tracking-wide text-sky-300">
                                    Coming soon
                                </div>
                            )}
                        </div>

                        <p className="mt-6 text-lg leading-8 text-white/75">
                            {product.description}
                        </p>

                        {product.extraText && (
                            <p className="mt-6 whitespace-pre-line text-white/70">
                                {product.extraText}
                            </p>
                        )}
                        {product.price === "Coming soon" && (
                            <p className="mt-6 text-sm text-sky-300">
                                Available for pre-order - first batch shipping in the last week of April 2026.
                            </p>
                        )}

                        <div className="mt-8">
                            <h2 className="text-xl font-semibold">Details</h2>
                            <ul className="mt-4 space-y-3 text-white/75">
                                {product.details.map((detail) => (
                                    <li key={detail} className="flex items-start gap-3">
                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400" />
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-10">
                            <a
                                href="mailto:contact@aerostacklabs.eu"
                                className="rounded-2xl bg-sky-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-sky-400"
                            >
                                Order / Contact
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        alt="Expanded product view"
                        className="max-h-[90vh] max-w-[90vw] rounded-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button
                        type="button"
                        onClick={() => setSelectedImage(null)}
                        className="absolute right-6 top-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white"
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
}
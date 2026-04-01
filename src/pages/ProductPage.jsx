import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductPage() {
    const { slug } = useParams();
    const product = products.find((item) => item.slug === slug);

    if (!product) {
        return (
            <div className="min-h-screen bg-neutral-950 px-6 py-20 text-white">
                <h1 className="text-3xl font-semibold">Product not found</h1>
                <Link to="/" className="mt-6 inline-block text-sky-400">
                    Back to homepage
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-950 text-white">
            <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
                <Link to="/" className="mb-8 inline-block text-sm text-sky-400">
                    ← Back to homepage
                </Link>

                <div className="grid gap-10 lg:grid-cols-2">
                    <div>
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full rounded-2xl border border-white/10"
                        />

                        {product.gallery?.length > 1 && (
                            <div className="mt-4 grid grid-cols-2 gap-3">
                                {product.gallery.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`${product.name} ${index + 1}`}
                                        className="rounded-xl border border-white/10"
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
                        <p className="mt-2 text-lg text-sky-300">{product.subtitle}</p>

                        <div className="mt-6 flex items-center gap-4">
                            <div className="mt-6 flex flex-col gap-2">
                                <div className="flex items-center gap-4">
                                    {product.oldPrice && (
                                        <span className="text-lg text-white/40 line-through">
                                            {product.oldPrice}
                                        </span>
                                    )}
                                    {product.salePrice && (
                                        <span className="text-2xl font-semibold">{product.salePrice}</span>
                                    )}
                                    {!product.salePrice && (
                                        <span className="text-2xl font-semibold">{product.price}</span>
                                    )}
                                </div>

                                {product.price === "Coming soon" && (
                                    <div className="text-sm font-medium uppercase tracking-wide text-sky-300">
                                        Coming soon
                                    </div>
                                )}
                            </div>
                        </div>

                        <p className="mt-6 text-lg leading-8 text-white/75">
                            {product.description}
                        </p>

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
                                href="mailto:contact@aerostacklabs.com"
                                className="rounded-2xl bg-sky-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-sky-400"
                            >
                                Order / Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
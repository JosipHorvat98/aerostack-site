import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const categories = ["All", "Stack Kits", "Spacers", "Platforms", "Systems"];

const CATEGORY = {
  "aerostack-elite": "Stack Kits",
  "aerostack-pro": "Stack Kits",
  "aerostack-basic": "Stack Kits",
  "aerostack-basic-20": "Stack Kits",
  "aerostack-tilt": "Spacers",
  "aerostack-stack-reach": "Spacers",
  "aerostack-core-spacer": "Spacers",
  "aerostack-infinity-plate": "Platforms",
  "aerostack-ultimate": "Systems"
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleProducts = products.filter(
    (product) =>
      product.slug !== "aerostack-pinnacle" &&
      (activeCategory === "All" || CATEGORY[product.slug] === activeCategory)
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-300">
            Products
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Components built around the Canyon Gear Groove interface.
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
            Increase stack height and make your aero position actually usable.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-sky-500/25 transition"
                  : "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:border-sky-400/40 hover:text-white"
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}

          <Link
            to="/tri-platform"
            className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-sky-500/15 via-blue-600/10 to-transparent p-4 transition duration-300 hover:-translate-y-1.5 hover:border-sky-400/50 hover:shadow-[0_24px_60px_-28px_rgba(56,189,248,0.45)]"
          >
            <div className="relative mb-5 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/20 to-blue-700/10">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
                AeroStack ULTRA
              </span>

              <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-sm font-semibold text-white backdrop-blur">
                540 EUR
              </span>

              <span className="absolute right-3 top-3 rounded-full bg-white/10 px-2 py-1 text-xs uppercase tracking-wide text-white/60">
                System
              </span>
            </div>

            <h3 className="text-xl font-semibold tracking-tight text-white">
              AeroStack ULTRA
            </h3>

            <p className="mt-1 text-sm text-sky-300">
              Complete cockpit solution
            </p>

            <p className="mt-4 flex-1 text-sm leading-6 text-white/60">
              The AeroStack ULTRA System for Canyon riders who want more than the
              limitations of the standard Gear Groove system - a modular cockpit
              that grows with your needs.
            </p>

            <div className="mt-6 flex items-center justify-end border-t border-white/10 pt-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-sky-300 transition group-hover:text-sky-200">
                View&nbsp;→
              </span>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import triBanner from "../assets/tri-platform-banner.jpg";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at top left, rgba(56,189,248,0.16), transparent 32%), radial-gradient(circle at bottom right, rgba(37,99,235,0.14), transparent 32%)",
            }}
          />

          <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
            <Link to="/tri-platform" className="block">
              <img
                src={triBanner}
                alt="AeroStack TRI Platform System"
                className="w-full rounded-[2rem] border border-white/10 object-cover shadow-2xl shadow-sky-950/30 transition hover:scale-[1.01]"
              />
            </Link>
          </div>
        </section>

        <section id="products" className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.2em] text-sky-300">
                Products
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Components built around the Canyon Gear Groove interface.
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
                Increase stack height and make your aero position actually usable.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products
                .filter((product) => product.slug !== "aerostack-pinnacle")
                .map((product) => (
                  <ProductCard key={product.slug} product={product} />
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
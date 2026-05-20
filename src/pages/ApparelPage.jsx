import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import tshirtImage from "../assets/tshirt.jpg";

export default function ApparelPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-300">
            Apparel
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            AeroStack Labs apparel.
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
            Minimalist apparel inspired by aero performance, triathlon, and modern engineering aesthetics.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Link
            to="/apparel/tshirt"
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/10"
          >
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-neutral-900">
              <img
                src={tshirtImage}
                alt="AeroStack Labs Premium T-Shirt"
                className="w-full object-cover"
              />
            </div>

            <div className="mt-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  AeroStack Labs Premium T-Shirt
                </h3>

                <p className="mt-1 text-sm text-sky-300">
                  Minimalist aero-inspired apparel
                </p>
              </div>

              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-white/75">
                20 EUR
              </span>
            </div>

            <p className="mt-5 text-base leading-7 text-white/70">
              Premium cotton jersey t-shirt inspired by triathlon, cycling, and performance culture.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
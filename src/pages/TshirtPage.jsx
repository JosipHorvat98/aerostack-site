import Navbar from "../components/Navbar";
import tshirtImage from "../assets/tshirt.jpg";

export default function TshirtPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white">
              <img
                src={tshirtImage}
                alt="AeroStack Labs Premium T-Shirt"
                className="w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sky-300">
              Apparel
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight">
              AeroStack Labs Premium T-Shirt
            </h1>

            <div className="mt-6 text-3xl font-semibold text-white">
              20 EUR
            </div>

            <div className="mt-10 space-y-8 text-lg leading-8 text-white/75">
              <p>
                Minimalist design inspired by aero performance, triathlon, and
                modern engineering aesthetics.
              </p>

              <p>
                Crafted from robust premium cotton jersey, this t-shirt delivers
                a soft feel against the skin and exceptional all-day comfort.
              </p>

              <p>
                The slightly fitted unisex cut fits both men and women perfectly
                - sporty enough for a modern performance look, yet comfortable
                enough for everyday wear.
              </p>
            </div>

            <div className="mt-14">
              <h2 className="text-2xl font-semibold tracking-tight">
                Product Details
              </h2>

              <ul className="mt-6 space-y-3 text-white/75">
                {[
                  "Premium quality t-shirt",
                  "Soft and durable cotton jersey",
                  "Side seam-free construction for enhanced comfort",
                  "Slightly fitted unisex cut",
                  "Comfortable feel against the skin",
                  "High-quality print",
                  "Designed for triathlon, cycling, and performance culture enthusiasts",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-14">
              <h2 className="text-2xl font-semibold tracking-tight">
                Fit
              </h2>

              <ul className="mt-6 space-y-3 text-white/75">
                {[
                  "Slightly fitted",
                  "If you prefer a more relaxed fit, we recommend choosing one size larger",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
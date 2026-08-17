import { useState } from "react";
import Navbar from "../components/Navbar";

export default function TriPlatformPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <section className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-300">
            AeroStack ULTRA
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Build your aero setup your way.
          </h1>

          <div className="mt-10 space-y-8 text-lg leading-8 text-white/75">
            <p>
              The AeroStack ULTRA is our complete cockpit solution
              for Canyon riders who want more than the limitations of the
              standard Gear Groove system.
            </p>

            <p>
              While the stock Canyon Gear Groove Aero Extension offers a clean
              and integrated design, it comes with limited adjustability and
              restricts riders to a fixed setup.
            </p>

            <p className="text-xl font-semibold text-white">
              We built this system to change that.
            </p>
          </div>
        </section>

        <section className="mt-24 grid items-center gap-16 lg:grid-cols-2">
          <button
            type="button"
            onClick={() => setSelectedImage("/images/tri-platform-1.jpg")}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white transition hover:scale-[1.01]"
          >
            <img
              src="/images/tri-platform-1.jpg"
              alt="AeroStack ULTRA"
              className="w-full cursor-zoom-in object-cover"
            />
          </button>

          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Real adjustability where it matters.
            </h2>

            <ul className="mt-8 space-y-4 text-lg text-white/75">
              {[
                "Stack height range",
                "Adjustable tilt angle for better arm and shoulder positioning (with AeroStack Tilt 15\u00B0 spacer, sold separately)",
                "Improved fit and long-term comfort in the aero position",
                "Freedom to fine-tune your cockpit for real-world performance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-3 h-2 w-2 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-24 grid items-center gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-semibold tracking-tight">
              Build YOUR aero setup YOUR way.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-white/75">
              <p>
                At the core of the system is a precision-engineered mounting
                platform called the AeroStack Infinity Plate, designed to allow
                the use of a wide variety of aerobars.
              </p>

              <p>
                No lock-in. No compromises. Just a setup that works for your
                body, your position, and your racing goals.
              </p>

              <p>
                The AeroStack ULTRA kit works seamlessly with spacers and
                components within the AeroStack Labs ecosystem, giving you a
                modular system that grows with your needs.
              </p>

              <p>
                The system comes complete with a 30 mm + 20 mm spacer kit, along
                with a 20 mm core spacer, allowing riders to create a fully
                modular stack setup.
              </p>

              <p>
                Depending on the configuration, the system enables stack heights
                of 20 mm, 40 mm, 50 mm, or 70 mm - giving you the freedom to
                fine-tune your fit, comfort, and aero position exactly the way
                you want it.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setSelectedImage("/images/tri-platform-2.jpg")}
            className="order-1 overflow-hidden rounded-[2rem] border border-white/10 bg-white transition hover:scale-[1.01] lg:order-2"
          >
            <img
              src="/images/tri-platform-2.jpg"
              alt="AeroStack ULTRA"
              className="w-full cursor-zoom-in object-cover"
            />
          </button>
        </section>

        <section className="mt-24 grid items-center gap-16 lg:grid-cols-2">
          <button
            type="button"
            onClick={() => setSelectedImage("/images/tri-platform-3.jpg")}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white transition hover:scale-[1.01]"
          >
            <img
              src="/images/tri-platform-3.jpg"
              alt="AeroStack ULTRA"
              className="w-full cursor-zoom-in object-cover"
            />
          </button>

          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Fully functional 2-in-1 solution.
            </h2>

            <p className="mt-8 text-lg leading-8 text-white/75">
              The system allows you to transform your Canyon bike into a
              functional triathlon setup - ideal for riders who do not need a
              dedicated TT bike.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-5xl border-t border-white/10 pt-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            Designed by riders, tested in real conditions.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/75">
            Every component is developed based on real-world use. Built by
            athletes, for athletes - with a clear focus on:
          </p>

          <ul className="mt-6 space-y-3 text-white/75">
            {[
              "Performance",
              "Safety",
              "Reliability",
              "Clean, aero design",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto mt-16 max-w-5xl border-t border-white/10 pt-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            Choose your own aerobars.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/75">
            We do not sell aerobars, but we are happy to advise clients on good
            and suitable options available on the market, based on our own
            personal testing and experience.
          </p>
        </section>

        <div className="mx-auto mt-16 max-w-5xl rounded-[2rem] border border-sky-400/20 bg-sky-400/10 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-sky-300">
                ORDER NOW
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                540 EUR
            </h2>

            <p className="mt-5 text-white/75">
                Interested in AeroStack ULTRA? Contact us to get order
                information and setup guidance.
            </p>

            <a
                href="mailto:contact@aerostacklabs.eu"
                className="mt-6 inline-block rounded-2xl bg-sky-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-sky-400"
            >
                Order Now
            </a>
        </div>
      </main>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Expanded AeroStack ULTRA"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl"
            onClick={(event) => event.stopPropagation()}
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
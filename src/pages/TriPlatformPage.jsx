import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const ULTRA_GALLERY = [
  "/images/aerostackultra1.jpg",
  "/images/aerostackultra2.jpg"
];

const DIFFERENT = [
  "Infinity Plate \u2013 freedom of choice \u2013 The Infinity Plate creates the foundation for a truly customizable aero cockpit, allowing you to use different aerobar and arm cup configurations instead of being locked into the original setup.",
  "CORE Spacer \u2013 designed to provide 20 mm of additional stack height in a single, solid component. While a standard Canyon Gear Groove spacer provides 10 mm of stack, one AeroStack CORE Spacer gives you 20 mm \u2013 allowing you to achieve the same height with fewer individual components in your spacer stack.",
  "More control over your position \u2013 Stack is only one part of a good aero fit. Tilt can change how your arms, shoulders and upper body interact with the cockpit \u2013 especially when spending hours in the aero position.",
  "Built for long-course riding \u2013 ULTRA is designed for riders who prioritize a stable and sustainable aero position for long-distance triathlon and time trial riding.",
  "One modular ecosystem \u2013 The system remains compatible with the AeroStack spacer ecosystem, allowing you to further customize your stack according to your individual bike fit."
];

const INCLUDED = [
  "1 \u00D7 AeroStack Infinity Plate",
  "PRO KIT (30+20 mm spacers)",
  "1 \u00D7 AeroStack CORE Spacer 20 mm height",
  "Required mounting hardware",
  "Aerobars and arm cups shown in product photos are not included unless specifically stated."
];

export default function TriPlatformPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="mb-8">
          <Link to="/products" className="text-sm text-sky-300 hover:text-sky-200">
            \u2190 Back to products
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <img
              src={ULTRA_GALLERY[0]}
              alt="AeroStack ULTRA"
              onClick={() => setSelectedImage(ULTRA_GALLERY[0])}
              className="w-full cursor-zoom-in rounded-2xl border border-white/10"
            />

            <div className="mt-4 grid grid-cols-2 gap-3">
              {ULTRA_GALLERY.slice(1).map((img, index) => (
                <img
                  key={img}
                  src={img}
                  alt={`AeroStack ULTRA view ${index + 2}`}
                  onClick={() => setSelectedImage(img)}
                  className="cursor-zoom-in rounded-xl border border-white/10 transition hover:opacity-80"
                />
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sky-300">
              Product
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight">
              AeroStack ULTRA
            </h1>

            <p className="mt-2 text-lg text-sky-300">
              Maximum freedom. Built around your position.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <span className="text-2xl font-semibold">550 EUR</span>
            </div>

            <p className="mt-6 text-lg leading-8 text-white/75">
              Maximum freedom. Built around your position. The AeroStack ULTRA combines the Infinity Plate with our CORE Spacer, giving you the freedom to choose your preferred aerobars while adding an optimized tilt to your cockpit. A complete platform for riders who want to take control of their aero position. Your fit. Your aerobars. Your system.
            </p>

            <p className="mt-6 whitespace-pre-line text-white/70">
              At the heart of the system is the AeroStack Infinity Plate, giving you the freedom to move beyond the limitations of the original cockpit and build your aero setup around the aerobars and arm cups that actually work for you.\n\nAeroStack ULTRA is designed for riders who want more than simply raising their cockpit.\n\nIt's for riders who want the freedom to choose their own aerobars, introduce tilt into their position and build the cockpit around their body \u2013 rather than adapting their body to the cockpit.\n\nNeed help building your configuration? Send us a photo of your current cockpit and tell us your current spacer setup and preferred aerobars. We'll help you determine the right AeroStack configuration.\n\nYour fit. Your aerobars. Your system. No limitations.
            </p>
            <div className="mt-8">
              <h2 className="text-xl font-semibold">What makes ULTRA different?</h2>
              <ul className="mt-4 space-y-3 text-white/75">
                {DIFFERENT.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold">What's included?</h2>
              <ul className="mt-4 space-y-3 text-white/75">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>{item}</span>
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


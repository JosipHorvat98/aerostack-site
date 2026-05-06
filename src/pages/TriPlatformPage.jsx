import Navbar from "../components/Navbar";

export default function TriPlatformPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
        <p className="text-sm uppercase tracking-[0.2em] text-sky-300">
          AeroStack TRI Platform System
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Build your aero setup your way.
        </h1>

        <div className="mt-10 space-y-8 text-lg leading-8 text-white/75">
          <p>
            The AeroStack TRI Platform System is our complete cockpit solution
            for Canyon riders who want more than the limitations of the standard
            Gear Groove system.
          </p>

          <p>
            While the stock Canyon Gear Groove Aero Extension offers a clean and
            integrated design, it comes with limited adjustability and restricts
            riders to a fixed setup.
          </p>

          <p className="text-xl font-semibold text-white">
            We built this system to change that.
          </p>
        </div>

        <section className="mt-16 border-t border-white/10 pt-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            Real adjustability where it matters.
          </h2>

          <ul className="mt-6 space-y-3 text-white/75">
            {[
              "Stack height range",
              "Adjustable tilt angle for better arm and shoulder positioning",
              "Improved fit and long-term comfort in the aero position",
              "Freedom to fine-tune your cockpit for real-world performance",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 border-t border-white/10 pt-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            Build YOUR aero setup YOUR way.
          </h2>

          <div className="mt-6 space-y-6 text-lg leading-8 text-white/75">
            <p>
              At the core of the system is a precision-engineered mounting
              platform called the AeroStack Infinity Plate, designed to allow
              the use of a wide variety of aerobars.
            </p>

            <p>
              No lock-in. No compromises. Just a setup that works for your body,
              your position, and your racing goals.
            </p>

            <p>
              The TRI Platform Kit works seamlessly with spacers and components
              within the AeroStack Labs ecosystem, giving you a modular system
              that grows with your needs.
            </p>
          </div>
        </section>

        <section className="mt-16 border-t border-white/10 pt-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            Fully functional 2-in-1 solution.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/75">
            The system allows you to transform your Canyon bike into a
            functional triathlon setup - ideal for riders who do not need a
            dedicated TT bike.
          </p>
        </section>

        <section className="mt-16 border-t border-white/10 pt-12">
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

        <section className="mt-16 border-t border-white/10 pt-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            Choose your own aerobars.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/75">
            We do not sell aerobars, but we are happy to advise clients on good
            and suitable options available on the market, based on our own
            personal testing and experience.
          </p>
        </section>

        <div className="mt-16 rounded-[2rem] border border-sky-400/20 bg-sky-400/10 p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-300">
            Preorder / Contact
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Detailed pricing and preorders - end of May 2026.
          </h2>

          <p className="mt-5 text-white/75">
            Interested in the AeroStack TRI Platform System? Contact us to get
            updates, preorder information, and setup guidance.
          </p>

          <a
            href="mailto:contact@aerostacklabs.eu"
            className="mt-6 inline-block rounded-2xl bg-sky-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-sky-400"
          >
            Contact / Preorder
          </a>
        </div>
      </main>
    </div>
  );
}
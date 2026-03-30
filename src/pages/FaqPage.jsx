import Navbar from "../components/Navbar";

export default function FaqPage() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white">
            <Navbar />

            <main className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
                <p className="text-sm uppercase tracking-[0.2em] text-sky-300">FAQ</p>

                <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Frequently Asked Questions
                </h1>

                <div className="mt-12 space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold">Who is this for?</h3>
                        <p className="mt-2 text-white/75">
                            Long-course triathletes, Ironman athletes, and anyone struggling to hold aero position.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">How much stack can I gain?</h3>
                        <p className="mt-2 text-white/75">
                            Depending on the setup, up to 105 mm total stack.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">Do you ship across Europe?</h3>
                        <p className="mt-2 text-white/75">
                            Yes, shipping is available EU-wide.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">How do I order?</h3>
                        <p className="mt-2 text-white/75">
                            Send your current setup and requirements to contact@aerostacklabs.com
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
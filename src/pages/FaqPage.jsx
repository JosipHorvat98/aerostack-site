import Navbar from "../components/Navbar";
export default function FaqPage() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white px-6 py-20">
            <div className="mx-auto max-w-4xl">
                <h1 className="text-4xl font-semibold tracking-tight">FAQ</h1>

                {/* Compatibility */}
                <section className="mt-12 space-y-6">
                    <h2 className="text-xl font-semibold text-sky-300 uppercase tracking-wide">
                        Compatibility
                    </h2>

                    <div>
                        <h3 className="font-medium">
                            Are AeroStack spacers only compatible with the Aeroad?
                        </h3>
                        <p className="mt-2 text-white/70">
                            No. AeroStack spacers are compatible with all Canyon bikes that support the Gear Groove aero extension system, meaning all models equipped with the CP0048 cockpit.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-medium">
                            Do I need to use original Canyon spacers?
                        </h3>
                        <p className="mt-2 text-white/70">
                            Yes. AeroStack spacers are designed to be used together with all original Canyon Gear Groove spacers to ensure proper fit and load distribution.
                        </p>
                    </div>
                </section>

                {/* Setup & Fit */}
                <section className="mt-12 space-y-6">
                    <h2 className="text-xl font-semibold text-sky-300 uppercase tracking-wide">
                        Setup & Fit
                    </h2>

                    <div>
                        <h3 className="font-medium">
                            Will this fix neck or upper back pain in aero position?
                        </h3>
                        <p className="mt-2 text-white/70">
                            In most cases — yes. If the issue is caused by a front end that is too low (which is common), increasing stack height significantly improves comfort and sustainability.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-medium">
                            Is an angled spacer enough on its own?
                        </h3>
                        <p className="mt-2 text-white/70">
                            Usually not. An angled spacer improves wrist angle and comfort, but does not solve stack height limitations. The biggest improvement typically comes from increasing stack height.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-medium">
                            Which setup should I choose?
                        </h3>
                        <ul className="mt-2 space-y-1 text-white/70">
                            <li>• 30 mm → small adjustment</li>
                            <li>• 30 + 20 mm (Pro / Elite) → best balance for most riders</li>
                            <li>• Pinnacle → maximum adjustability (stack + reach + tilt)</li>
                        </ul>
                    </div>
                </section>

                {/* Technical */}
                <section className="mt-12 space-y-6">
                    <h2 className="text-xl font-semibold text-sky-300 uppercase tracking-wide">
                        Technical
                    </h2>

                    <div>
                        <h3 className="font-medium">
                            What material are the spacers made from?
                        </h3>
                        <p className="mt-2 text-white/70">
                            High-quality aluminium, precision CNC-machined and anodized for improved durability and surface finish.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-medium">Are bolts included?</h3>
                        <p className="mt-2 text-white/70">
                            Yes. Each set includes high-strength bolts matched to your configuration.
                        </p>
                        <ul className="mt-2 text-white/70">
                            <li>• Full 30 + 20 mm setup</li>
                            <li>• 30 mm only configuration</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-medium">Is the setup safe?</h3>
                        <p className="mt-2 text-white/70">
                            The spacers are designed to handle real-world loads and have been tested during long-duration riding. Proper installation and correct bolt configuration are essential.
                        </p>
                    </div>
                </section>

                {/* Ordering & Shipping */}
                <section className="mt-12 space-y-6">
                    <h2 className="text-xl font-semibold text-sky-300 uppercase tracking-wide">
                        Ordering & Shipping
                    </h2>

                    <div>
                        <h3 className="font-medium">Where do you ship from?</h3>
                        <p className="mt-2 text-white/70">From Croatia (EU).</p>
                    </div>

                    <div>
                        <h3 className="font-medium">Do you ship internationally?</h3>
                        <p className="mt-2 text-white/70">
                            Yes — shipping is available across Europe and worldwide.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-medium">How much is shipping?</h3>
                        <ul className="mt-2 text-white/70">
                            <li>• EU: typically 18–28 €</li>
                            <li>• Switzerland: ~60 €</li>
                            <li>• Worldwide: on request</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-medium">What payment methods are available?</h3>
                        <ul className="mt-2 text-white/70">
                            <li>• PayPal</li>
                            <li>• IBAN bank transfer</li>
                        </ul>
                    </div>
                </section>

                {/* Product Philosophy */}
                <section className="mt-12 space-y-6">
                    <h2 className="text-xl font-semibold text-sky-300 uppercase tracking-wide">
                        Product Philosophy
                    </h2>

                    <div>
                        <h3 className="font-medium">
                            Why are AeroStack spacers more expensive than basic spacers?
                        </h3>
                        <p className="mt-2 text-white/70">
                            They are not just small adjustment parts. They are a complete solution to the stack limitation problem, developed through multiple prototypes and real-world testing.
                        </p>
                        <p className="mt-2 text-white/70">
                            Produced in small batches with precision machining and matched hardware — this is a functional, load-bearing component, not a generic spacer.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-medium">
                            Is this a DIY or experimental product?
                        </h3>
                        <p className="mt-2 text-white/70">
                            No. This is a refined solution developed from real use in long-distance triathlon, with a focus on function, reliability, and repeatability.
                        </p>
                    </div>
                </section>

                {/* Support */}
                <section className="mt-12 space-y-6">
                    <h2 className="text-xl font-semibold text-sky-300 uppercase tracking-wide">
                        Support
                    </h2>

                    <div>
                        <h3 className="font-medium">
                            Can you help me choose the right setup?
                        </h3>
                        <p className="mt-2 text-white/70">
                            Yes. Send your current setup and riding goals, and you’ll get a tailored recommendation.
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <div className="mt-16 rounded-2xl border border-sky-400/20 bg-sky-400/10 p-6 text-center text-sky-100">
                    Still unsure? Send a message — we’ll help you dial in your setup.
                </div>
            </div>
        </div>
    );
}
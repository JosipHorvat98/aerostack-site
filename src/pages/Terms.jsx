import Navbar from "../components/Navbar";

export default function Terms() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white">
            <Navbar />

            <main className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
                <p className="text-sm uppercase tracking-[0.2em] text-sky-300">
                    Terms & Conditions
                </p>

                <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Terms & Conditions
                </h1>

                <div className="mt-12 space-y-10">
                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-sky-300 uppercase tracking-wide">
                            General
                        </h2>
                        <p className="text-white/70">
                            By purchasing from AeroStack Labs, you agree to the following
                            terms and conditions.
                        </p>
                        <p className="text-white/70">
                            All products are aftermarket components designed for use with
                            compatible Canyon systems, but are not affiliated with or endorsed
                            by Canyon.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-sky-300 uppercase tracking-wide">
                            Orders
                        </h2>
                        <p className="text-white/70">
                            All orders are confirmed once payment is received.
                        </p>
                        <p className="text-white/70">
                            Products are manufactured in small batches, which may affect
                            availability and delivery times.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-sky-300 uppercase tracking-wide">
                            Pricing
                        </h2>
                        <p className="text-white/70">All prices are listed in EUR (€).</p>
                        <p className="text-white/70">
                            Prices do not include shipping costs unless explicitly stated.
                        </p>
                        <p className="text-white/70">
                            AeroStack Labs reserves the right to change pricing at any time.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-sky-300 uppercase tracking-wide">
                            Payment
                        </h2>
                        <p className="text-white/70">Accepted payment methods:</p>
                        <ul className="space-y-2 text-white/70">
                            <li>• PayPal</li>
                            <li>• IBAN bank transfer</li>
                            <li>• Revolut</li>
                        </ul>
                        <p className="text-white/70">
                            Orders are processed only after full payment is received.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-sky-300 uppercase tracking-wide">
                            Shipping
                        </h2>
                        <p className="text-white/70">Products are shipped from Croatia (EU).</p>
                        <p className="text-white/70">Estimated shipping costs:</p>
                        <ul className="space-y-2 text-white/70">
                            <li>• EU: 18–28 €</li>
                            <li>• Switzerland: ~60 €</li>
                            <li>• Worldwide: on request</li>
                        </ul>
                        <p className="text-white/70">
                            Delivery times may vary depending on location and carrier.
                        </p>
                        <p className="text-white/70">
                            AeroStack Labs is not responsible for delays caused by shipping
                            providers or customs.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-sky-300 uppercase tracking-wide">
                            Product Use
                        </h2>
                        <p className="text-white/70">
                            All products must be installed correctly.
                        </p>
                        <p className="text-white/70">
                            By purchasing, the customer accepts full responsibility for:
                        </p>
                        <ul className="space-y-2 text-white/70">
                            <li>• correct installation</li>
                            <li>• proper use</li>
                            <li>• regular inspection of components</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-sky-300 uppercase tracking-wide">
                            Limitation of Liability
                        </h2>
                        <p className="text-white/70">AeroStack Labs is not liable for:</p>
                        <ul className="space-y-2 text-white/70">
                            <li>• damage to equipment</li>
                            <li>• personal injury</li>
                            <li>• improper installation or misuse</li>
                        </ul>
                        <p className="text-white/70">
                            Use of the product is at the customer’s own risk.
                        </p>
                    </section>

                    <section className="space-y-6 border-t border-white/10 pt-10">
                        <h2 className="text-xl font-semibold text-sky-300 uppercase tracking-wide">
                            Return & Refund Policy
                        </h2>

                        <div className="space-y-4">
                            <h3 className="font-medium text-white">Returns</h3>
                            <p className="text-white/70">
                                Due to the nature of the product (small-batch, performance
                                components), returns are limited.
                            </p>
                            <p className="text-white/70">Returns are accepted only if:</p>
                            <ul className="space-y-2 text-white/70">
                                <li>• the product is unused</li>
                                <li>• the product is returned in original condition</li>
                                <li>• return is requested within 14 days of delivery</li>
                            </ul>
                            <p className="text-white/70">Shipping costs are non-refundable.</p>
                            <p className="text-white/70">
                                Return shipping is the responsibility of the customer.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-medium text-white">Refunds</h3>
                            <p className="text-white/70">
                                Refunds are issued after the product is received and inspected.
                            </p>
                            <p className="text-white/70">
                                If the product shows signs of use or damage, a full refund may
                                not be possible.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-medium text-white">Damaged or Defective Products</h3>
                            <p className="text-white/70">
                                If the product arrives damaged or does not meet expectations,
                                please contact us within 48 hours of delivery, including photos.
                            </p>
                            <p className="text-white/70">
                                AeroStack Labs will offer replacement, partial refund, or another
                                appropriate solution.
                            </p>
                            <p className="text-white/70">
                                Customer satisfaction is taken seriously, and each case will be
                                handled individually.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-medium text-white">Custom / Modified Orders</h3>
                            <p className="text-white/70">
                                Custom configurations or modified sets are non-refundable, unless defective.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-6 border-t border-white/10 pt-10">
                        <h2 className="text-xl font-semibold text-sky-300 uppercase tracking-wide">
                            Legal Disclaimer
                        </h2>

                        <p className="text-white/70">
                            AeroStack components are aftermarket parts and are not affiliated
                            with, endorsed by, or approved by Canyon Bicycles GmbH.
                        </p>

                        <p className="text-white/70">
                            All products are designed specifically for compatibility with
                            Canyon bikes equipped with the Gear Groove aero extension system
                            (CP0048 cockpit), but are used at the user’s own risk.
                        </p>

                        <div className="space-y-4">
                            <h3 className="font-medium text-white">Installation & Use</h3>
                            <p className="text-white/70">
                                Proper installation is essential for safe use.
                            </p>
                            <p className="text-white/70">
                                By purchasing and using AeroStack products, the user acknowledges that:
                            </p>
                            <ul className="space-y-2 text-white/70">
                                <li>• installation must be performed correctly, using appropriate tools and torque specifications</li>
                                <li>• all components must be checked regularly for tightness and condition</li>
                                <li>• incorrect installation or misuse may result in damage, injury, or component failure</li>
                            </ul>
                            <p className="text-white/70">
                                AeroStack Labs cannot be held responsible for any damage or injury
                                resulting from improper installation or use.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-medium text-white">Product Use</h3>
                            <p className="text-white/70">
                                AeroStack spacers alter the original cockpit configuration and may
                                affect load distribution on components.
                            </p>
                            <p className="text-white/70">
                                The user assumes full responsibility for ensuring that their setup
                                is safe and suitable for their riding conditions.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-medium text-white">Liability Limitation</h3>
                            <p className="text-white/70">
                                To the fullest extent permitted by law, AeroStack Labs shall not
                                be liable for:
                            </p>
                            <ul className="space-y-2 text-white/70">
                                <li>• any direct or indirect damage</li>
                                <li>• personal injury</li>
                                <li>• loss resulting from the use or misuse of the product</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-medium text-white">Compatibility Notice</h3>
                            <p className="text-white/70">
                                It is the user’s responsibility to ensure compatibility with their
                                specific bike and setup.
                            </p>
                            <p className="text-white/70">
                                If in doubt, consultation with a qualified bike fitter or mechanic
                                is recommended.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-medium text-white">No Warranty on Misuse</h3>
                            <p className="text-white/70">
                                Any modification, misuse, or incorrect assembly of the product
                                voids any form of implied warranty.
                            </p>
                        </div>
                    </section>
                </div>

                <div className="mt-16 rounded-2xl border border-sky-400/20 bg-sky-400/10 p-6 text-center text-sky-100">
                    By purchasing from AeroStack Labs, you acknowledge and accept these
                    terms, conditions, and usage limitations.
                </div>
            </main>
        </div>
    );
}
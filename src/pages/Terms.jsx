export default function Terms() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white">
            <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10">

                <h1 className="text-3xl font-semibold tracking-tight">
                    Terms & Conditions
                </h1>

                <div className="mt-10 space-y-12 text-sm leading-7 text-white/70">

                    <section>
                        <h2 className="text-white font-semibold mb-2">General</h2>
                        <p>
                            By purchasing from AeroStack Labs, you agree to the following terms and conditions.
                        </p>
                        <p className="mt-3">
                            All products are aftermarket components designed for use with compatible Canyon systems,
                            but are not affiliated with or endorsed by Canyon.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white font-semibold mb-2">Orders</h2>
                        <p>
                            All orders are confirmed once payment is received.
                        </p>
                        <p className="mt-3">
                            Products are manufactured in small batches, which may affect availability and delivery times.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white font-semibold mb-2">Pricing</h2>
                        <p>All prices are listed in EUR (€).</p>
                        <p className="mt-3">
                            Prices do not include shipping costs unless explicitly stated.
                        </p>
                        <p className="mt-3">
                            AeroStack Labs reserves the right to change pricing at any time.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white font-semibold mb-2">Payment</h2>
                        <ul className="space-y-2">
                            <li>• PayPal</li>
                            <li>• IBAN bank transfer</li>
                            <li>• Revolut</li>
                        </ul>
                        <p className="mt-3">
                            Orders are processed only after full payment is received.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white font-semibold mb-2">Shipping</h2>
                        <p>Products are shipped from Croatia (EU).</p>
                        <ul className="mt-3 space-y-2">
                            <li>• EU: 18–28 €</li>
                            <li>• Switzerland: ~60 €</li>
                            <li>• Worldwide: on request</li>
                        </ul>
                        <p className="mt-3">
                            Delivery times may vary depending on location and carrier.
                        </p>
                        <p className="mt-3">
                            AeroStack Labs is not responsible for delays caused by shipping providers or customs.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white font-semibold mb-2">Product Use</h2>
                        <ul className="space-y-2">
                            <li>• correct installation</li>
                            <li>• proper use</li>
                            <li>• regular inspection of components</li>
                        </ul>
                        <p className="mt-3">
                            All products must be installed correctly. The customer accepts full responsibility for usage.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white font-semibold mb-2">Limitation of Liability</h2>
                        <ul className="space-y-2">
                            <li>• damage to equipment</li>
                            <li>• personal injury</li>
                            <li>• improper installation or misuse</li>
                        </ul>
                        <p className="mt-3">
                            Use of the product is at the customer’s own risk.
                        </p>
                    </section>

                    <section className="pt-6 border-t border-white/10">
                        <h2 className="text-white font-semibold mb-2">Return & Refund Policy</h2>

                        <h3 className="mt-4 text-white">Returns</h3>
                        <ul className="mt-2 space-y-2">
                            <li>• product is unused</li>
                            <li>• returned in original condition</li>
                            <li>• request within 14 days of delivery</li>
                        </ul>
                        <p className="mt-3">Shipping costs are non-refundable.</p>
                        <p className="mt-1">Return shipping is the responsibility of the customer.</p>

                        <h3 className="mt-6 text-white">Refunds</h3>
                        <p className="mt-2">
                            Refunds are issued after the product is received and inspected.
                        </p>

                        <h3 className="mt-6 text-white">Damaged or Defective Products</h3>
                        <p className="mt-2">
                            Contact within 48 hours with photos. A solution will be provided
                            (replacement, partial refund, or alternative).
                        </p>

                        <h3 className="mt-6 text-white">Custom Orders</h3>
                        <p className="mt-2">
                            Custom or modified configurations are non-refundable unless defective.
                        </p>
                    </section>

                    <section className="pt-6 border-t border-white/10">
                        <h2 className="text-white font-semibold mb-2">Legal Disclaimer</h2>

                        <p>
                            AeroStack components are aftermarket parts and are not affiliated with,
                            endorsed by, or approved by Canyon Bicycles GmbH.
                        </p>

                        <h3 className="mt-6 text-white">Installation & Use</h3>
                        <ul className="mt-2 space-y-2">
                            <li>• correct tools and torque specs required</li>
                            <li>• regular inspection required</li>
                            <li>• misuse can cause damage or injury</li>
                        </ul>

                        <h3 className="mt-6 text-white">Product Use</h3>
                        <p className="mt-2">
                            AeroStack spacers alter the cockpit configuration and may affect load distribution.
                        </p>

                        <h3 className="mt-6 text-white">Liability Limitation</h3>
                        <ul className="mt-2 space-y-2">
                            <li>• direct or indirect damage</li>
                            <li>• personal injury</li>
                            <li>• misuse-related loss</li>
                        </ul>

                        <h3 className="mt-6 text-white">Compatibility Notice</h3>
                        <p className="mt-2">
                            The user is responsible for verifying compatibility with their setup.
                        </p>

                        <h3 className="mt-6 text-white">No Warranty on Misuse</h3>
                        <p className="mt-2">
                            Any modification or incorrect assembly voids warranty.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}
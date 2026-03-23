export default function App() {
    const products = [
        {
            name: "AeroStack Riser Kit",
            subtitle: "30 mm + 20 mm stack risers",
            description:
                "Precision-machined aluminium risers developed specifically for Canyon Gear Groove aero extensions. Designed to make long aero efforts more sustainable.",
            details: [
                "CNC-machined aluminium",
                "Works with original Canyon spacers",
                "High-strength bolts included",
                "Built for real-world riding"
            ],
            price: "199 €"
        },
        {
            name: "AeroStack Tilt",
            subtitle: "15° angled spacer",
            description:
                "An angled option focused on wrist comfort and hand position, for riders who want more tilt without changing the whole setup philosophy.",
            details: [
                "15° tilt",
                "Clean cockpit integration",
                "Comfort-focused geometry",
                "Small-batch production"
            ],
            price: "Coming soon"
        },
        {
            name: "AeroStack Reach",
            subtitle: "15° tilt + 20 mm stack + 30 mm reach",
            description:
                "A more aggressive option for riders who need both additional height and a more forward aero position.",
            details: [
                "15° tilt",
                "+20 mm stack",
                "+30 mm reach",
                "Purpose-built geometry"
            ],
            price: "Coming soon"
        }
    ];

    const testimonials = [
        {
            quote:
                "Finally enough stack to make the aero position usable for longer rides.",
            source: "Rider feedback"
        },
        {
            quote:
                "Exactly the missing piece for my Aeroad setup.",
            source: "Rider feedback"
        },
        {
            quote:
                "The real gain was being able to stay aero comfortably, not just adding height.",
            source: "Long-course rider"
        }
    ];

    return (
        <div className="min-h-screen bg-neutral-950 text-white">
            <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/85 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-400/30 bg-white/5">
                            <div className="space-y-1">
                                <div className="mx-auto h-0 w-0 border-l-[8px] border-r-[8px] border-b-[10px] border-l-transparent border-r-transparent border-b-sky-400" />
                                <div className="mx-auto h-0 w-0 border-l-[10px] border-r-[10px] border-b-[8px] border-l-transparent border-r-transparent border-b-sky-500" />
                                <div className="mx-auto h-0 w-0 border-l-[12px] border-r-[12px] border-b-[8px] border-l-transparent border-r-transparent border-b-blue-700" />
                            </div>
                        </div>
                        <div>
                            <div className="text-lg font-semibold tracking-tight">AeroStack Labs</div>
                            <div className="text-xs text-sky-300">More stack. More aero time.</div>
                        </div>
                    </div>
                    <nav className="hidden items-center gap-6 text-sm text-white/75 md:flex">
                        <a href="#products" className="transition hover:text-white">Products</a>
                        <a href="#story" className="transition hover:text-white">Story</a>
                        <a href="#reviews" className="transition hover:text-white">Feedback</a>
                        <a href="#order" className="transition hover:text-white">Order</a>
                    </nav>
                </div>
            </header>

            <main>
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.16),_transparent_30%)]" />
                    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-28">
                        <div className="relative z-10">
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-1.5 text-sm text-sky-200">
                                Precision cockpit components for Canyon Gear Groove setups
                            </div>
                            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                                Increase stack height and make your aero position actually usable.
                            </h1>
                            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                                Developed during real Ironman preparation, AeroStack components solve one of the most common limitations of the Canyon Gear Groove aero extension system: not enough stack for a sustainable aero position.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <a
                                    href="#products"
                                    className="rounded-2xl bg-sky-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-sky-400"
                                >
                                    View products
                                </a>
                                <a
                                    href="#order"
                                    className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                                >
                                    Order / contact
                                </a>
                            </div>
                            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
                                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                                    <div className="text-2xl font-semibold">80 mm</div>
                                    <div className="mt-1 text-sm text-white/65">Example front-end setup achieved</div>
                                </div>
                                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                                    <div className="text-2xl font-semibold">EU-wide</div>
                                    <div className="mt-1 text-sm text-white/65">Shipping available across Europe</div>
                                </div>
                                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                                    <div className="text-2xl font-semibold">Small batch</div>
                                    <div className="mt-1 text-sm text-white/65">Built in limited production runs</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-sky-950/30">
                                <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-6">
                                    <div className="flex h-full flex-col justify-between">
                                        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/40">
                                            <span>AeroStack Labs</span>
                                            <span>Gear Groove</span>
                                        </div>
                                        <div className="mx-auto w-full max-w-sm rounded-[2rem] border border-white/10 bg-neutral-900/80 p-5">
                                            <div className="mb-5 flex items-center gap-3 text-sm text-white/60">
                                                <div className="h-3 w-3 rounded-full bg-sky-400" />
                                                Stack riser concept
                                            </div>
                                            <div className="space-y-3">
                                                <div className="h-12 rounded-2xl bg-neutral-800" />
                                                <div className="mx-auto h-24 w-20 rounded-[1.5rem] bg-gradient-to-b from-neutral-700 to-neutral-900" />
                                                <div className="h-12 rounded-2xl bg-neutral-800" />
                                            </div>
                                            <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs text-white/55">
                                                <div className="rounded-xl border border-white/10 bg-white/5 px-2 py-2">30 mm</div>
                                                <div className="rounded-xl border border-white/10 bg-white/5 px-2 py-2">20 mm</div>
                                                <div className="rounded-xl border border-white/10 bg-white/5 px-2 py-2">15° tilt</div>
                                            </div>
                                        </div>
                                        <div className="rounded-[1.5rem] border border-sky-400/20 bg-sky-400/10 p-4 text-sm text-sky-100">
                                            "The biggest difference wasn’t just more height — it was finally being able to stay aero comfortably for long periods."
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="story" className="border-t border-white/10 bg-neutral-900">
                    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10">
                        <div>
                            <p className="text-sm uppercase tracking-[0.2em] text-sky-300">The problem</p>
                            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                                Canyon built a clean aero extension system. The stack range is where many riders hit the wall.
                            </h2>
                        </div>
                        <div className="space-y-6 text-lg leading-8 text-white/75">
                            <p>
                                Many riders discover the same thing after a bike fit or a few longer rides: the Gear Groove setup looks excellent, but the stock front-end height can still leave the aero position just a bit too low to hold comfortably for long-course efforts.
                            </p>
                            <p>
                                AeroStack Labs started as a personal solution for that exact issue. After several prototypes and real-world testing, the result was a small-batch riser system that made the aero position more sustainable, more repeatable, and more useful outside of short test rides.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="products" className="border-t border-white/10">
                    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
                        <div className="max-w-3xl">
                            <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Products</p>
                            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                                Components built around the Canyon Gear Groove interface.
                            </h2>
                        </div>

                        <div className="mt-12 grid gap-6 lg:grid-cols-3">
                            {products.map((product) => (
                                <div key={product.name} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-2xl font-semibold tracking-tight">{product.name}</h3>
                                            <p className="mt-1 text-sm text-sky-300">{product.subtitle}</p>
                                        </div>
                                        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-white/75">
                                            {product.price}
                                        </span>
                                    </div>
                                    <p className="mt-5 text-base leading-7 text-white/70">{product.description}</p>
                                    <ul className="mt-6 space-y-3 text-sm text-white/75">
                                        {product.details.map((detail) => (
                                            <li key={detail} className="flex items-center gap-3">
                                                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="reviews" className="border-t border-white/10 bg-neutral-900">
                    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
                        <div className="max-w-3xl">
                            <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Feedback</p>
                            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                                What riders keep coming back to isn’t the spacer itself — it’s finally being able to stay aero comfortably.
                            </h2>
                        </div>
                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                            {testimonials.map((item) => (
                                <div key={item.quote} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                                    <p className="text-lg leading-8 text-white/85">“{item.quote}”</p>
                                    <p className="mt-4 text-sm text-sky-300">{item.source}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="order" className="border-t border-white/10">
                    <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_0.9fr] lg:px-10">
                        <div>
                            <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Order / Contact</p>
                            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                                Tell us your current setup and what you’re trying to achieve.
                            </h2>
                            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
                                The easiest way to start is by sharing your current Gear Groove configuration, how much extra stack you think you need, and whether you also want tilt or reach. From there, the right setup is easy to discuss.
                            </p>
                        </div>
                        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                            <div className="space-y-5 text-base text-white/80">
                                <div>
                                    <div className="text-sm text-white/45">Email</div>
                                    <div className="mt-1 text-lg font-medium">contact@aerostacklabs.com</div>
                                </div>
                                <div>
                                    <div className="text-sm text-white/45">Typical info to include</div>
                                    <ul className="mt-3 space-y-2 text-white/70">
                                        <li>Current setup / spacers in use</li>
                                        <li>Target stack increase</li>
                                        <li>Country for shipping</li>
                                        <li>Whether you also need tilt or reach</li>
                                    </ul>
                                </div>
                                <div className="rounded-[1.5rem] border border-sky-400/20 bg-sky-400/10 p-4 text-sm text-sky-100">
                                    Small-batch production. EU shipping available. Built from one triathlete’s problem, now helping other riders solve the same one.
                                </div>
                            </div>
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
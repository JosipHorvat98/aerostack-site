import Navbar from "../components/Navbar";

export default function StoryPage() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white">
            <Navbar />

            <main className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
                <p className="text-sm uppercase tracking-[0.2em] text-sky-300">The Story</p>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                    The Story page
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
                    About AeroStack Labs

                    AeroStack Labs was created to solve a real problem.

                    One of the founders is a long-distance triathlete, who found that existing solutions for the Canyon Gear Groove system didn’t allow a sustainable aero position. The front end was simply too low — and nothing on the market truly fixed it.

                    So a new solution was developed.

                    What started as a personal need evolved into a refined system, shaped through multiple prototypes and real-world testing.

                    Today, AeroStack Labs offers purpose-built components designed to help riders achieve a position they can actually hold — not just for minutes, but for the entire ride.

                    From (tri)athletes to (tri)athletes.
                </p>
            </main>
        </div>
    );
}
import Navbar from "../components/Navbar";

export default function StoryPage() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white">
            <Navbar />

            <main className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
                <p className="text-sm uppercase tracking-[0.2em] text-sky-300">
                    The Story
                </p>

                <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Built from a real problem.
                </h1>

                <div className="mt-10 space-y-8 text-lg leading-8 text-white/75">
                    <p>
                        AeroStack Labs was created to solve a real problem. One of the founders is a long-distance triathlete who found that existing solutions for the Canyon Gear Groove system did not allow a sustainable aero position. The front end was simply too low, and nothing on the market truly fixed it.
                    </p>

                    <p>
                        So a new solution was developed. What started as a personal need evolved into a refined system, shaped through multiple prototypes and real-world testing.
                    </p>

                    <p>
                        Today, AeroStack Labs offers purpose-built components designed to help riders achieve a position they can actually hold, not just for minutes, but for the entire ride.
                    </p>
                </div>

                <div className="mt-16 border-t border-white/10 pt-12">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Two bikes in one.
                    </h2>

                    <div className="mt-6 space-y-6 text-lg leading-8 text-white/75">
                        <p>
                            Not everyone wants or needs a dedicated TT bike. For many riders, one bike has to do it all: long rides, climbing, racing, and still be capable in an aero position.
                        </p>

                        <p>
                            Instead of forcing a road bike into a position it was not designed for, the goal became clear: create a system that bridges that gap.
                        </p>

                        <p>
                            A setup that keeps the versatility of a road bike, but unlocks the ability to ride efficiently in aero for extended periods.
                        </p>
                    </div>
                </div>

                <div className="mt-16 border-t border-white/10 pt-12">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        A smarter way to ride aero.
                    </h2>

                    <div className="mt-6 space-y-6 text-lg leading-8 text-white/75">
                        <p>
                            This is not about chasing a perfect TT position on paper. It is about finding a position that works in the real world, one you can actually hold when it matters.
                        </p>

                        <p>
                            For riders who want two bikes in one, without compromising on function, comfort, or reliability.
                        </p>
                    </div>
                </div>

                <div className="mt-20 border-t border-white/10 pt-10">
                    <p className="text-sm uppercase tracking-[0.2em] text-sky-300">
                        From (tri)athletes to (tri)athletes
                    </p>
                </div>
            </main>
        </div>
    );
}
import Navbar from "../components/Navbar";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white">
            <Navbar />

            <main className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
                <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Contact</p>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Contact page
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
                    
                </p>

                <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-6">
                    <div className="text-sm text-white/45">Email</div>
                    <div className="mt-2 text-xl font-medium">contact@aerostacklabs.eu</div>
                </div>
            </main>
        </div>
    );
}
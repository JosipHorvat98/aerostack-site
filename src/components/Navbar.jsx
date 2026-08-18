import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-4" onClick={closeMenu}>
          <div className="relative">
            <div className="flex h-16 w-24 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-2 shadow-sm">
              <img
                src={logo}
                alt="AeroStack Labs"
                className="max-h-full w-full object-contain"
              />
            </div>

            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-sky-400/25 to-blue-600/15 blur-lg" />
          </div>

          <div>
            <div className="text-lg font-semibold tracking-tight text-white">
              AeroStack Labs
            </div>

            <div className="text-xs text-sky-300">
              More stack. More aero time.
            </div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wide text-white/85 md:flex">
          <Link to="/story" className="transition hover:text-sky-300">
            The Story
          </Link>

          <Link to="/products" className="transition hover:text-sky-300">
            Products
          </Link>

          <Link to="/apparel" className="transition hover:text-sky-300">
            Apparel
          </Link>

          <Link to="/contact" className="transition hover:text-sky-300">
            Contact
          </Link>

          <Link to="/faq" className="transition hover:text-sky-300">
            FAQ
          </Link>

          <Link to="/terms" className="transition hover:text-sky-300">
            Terms
          </Link>
          <div className="ml-4 flex items-center gap-3 border-l border-white/10 pl-6">
  <a
    href="https://www.instagram.com/aerostacklabs/"
    target="_blank"
    rel="noreferrer"
    className="transition hover:scale-110 hover:opacity-80"
    aria-label="Instagram"
  >
    <img
      src="/icons/instagram.png"
      alt="Instagram"
      className="h-7 w-7 rounded-full"
    />
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61576505266728"
    target="_blank"
    rel="noreferrer"
    className="transition hover:scale-110 hover:opacity-80"
    aria-label="Facebook"
  >
    <img
      src="/icons/facebook.png"
      alt="Facebook"
      className="h-7 w-7 rounded-full"
    />
  </a>
</div>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-white" />
            <span className="block h-0.5 w-5 rounded-full bg-white" />
            <span className="block h-0.5 w-5 rounded-full bg-white" />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-neutral-950 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white/85">
            
            <Link
              to="/story"
              onClick={closeMenu}
              className="border-b border-white/10 py-3 transition hover:text-sky-300"
            >
              The Story
            </Link>

            <Link
              to="/products"
              onClick={closeMenu}
              className="border-b border-white/10 py-3 transition hover:text-sky-300"
            >
              Products
            </Link>

            <Link
              to="/apparel"
              onClick={closeMenu}
              className="border-b border-white/10 py-3 transition hover:text-sky-300"
            >
              Apparel
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="border-b border-white/10 py-3 transition hover:text-sky-300"
            >
              Contact
            </Link>

            <Link
              to="/faq"
              onClick={closeMenu}
              className="border-b border-white/10 py-3 transition hover:text-sky-300"
            >
              FAQ
            </Link>

            <Link
              to="/terms"
              onClick={closeMenu}
              className="py-3 transition hover:text-sky-300"
            >
              Terms
            </Link>
            <div className="flex items-center gap-5 pt-4">
  <a
    href="https://www.instagram.com/aerostacklabs/"
    target="_blank"
    rel="noreferrer"
  >
    <img
      src="/icons/instagram.png"
      alt="Instagram"
      className="h-8 w-8 rounded-full"
    />
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61576505266728"
    target="_blank"
    rel="noreferrer"
  >
    <img
      src="/icons/facebook.png"
      alt="Facebook"
      className="h-8 w-8 rounded-full"
    />
  </a>
</div>
          </nav>
        </div>
      )}
    </header>
  );
}
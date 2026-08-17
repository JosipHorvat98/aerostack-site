import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const price = product.salePrice || product.price;

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1.5 hover:border-sky-400/40 hover:bg-white/[0.06] hover:shadow-[0_24px_60px_-28px_rgba(56,189,248,0.45)]"
    >
      <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/5 aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-sm font-semibold text-white backdrop-blur">
          {price}
        </span>

        {product.oldPrice && (
          <span className="absolute right-3 top-3 rounded-full bg-black/50 px-2 py-1 text-xs text-white/45 line-through backdrop-blur">
            {product.oldPrice}
          </span>
        )}
      </div>

      <h3 className="text-xl font-semibold tracking-tight text-white">
        {product.name}
      </h3>

      <p className="mt-1 text-sm text-sky-300">{product.subtitle}</p>

      <p className="mt-4 line-clamp-3 flex-1 text-sm leading-6 text-white/60">
        {product.description}
      </p>

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
        {product.availability ? (
          <span className="rounded-full bg-sky-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-sky-300">
            {product.availability}
          </span>
        ) : product.price === "Coming soon" ? (
          <span className="text-[10px] font-semibold uppercase tracking-wide text-sky-300">
            Coming soon
          </span>
        ) : null}

        <span className="ml-auto text-xs font-semibold uppercase tracking-wide text-sky-300 transition group-hover:text-sky-200">
          View&nbsp;→
        </span>
      </div>
    </Link>
  );
}

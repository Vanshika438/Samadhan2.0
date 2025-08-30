import React from "react";

export default function ProductCard({ title, price, rating, image, tags = [] }) {
  return (
    <article className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition w-full">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-44 object-cover rounded-xl"
        />
        {/* Sale ribbon example */}
        {tags.includes("Sale") && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            Sale
          </span>
        )}
      </div>

      <h3 className="mt-3 text-lg font-semibold leading-snug">{title}</h3>

      <div className="mt-1 flex items-center justify-between">
        <span className="text-gray-800 font-medium">₹{price}</span>
        <span className="text-yellow-500 text-sm" aria-hidden>
          {"★".repeat(Math.round(rating))}
        </span>
      </div>

      <div className="mt-3 flex gap-2 flex-wrap">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700"
          >
            {t}
          </span>
        ))}
      </div>

      <button className="mt-4 w-full rounded-xl border border-gray-200 py-2 text-sm font-medium hover:bg-gray-50">
        Add to cart
      </button>
    </article>
  );
}

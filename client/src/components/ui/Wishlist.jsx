import React from "react";

const products = [
  {
    id: 1,
    name: "Macbook Pro",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spacegray-select-202110?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1632788571000",
    price: "$1999",
  },
  {
    id: 2,
    name: "Red Jacket",
    img: "https://images.unsplash.com/photo-1520975922296-4bde8ad9f4c9?auto=format&fit=crop&w=400&q=80",
    price: "$120",
  },
];

const recommended = [
  {
    id: 1,
    name: "iPhone 14 Pro 512GB Gold",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-gold-select-202209?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1660753619946",
    price: "$1437",
  },
  {
    id: 2,
    name: "AirPods Max Silver",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-silver-select-202011?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1604709293000",
    price: "$549",
  },
  {
    id: 3,
    name: "Apple Watch Series 9 GPS 41mm",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MYDY2_VW_PF+watch-41-alum-spacegray-nc-9s_VW_PF_WF_CO_GEO_EMEA?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1693001731184",
    price: "$399",
  },
  {
    id: 4,
    name: "iPhone 15 Pro 1TB Gold",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-gold-select?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1692895108154",
    price: "$1499",
  },
];

function ProductCard({ item }) {
  return (
    <div className="bg-white shadow-sm rounded-2xl p-4 flex flex-col items-center hover:shadow-lg transition">
      <img
        src={item.img}
        alt={item.name}
        className="w-48 h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="font-semibold text-gray-800 text-lg">{item.name}</h3>
      {item.price && <p className="text-gray-600 my-2">{item.price}</p>}
      <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 mt-auto">
        Buy Now
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      {/* Wishlist Section */}
      <section className="max-w-6xl mx-auto mb-14">
        <h2 className="text-2xl font-bold mb-6">Wishlist</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array(8)
            .fill(products)
            .flat()
            .slice(0, 8)
            .map((item, i) => (
              <ProductCard key={i} item={item} />
            ))}
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Because You Liked</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {recommended.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

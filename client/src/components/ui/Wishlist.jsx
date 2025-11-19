import React from "react";

const products = [
  {
    id: 1,
    name: "Macbook Pro",
    img: "/Macbook 1.svg",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use",
  },
  {
    id: 2,
    name: "Macbook Pro",
    img: "/Macbook 1.svg",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use",
  },
  {
    id: 3,
    name: "Macbook Pro",
    img: "/Macbook 1.svg",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use",
  },
  {
    id: 4,
    name: "Macbook Pro",
    img: "/Macbook 1.svg",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use",
  },
  {
    id: 5,
    name: "Red Jacket",
    img: "/images(products)/jacket.svg",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use",
  },
  {
    id: 6,
    name: "Red Jacket",
    img: "/images(products)/jacket.svg",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use",
  },
  {
    id: 7,
    name: "Red Jacket",
    img: "/images(products)/jacket.svg",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use",
  },
  {
    id: 8,
    name: "Red Jacket",
    img: "/images(products)/jacket.svg",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use",
  },
];

const recommended = [
  {
    id: 1,
    name: "iPhone 14 Pro 512GB Gold",
    img: "/images(products)/Iphone 14 pro.svg",
    price: "$1437",
  },
  {
    id: 2,
    name: "AirPods Max Silver",
    img: "/images(products)/headset.svg",
    price: "$549",
  },
  {
    id: 3,
    name: "Apple Watch Series 9 GPS 41mm",
    img: "/images(products)/smart-watch.svg",
    price: "$399",
  },
  {
    id: 4,
    name: "iPhone 15 Pro 1TB Gold",
    img: "/images(products)/Iphone 14.svg",
    price: "$1499",
  },
  {
    id: 5,
    name: "iPhone 14 Pro 512GB Gold",
    img: "/images(products)/Iphone 14 pro.svg",
    price: "$1437",
  },
  {
    id: 6,
    name: "AirPods Max Silver",
    img: "/images(products)/headset.svg",
    price: "$549",
  },
  {
    id: 7,
    name: "Apple Watch Series 9 GPS 41mm",
    img: "/images(products)/smart-watch.svg",
    price: "$399",
  },
  {
    id: 8,
    name: "iPhone 15 Pro 1TB Gold",
    img: "/images(products)/Iphone 14.svg",
    price: "$1499",
  },
];

const ProductCard = ({ item }) => {
  return (
    <div className="bg-white shadow-sm rounded-2xl p-4 flex flex-col items-center hover:shadow-lg transition-all duration-300">
      <img
        src={item.img}
        alt={item.name}
        className="w-40 h-40 sm:w-48 sm:h-48 object-contain rounded-lg mb-4"
      />
      <h3 className="font-semibold text-gray-800 text-lg text-center">{item.name}</h3>
      {item.description && (
        <p className="text-gray-600 my-2 text-sm sm:text-base text-center line-clamp-3">
          {item.description}
        </p>
      )}
      {item.price && (
        <p className="text-green-600 font-semibold text-lg mt-1">{item.price}</p>
      )}
      <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 mt-auto w-full sm:w-auto">
        Buy Now
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-12">
      {/* Wishlist Section */}
      <section className="max-w-6xl mx-auto mb-14">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">Wishlist</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
          Because You Liked
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {recommended.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

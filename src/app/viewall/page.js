"use client"; // Mark this as a client component

import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";

// Updated product data with only necessary properties
const localProductsData = [
    {
        id: 1,
        img: '/assets/shirt/1.jpg',
        title: 'Shirt',
        rating: 4.5,
        price: 900,
        bgColor: 'bg-blue-100', // Unique background color
    },
    {
        id: 2,
        img: '/assets/shirt/2.jpg',
        title: 'Casual Wear',
        rating: 4.2,
        price: 1500,
        bgColor: 'bg-yellow-100',
    },
    {
        id: 3,
        img: '/assets/shirt/3.jpg',
        title: 'Shirt',
        rating: 4.8,
        price: 500,
        bgColor: 'bg-green-100',
    },
    {
        id: 4,
        img: '/assets/shirt/4.jpg',
        title: 'T-Shirt',
        rating: 4.5,
        price: 300,
        bgColor: 'bg-pink-100',
    },
    {
        id: 5,
        img: '/assets/shirt/5.jpg',
        title: 'Jacket',
        rating: 4.9,
        price: 2500,
        bgColor: 'bg-red-100',
    },
    {
        id: 6,
        img: '/assets/shirt/6.jpg',
        title: 'Shirt',
        rating: 4.1,
        price: 1500,
        bgColor: 'bg-indigo-100',
    },
    {
        id: 7,
        img: '/assets/shirt/7.jpg',
        title: 'T-Shirt',
        rating: 3,
        price: 400,
        bgColor: 'bg-purple-100',
    },
    {
        id: 8,
        img: '/assets/shirt/8.jpg',
        title: 'T-Shirt',
        rating: 4.4,
        price: 1500,
        bgColor: 'bg-teal-100',
    },
    {
        id: 9,
        img: '/assets/shirt/9.jpg',
        title: 'Shirt',
        rating: 4.7,
        price: 2000,
        bgColor: 'bg-orange-100',
    },
    {
        id: 10,
        img: '/assets/shirt/10.jpg',
        title: 'Shirt',
        rating: 2.8,
        price: 200,
        bgColor: 'bg-yellow-200',
    },
    {
        id: 11,
        img: '/assets/shirt/11.jpg',
        title: 'Shirt',
        rating: 4,
        price: 800,
        bgColor: 'bg-blue-200',
    },
    {
        id: 12,
        img: '/assets/shirt/12.jpg',
        title: 'T-Shirt',
        rating: 3,
        price: 300,
        bgColor: 'bg-green-200',
    },
    {
        id: 13,
        img: '/assets/women/1.jpg',
        title: 'Dress',
        rating: 5,
        price: 5000,
        bgColor: 'bg-blue-100', // Unique background color
    },
    {
        id: 14,
        img: '/assets/women/2.jpg',
        title: 'Dress',
        rating: 4.9,
        price: 1500,
        bgColor: 'bg-yellow-100',
    },
    {
        id: 15,
        img: '/assets/women/3.jpg',
        title: 'T-Shirt',
        rating: 3.2,
        price: 300,
        bgColor: 'bg-green-100',
    },
    {
        id: 16,
        img: '/assets/women/4.jpg',
        title: 'Cami Dress',
        rating: 5,
        price: 5000,
        bgColor: 'bg-pink-100',
    },
    {
        id: 17,
        img: '/assets/women/5.jpg',
        title: 'Blazer Pant Set',
        rating: 4.9,
        price: 7000,
        bgColor: 'bg-red-100',
    },
    {
        id: 18,
        img: '/assets/women/6.jpg',
        title: 'Kurti',
        rating: 4.5,
        price: 1500,
        bgColor: 'bg-indigo-100',
    },
    {
        id: 19,
        img: '/assets/women/7.jpg',
        title: 'Kurti',
        rating: 4.4,
        price: 2500,
        bgColor: 'bg-purple-100',
    },
    {
        id: 20,
        img: '/assets/women/8.jpg',
        title: 'Kurti',
        rating: 4,
        price: 700,
        bgColor: 'bg-teal-100',
    },
    {
        id: 21,
        img: '/assets/women/9.jpg',
        title: 'Jacket',
        rating: 3.5,
        price: 1500,
        bgColor: 'bg-orange-100',
    },
    {
        id: 22,
        img: '/assets/women/10.jpg',
        title: 'T-Shirt',
        rating: 4,
        price: 1500,
        bgColor: 'bg-yellow-200',
    },
    {
        id: 23,
        img: '/assets/women/11.jpg',
        title: 'WORK OUT OUTFIT',
        rating: 4,
        price: 2500,
        bgColor: 'bg-blue-200',
    },
    {
        id: 24,
        img: '/assets/kids/1.jpg',
        title: 'Midi/Knee',
        rating: 4.5,
        price: 900,
        bgColor: 'bg-blue-100', // Unique background color
    },
    {
        id: 25,
        img: '/assets/kids/2.jpg',
        title: 'Baby Girls',
        rating: 4.2,
        price: 1500,
        bgColor: 'bg-yellow-100',
    },
    {
        id: 26,
        img: '/assets/kids/3.jpg',
        title: 'Baby Formal Wear',
        rating: 4.8,
        price: 500,
        bgColor: 'bg-green-100',
    },
    {
        id: 27,
        img: '/assets/kids/4.jpg',
        title: 'Midi',
        rating: 4.5,
        price: 300,
        bgColor: 'bg-pink-100',
    },
    {
        id: 28,
        img: '/assets/kids/5.jpg',
        title: 'Midi',
        rating: 4.9,
        price: 2500,
        bgColor: 'bg-red-100',
    },
    {
        id: 29,
        img: '/assets/kids/6.jpg',
        title: 'Midi',
        rating: 4.1,
        price: 1500,
        bgColor: 'bg-indigo-100',
    },
    {
        id: 30,
        img: '/assets/kids/7.jpg',
        title: 'Midi',
        rating: 3,
        price: 400,
        bgColor: 'bg-purple-100',
    },
    {
        id: 31,
        img: '/assets/kids/8.jpg',
        title: 'Midi',
        rating: 4.4,
        price: 1500,
        bgColor: 'bg-teal-100',
    },
    {
        id: 32,
        img: '/assets/kids/9.jpg',
        title: 'Midi',
        rating: 4.7,
        price: 2000,
        bgColor: 'bg-orange-100',
    },
    {
        id: 33,
        img: '/assets/kids/10.jpg',
        title: 'Baby Formal ',
        rating: 2.8,
        price: 200,
        bgColor: 'bg-yellow-200',
    },
    {
        id: 34,
        img: '/assets/kids/11.jpg',
        title: 'Baby Formal ',
        rating: 4,
        price: 800,
        bgColor: 'bg-blue-200',
    },
    {
        id: 35,
        img: '/assets/kids/12.jpg',
        title: 'Baby Formal',
        rating: 3,
        price: 300,
        bgColor: 'bg-green-200',
    },
    {
        id: 36,
        img: '/assets/shirt/13.jpg',
        title: 'jeans',
        rating: 4.5,
        price: 900,
        bgColor: 'bg-blue-100',
    },
    {
        id: 37,
        img: '/assets/shirt/14.jpg',
        title: 'jeans',
        rating: 4.2,
        price: 1500,
        bgColor: 'bg-yellow-100',
    },
    {
        id: 38,
        img: '/assets/shirt/15.jpg',
        title: 'jeans',
        rating: 4.8,
        price: 500,
        bgColor: 'bg-green-100',
    },
    {
        id: 39,
        img: '/assets/img/1.jpg',
        title: 'Watch',
        rating: 4.5,
        price: 900,
        bgColor: 'bg-blue-100', // Unique background color
    },
    {
        id: 40,
        img: '/assets/img/2.jpg',
        title: 'Goggles',
        rating: 4.2,
        price: 1500,
        bgColor: 'bg-yellow-100',
    },
    {
        id: 41,
        img: '/assets/img/3.jpg',
        title: 'Goggles',
        rating: 4.8,
        price: 500,
        bgColor: 'bg-green-100',
    },
    {
        id: 42,
        img: '/assets/img/4.jpg',
        title: 'Goggles',
        rating: 4.5,
        price: 300,
        bgColor: 'bg-pink-100',
    },
    {
        id: 43,
        img: '/assets/img/5.jpg',
        title: 'Goggles',
        rating: 4.9,
        price: 2500,
        bgColor: 'bg-red-100',
    },
    {
        id: 44,
        img: '/assets/img/6.jpg',
        title: 'shoes',
        rating: 4.1,
        price: 1500,
        bgColor: 'bg-indigo-100',
    },
    {
        id: 45,
        img: '/assets/img/7.jpg',
        title: 'Beg',
        rating: 3,
        price: 400,
        bgColor: 'bg-purple-100',
    },
    {
        id: 46,
        img: '/assets/img/8.jpg',
        title: 'shoes',
        rating: 4.4,
        price: 1500,
        bgColor: 'bg-teal-100',
    },
    {
        id: 47,
        img: '/assets/img/9.jpg',
        title: 'shoes',
        rating: 4.7,
        price: 2000,
        bgColor: 'bg-orange-100',
    },
    {
        id: 48,
        img: '/assets/img/10.jpg',
        title: 'shoes',
        rating: 2.8,
        price: 200,
        bgColor: 'bg-yellow-200',
    },
    {
        id: 49,
        img: '/assets/img/11.jpg',
        title: 'shoes',
        rating: 4,
        price: 800,
        bgColor: 'bg-blue-200',
    },
    {
        id: 50,
        img: '/assets/img/12.jpg',
        title: 'shoes',
        rating: 3,
        price: 300,
        bgColor: 'bg-green-200',
    },
    {
        id: 51,
        img: '/assets/img/13.jpg',
        title: 'shoes',
        rating: 5,
        price: 5000,
        bgColor: 'bg-blue-100', // Unique background color
    },
    {
        id: 52,
        img: '/assets/img/14.jpg',
        title: 'shoes',
        rating: 4.9,
        price: 1500,
        bgColor: 'bg-yellow-100',
    },
    {
        id: 53,
        img: '/assets/img/15.jpg',
        title: 'Watch',
        rating: 3.2,
        price: 300,
        bgColor: 'bg-green-100',
    },
    {
        id: 54,
        img: '/assets/img/16.jpg',
        title: 'Watch',
        rating: 5,
        price: 5000,
        bgColor: 'bg-pink-100',
    },
    {
        id: 55,
        img: '/assets/img/17.jpg',
        title: 'Watch',
        rating: 4.9,
        price: 7000,
        bgColor: 'bg-red-100',
    },
    {
        id: 56,
        img: '/assets/img/18.jpg',
        title: 'Watch',
        rating: 4.5,
        price: 1500,
        bgColor: 'bg-indigo-100',
    },
    {
        id: 57,
        img: '/assets/img/19.jpg',
        title: 'Watch',
        rating: 4.4,
        price: 2500,
        bgColor: 'bg-purple-100',
    },
    {
        id: 58,
        img: '/assets/img/20.jpg',
        title: 'Watch',
        rating: 4,
        price: 700,
        bgColor: 'bg-teal-100',
    },
    {
        id: 59,
        img: '/assets/img/21.jpg',
        title: 'Watch',
        rating: 3.5,
        price: 1500,
        bgColor: 'bg-orange-100',
    },
    {
        id: 60,
        img: '/assets/img/22.jpg',
        title: 'Watch',
        rating: 4,
        price: 1500,
        bgColor: 'bg-yellow-200',
    },
    {
        id: 61,
        img: '/assets/img/23.jpg',
        title: 'Watch',
        rating: 4,
        price: 2500,
        bgColor: 'bg-blue-200',
    },
    {
        id: 62,
        img: '/assets/img/24.jpg',
        title: 'Watch',
        rating: 4.5,
        price: 900,
        bgColor: 'bg-blue-100', // Unique background color
    },
    {
        id: 63,
        img: '/assets/img/25.jpg',
        title: 'Watch',
        rating: 4.2,
        price: 1500,
        bgColor: 'bg-yellow-100',
    },
    {
        id: 64,
        img: '/assets/img/26.jpg',
        title: 'Watch',
        rating: 4.8,
        price: 500,
        bgColor: 'bg-green-100',
    },
];

export default function ViewAll() {
    const [likedProducts, setLikedProducts] = useState({});

    const toggleLike = (id) => {
        setLikedProducts((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">View All Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {localProductsData.map((product) => (
                    <div
                        key={product.id}
                        className={`border p-4 rounded-lg shadow-md ${product.bgColor} transition-transform transform hover:scale-105`}
                    >
                        <div className="relative">
                            <img
                                src={product.img}
                                alt={product.title}
                                className="w-full h-56 object-cover rounded transition-opacity duration-300 hover:opacity-80"
                            />
                            <button
                                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md"
                                onClick={() => toggleLike(product.id)}
                            >
                                <Heart
                                    className={`w-5 h-5 ${likedProducts[product.id] ? 'text-red-500' : 'text-gray-400'}`}
                                    fill={likedProducts[product.id] ? 'currentColor' : 'none'}
                                />
                            </button>
                        </div>

                        <h2 className="text-lg font-semibold mt-2">{product.title}</h2>

                        <p className={`text-gray-600 ${product.rating >= 4.5 ? 'text-green-600' : product.rating >= 3.5 ? 'text-yellow-600' : 'text-red-600'}`}>
                            Rating: {product.rating} ⭐
                        </p>

                        <p className={`text-gray-600 font-semibold ${product.price > 1000 ? 'text-red-600' : 'text-green-600'}`}>
                            Price: ₹{product.price}
                        </p>

                        <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                            <ShoppingCart className="w-5 h-5" /> Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}




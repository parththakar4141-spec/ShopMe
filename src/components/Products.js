'use client'; // Ensure it's a client component

import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { useRouter } from "next/navigation";

const ProductsData = [
  {
    id: 1,
    img: "/assets/women/women.png",
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
    viewFile: "/files/women-ethnic.pdf",
  },
  {
    id: 2,
    img: "/assets/women/women2.jpg",
    title: "Women Western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
    viewFile: "/files/women-western.pdf",
  },
  {
    id: 3,
    img: "/assets/women/women3.jpg",
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
    viewFile: "/files/goggles.pdf",
  },
  {
    id: 4,
    img: "/assets/women/women4.jpg",
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
    viewFile: "/files/printed-t-shirt.pdf",
  },
  {
    id: 5,
    img: "/assets/women/women2.jpg",
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
    viewFile: "/files/fashion-t-shirt.pdf",
  },
];

const Products = () => {
  const router = useRouter(); // Initialize Next.js router

  const handleViewAll = () => {
    router.push("/viewall"); // Navigate to the correct route
  };

  return (
    <div className="bg-gray-100 min-h-screen mt-14 mb-12">
      <div className="container mx-auto">
        {/* Header section */}
        <div className="text-center mb-16 max-w-[700px] mx-auto">
          <p className="text-sm text-primary">Top Selling Products for Women</p>
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-wide">Women's Wear</h1>
          <p className="text-sm text-gray-500 mt-2">
            Discover the best-selling products in fashion, accessories, and more.
          </p>
        </div>

        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {/* Card section */}
            {ProductsData.map((data) => (
              <div
                key={data.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
              >
                <Image
                  src={data.img}
                  alt={data.title}
                  width={250}
                  height={350}
                  className="object-cover w-full h-full transition-transform transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="font-semibold text-white">{data.title}</h3>
                  <p className="text-sm text-gray-300">{data.color}</p>
                  <div className="flex items-center gap-1 text-yellow-400 mt-1">
                    <FaStar />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View all button */}
          <div className="flex justify-center mt-10">
            <button
              type="button"
              onClick={handleViewAll} // Corrected function
              className="bg-primary text-white py-2 px-6 rounded-lg shadow-md hover:bg-primary-dark transition-all"
            >
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

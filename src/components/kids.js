'use client'; // Ensure it's a client component
// app/products/page.js
import { FaStar } from 'react-icons/fa';
import { useRouter } from "next/navigation";

const ProductsData = [
    {
        id: 1,
        img: "/assets/kids/1.jpg",
        title: 'Midi/Knee',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 2,
        img: '/assets/kids/2.jpg',
        title: 'Baby Girls',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 3,
        img: '/assets/kids/3.jpg',
        title: 'Baby Formal Wear',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];

const Kids = () => {
    const router = useRouter(); // Initialize Next.js router

    const handleViewAll = () => {
        router.push("/viewall"); // Navigate to the correct route
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto">
                {/* Header Section with Centered Text */}
                <div className="text-center py-16 mb-24">
                    <p className="text-sm text-primary" data-aos="fade-up">
                        Top Rated Products for Kids
                    </p>
                    <h1 className="text-3xl font-bold" data-aos="fade-up">
                        Kids Wear
                    </h1>
                    <p className="text-xs text-gray-400" data-aos="fade-up">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi.
                    </p>
                </div>

                {/* Body Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                    {ProductsData.map((data) => (
                        <div
                            key={data.id}
                            data-aos="zoom-in"
                            className="rounded-2xl bg-white dark:bg-gray-800 relative shadow-xl duration-300 group max-w-[300px]"
                        >
                            {/* Image Section with Hover Background Color */}
                            <div className="h-[100px] bg-gray-200 group-hover:bg-primary flex justify-center items-center rounded-t-2xl transition-colors duration-300 ease-in-out">
                                <img
                                    src={data.img}
                                    alt={data.title}
                                    className="max-w-[140px] block mx-auto transform -translate-y-20 duration-300 drop-shadow-md group-hover:scale-105"
                                />
                            </div>

                            {/* Details Section */}
                            <div className="p-4 text-center">
                                {/* Star Rating */}
                                <div className="w-full flex items-center justify-center gap-1">
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                </div>
                                <h1 className="text-xl font-bold">{data.title}</h1>
                                <p className="text-gray-500 duration-300 text-sm line-clamp-2">
                                    {data.description}
                                </p>
                                <button className="bg-primary text-white py-1 px-4 rounded-full mt-4 hover:bg-white hover:text-primary transition-colors duration-300">
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Products Button - placed outside of the map loop */}
                <div className="flex justify-center mt-10">
                    <button
                        type="button"
                        onClick={handleViewAll} // Corrected function
                        className="text-center bg-primary text-white py-2 px-6 rounded-lg shadow-md hover:bg-primary-dark transition-all">
                        View All Products
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Kids;

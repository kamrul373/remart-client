import React from 'react';
import { FaLaptop } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Category = ({ category }) => {
    return (
        <Link to={`/products/${category._id}`} className="text-cente lg:w-[250px] w-full py-4  hover:bg-primary hover:text-white hover:font-bold duration-500">
            <div>
                <div className="flex items-center justify-center mx-auto mb-4 rounded-full lg:bg-indigo-50 sm:w-12 sm:h-12 lg:w-20 lg:h-20">
                    <FaLaptop className='text-4xl text-black'></FaLaptop>
                </div>
                <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase text-center ">
                    {category.category}
                </h6>
            </div>
        </Link>
    );
};

export default Category;
import React, { useEffect, useState } from 'react';
import Category from './Category';
import Loading from '../../../Components/Loading/Loading';
import { useQuery } from '@tanstack/react-query';

const Categories = () => {
    //const [categories, setCategories] = useState([]);
    const { data: categories, isLoading } = useQuery({
        queryKey: ['productcategories'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/category`);
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_SERVER_URL}/category`)
    //         .then(response => response.json())
    //         .then(data => setCategories(data))

    // }, [])
    //console.log(categories)
    return (
        <div>
            <h2 className='lg:text-4xl font-bold text-center lg:my-16 my-8'>Popular Categories</h2>
            <div className='grid lg:grid-cols-3 grid-cols-2 justify-items-center gap-6 my-8 px-10'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Components/Loading/Loading';

const AddProduct = () => {
    // react query : loading cateories
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ["category"],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/category`);
            const result = await res.json();
            return result;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='p-4'>
            <h2 className='text-3xl font-bold'>Add Products</h2>
            <form>
                <div className="form-control">
                    <label htmlFor='productName' className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" placeholder="Product Name" className="input input-bordered input-primary" id='productName' name='productName' required />
                </div>
                <div className="form-control">
                    <label htmlFor='category' className="label">
                        <span className="label-text">Product Category</span>
                    </label>
                    <select name="category" className="select select-primary w-full" id="category" required>
                        {
                            categories.map(category => <option
                                key={category._id}
                                value={category.category}
                            >
                                {category.category}
                            </option>)
                        }
                    </select>
                </div>
                <button className='btn btn-primary'>
                    Add Product
                </button>
            </form>

        </div>
    );
};

export default AddProduct;
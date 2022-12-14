import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../../Components/Loading/Loading';
import { AuthContext } from '../../../context/AuthContextProvider';
import { pageTitle } from '../../../utility/pageTitle';


import MyProduct from './MyProduct';

const MyProducts = () => {
    // page title
    pageTitle("My Products");
    // auth context
    const { user } = useContext(AuthContext)
    // seller products fetching
    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ["productskey", user],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/myproducts/${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("remart-token")}`
                }
            });
            const result = await res.json();
            return result;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    // product delete handler
    const handleProductDelete = id => {
        const confirm = window.confirm(`Are you sure you want to delete product id : ${id}`);
        if (confirm) {
            fetch(`${process.env.REACT_APP_SERVER_URL}/products/${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application-json",
                    authorization: `Bearer ${localStorage.getItem("remart-token")}`
                }
            }).then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success("Product deleted successfully");

                    }

                })
        }
    }
    // advertise button event handler
    const handleadvertise = id => {
        console.log(id);
        fetch(`${process.env.REACT_APP_SERVER_URL}/advertise/${id}`, {
            headers: {

                authorization: `Bearer ${localStorage.getItem("remart-token")}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                toast.success("You have successfully advertised product")
                if (data.modifiedCount > 0) {
                    refetch();
                }
            })
    }
    return (
        <div className='px-3'>
            <h2 className='text-3xl font-bold my-3'>My Products {products.length} </h2>
            <div className="overflow-x-auto">
                <table className="table table-normal w-full ">
                    <thead className=''>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Ads</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) => <MyProduct
                                key={product._id}
                                product={product}
                                serial={i}
                                handleProductDelete={handleProductDelete}
                                handleadvertise={handleadvertise}
                            ></MyProduct>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;
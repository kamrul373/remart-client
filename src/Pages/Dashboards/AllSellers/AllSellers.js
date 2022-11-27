import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../../Components/Loading/Loading';
import { pageTitle } from '../../../utility/pageTitle';
import Seller from './Seller';

const AllSellers = () => {
    // page title
    pageTitle("All Sellers");
    const { data: sellers = [], refetch, isLoading } = useQuery({
        queryKey: ["allsellers"],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/users?role=seller`)
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(sellers);
    const handleUserDelete = id => {
        const confirm = window.confirm(`Are you sure you want to delete ssller id : ${id}`);
        if (confirm) {
            fetch(`${process.env.REACT_APP_SERVER_URL}/users/${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application-json",
                    authorization: `Bearer ${localStorage.getItem("remart-token")}`
                }
            }).then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success("Seller deleted succefully");
                        refetch();
                    }
                })
        }
    }
    const handleVerify = id => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/users/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application-json",
                authorization: `Bearer ${localStorage.getItem("remart-token")}`
            }
        }).then(response => response.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("User verified");
                    refetch();
                }
            })
    }
    return (
        <div className='md:px-10 px-4'>
            <h2 className='text-3xl font-bold my-3'>All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="lg:table table-zebra table-compact w-full overflow-x-hidden">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='lg:text-xl'>

                        {
                            sellers.map((seller, i) => <Seller
                                key={seller._id}
                                seller={seller}
                                i={i}
                                handleUserDelete={handleUserDelete}
                                handleVerify={handleVerify}
                            ></Seller>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;
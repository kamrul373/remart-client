import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../../Components/Loading/Loading';
import { pageTitle } from '../../../utility/pageTitle';
import Buyer from './Buyer';

const AllBuyers = () => {
    // page title
    pageTitle("All Buyers");
    const { data: buyers = [], refetch, isLoading } = useQuery({
        queryKey: ["allbuyers"],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/users?role=buyer`)
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(buyers)
    const handleUserDelete = id => {
        const confirm = window.confirm(`Are you sure you want to delete buyer id : ${id}`);
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
                        toast.success("Buyer deleted succefully");
                        refetch();
                    }
                })
        }
    }
    return (
        <div className='md:px-10 px-4'>
            <h2 className='text-3xl font-bold my-3'>All Buyers</h2>
            <div className="overflow-x-auto">
                <table className="lg:table table-zebra table-auto w-full overflow-x-hidden ">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='lg:text-xl'>

                        {
                            buyers.map((buyer, i) => <Buyer
                                key={buyer._id}
                                buyer={buyer}
                                i={i}
                                handleUserDelete={handleUserDelete}
                            ></Buyer>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;
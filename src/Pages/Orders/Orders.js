import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';
import { pageTitle } from '../../utility/pageTitle';
import OrderCard from './OrderCard';

const Orders = () => {
    // page title 
    pageTitle("My Orders")
    const { user } = useContext(AuthContext)
    const { data: orders = [] } = useQuery({
        queryKey: ["mywords", user?.email],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/orders?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("remart-token")}`
                }
            });
            const data = await res.json()
            return data
        }
    })
    //console.log(orders);
    return (
        <div className='px-10'>
            <h2 className='lg:text-4xl text-3xl my-3'>My Orders</h2>
            <div className='gird grid-cols-1 gap-4 '>
                {
                    orders.map(order => <OrderCard
                        key={order._id}
                        order={order}
                    ></OrderCard>)
                }
            </div>
        </div>
    );
};

export default Orders;
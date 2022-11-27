import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Report from './Report';

const Reports = () => {
    const { data: reports = [], refetch } = useQuery({
        queryKey: ["reportedItems"],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/report`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("remart-token")}`
                }
            })
            const data = res.json()
            return data;
        }
    })
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
                        refetch();
                    }

                })
        }
    }

    return (
        <div className='lg:px-10 px-4'>
            <h2 className='text-3xl my-4 font-bold'>Reported Items</h2>
            <div className="overflow-x-auto">
                <table className="lg:table table-zebra table-auto w-full overflow-x-hidden ">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Report</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='lg:text-xl'>

                        {
                            reports.map((report, i) => <Report
                                key={report._id}
                                report={report}
                                i={i}
                                handleProductDelete={handleProductDelete}
                            ></Report>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reports;
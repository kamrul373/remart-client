import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
const MyProduct = ({ product, serial, handleProductDelete, handleadvertise }) => {
    const { productName, category, resalePrice, status, _id, advertise } = product;
    return (
        <tr>
            <th>{serial + 1}</th>
            <td className='font-semibold'>{productName.length > 20 ? `${productName.slice(0, 20)}... ` : productName}</td>
            <td>{category}</td>
            <td>{resalePrice}</td>
            <td>{status === "unsold" ? <span className='text-green-500 font-bold'>Available</span> : <span className='text-green-700 font-bold'>Sold</span>}</td>
            <td>
                {
                    status === "unsold" &&
                    <button
                        onClick={() => handleadvertise(_id)}
                        className='btn-sm btn-primary font-bold'>Advertise</button>

                }
            </td>

            <td>
                <FaTrashAlt
                    onClick={() => handleProductDelete(_id)}
                    className='text-xl text-error'></FaTrashAlt>
            </td>
        </tr>
    );
};

export default MyProduct;
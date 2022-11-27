import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Seller = ({ seller, i, handleUserDelete }) => {
    const { email, name } = seller
    return (
        <tr>
            <th>{i + 1}</th>
            <td>
                {name}
            </td>
            <td>
                {email}
            </td>
            <td>
                <button className='btn btn-primary font-bold text-white btn-xs capitalize'>Verify</button>
            </td>
            <td>
                <FaTrashAlt
                    onClick={() => handleUserDelete(seller._id)}
                    className='text-xl text-error cursor-pointer'></FaTrashAlt>
            </td>
        </tr>
    );
};

export default Seller;
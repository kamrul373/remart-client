import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Buyer = ({ buyer, i, handleUserDelete }) => {
    const { name, email } = buyer;
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
                <FaTrashAlt
                    onClick={() => handleUserDelete(buyer._id)}
                    className='text-xl text-error cursor-pointer'></FaTrashAlt>
            </td>
        </tr>
    );
};

export default Buyer;
import React from 'react';
import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa';

const Seller = ({ seller, i, handleUserDelete, handleVerify }) => {
    const { email, name, _id, verified } = seller
    return (
        <tr>
            <th>{i + 1}</th>
            <td className='lg:text-xl'>
                {name}
            </td>
            <td className='lg:text-xl'>
                {email}
            </td>
            <td>
                {
                    verified ? <
                        FaCheckCircle className='text-primary ' title="Verified" /> :
                        <button
                            onClick={() => handleVerify(_id)}
                            className='btn btn-primary lg:font-bold text-white btn-xs capitalize'>Verify</button>
                }
            </td>
            <td>
                <FaTrashAlt
                    onClick={() => handleUserDelete(_id)}
                    className='text-xl text-error cursor-pointer'></FaTrashAlt>
            </td>
        </tr>
    );
};

export default Seller;
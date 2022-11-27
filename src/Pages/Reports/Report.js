import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
const Report = ({ report, i, handleProductDelete }) => {
    const { productName, report: reportMessage, productId, _id } = report;
    return (
        <tr>
            <th>{i + 1}</th>
            <td>
                <span className='font-bold'>{productName.slice(0, 20)}</span>
                <br />
                <span className='text-xs'>pid : {productId} </span>
            </td>
            <td>{reportMessage && reportMessage}</td>
            <td>
                <FaTrashAlt
                    onClick={() => handleProductDelete(productId, _id)}
                    className='text-xl text-error cursor-pointer'></FaTrashAlt>
            </td>
        </tr>
    );
};

export default Report;
// frontend/components/History.jsx
import React, { useContext } from 'react';
import "./HistoryPage.css"
import { ProductContext } from '../context/ProductContext';

const HistoryPage = () => {
    const { history } = useContext(ProductContext);

    return (
        <table className='history-table history-table-container'>
            <thead>
                <tr>
                    <th>Area</th>
                    <th>Price</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {history.map((entry, index) => (
                    <tr key={index}>
                        <td>{entry.area}</td>
                        <td>{entry.price}</td>
                        <td>{entry.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default HistoryPage;

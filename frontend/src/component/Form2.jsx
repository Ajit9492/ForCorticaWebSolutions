// frontend/components/Form.jsx
import React, { useState, useContext } from 'react';
import "./Form2.css";
import { ProductContext } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';

const Form2 = () => {
    const { addHistory } = useContext(ProductContext);
    const [formData, setFormData] = useState({
        area: '',
        price: '',
        status: 'under construction'
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addHistory(formData);
        setFormData({
            area: '',
            price: '',
            status: 'under construction'
        });
    };

    const showHistory = () => {
        navigate('/history');
    };

    return (
        <form onSubmit={handleSubmit} className='form-container'>
            <div className='form-group'>
            <div>
                <label>Area:</label>
                <input
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Price:</label>
                <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Status:</label>
                <select name="status" value={formData.status} onChange={handleChange}>
                    <option value="under construction">Under Construction</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <div>
                <button type="submit">Submit Form</button>
                <button type="button" onClick={showHistory}>Details</button>
            </div>
            </div>
        </form>
    );
};

export default Form2;

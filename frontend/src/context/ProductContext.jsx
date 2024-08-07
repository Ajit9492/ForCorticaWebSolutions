// frontend/context/ProductContext.jsx
import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const ProductContext = createContext(null);

const ProductContextProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [history, setHistory] = useState(() => {
        const localHistory = localStorage.getItem('formHistory');
        return localHistory ? JSON.parse(localHistory) : [];
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/product/getproducts');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    const addHistory = (formData) => {
        const updatedHistory = [...history, formData];
        setHistory(updatedHistory);
        localStorage.setItem('formHistory', JSON.stringify(updatedHistory));
    };

    return (
        <ProductContext.Provider value={{ products, history, addHistory }}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;


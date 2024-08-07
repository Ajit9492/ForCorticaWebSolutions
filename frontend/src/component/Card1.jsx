import React, { useContext } from 'react';
import "./Card1.css"
import { ProductContext } from '../context/ProductContext';

function Card1() {
    const { products } = useContext(ProductContext);

    if (!Array.isArray(products)) {
        return <p>Loading...</p>; }

    return (
        <>
            {products.map((product) => (
                <div className="card" key={product._id}>
                    <div className='image'>
                        <img src="..." alt="Product" />
                    </div>
                    <div className="card-body">
                        <h5 className="title">{product.name}</h5>
                        <p className="price">{product.price}</p>
                        <p className='area'>{product.area}</p>
                        <button className="btn1">Enquire Now</button>
                        <button className="btn2">Details</button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Card1;

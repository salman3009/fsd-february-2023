import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((error) => console.error(`Error fetching Product: ${error}`));
    }, [id]);
    return (
        <div className='single-product-component'>
            <h1>Single Product ID: {product?.id}</h1>
            {product ? (
                <div className='single-product'>
                    <img src={product.image} alt={product.title} className="single-product-image"/>
                    <div className='single-product-details'>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price: &#8377;{product.price}</p>
                    </div>
                    
                </div>
            ) : (
                <p className='loader'>Loading...</p>
            )}
        </div>
    )
}

export default SingleProduct;
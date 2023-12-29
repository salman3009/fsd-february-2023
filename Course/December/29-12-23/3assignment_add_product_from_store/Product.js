import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setProducts(data))
    }, []);

    const handleAddFavorite = (id) => {
        const favoriteProducts = JSON.parse(localStorage.getItem("favoriteProducts")) || [];
        const product = products.find((product) => product.id === id);

        if (!favoriteProducts.find((favoriteProduct) => favoriteProduct.id === id)) {
            favoriteProducts.push(product);
            localStorage.setItem("favoriteProducts", JSON.stringify(favoriteProducts))
        }
    }

    return (
        <div className='product-component'>
            <h2>Products</h2>
            {products.map((product) => (
                <div key={product.id} className='product'>
                    <Link to={`/products/${product.id}`}>
                        <img
                            src={product.image}
                            alt={product.title}
                            className="product-image"
                        />
                    </Link>
                    <div className='product-details'>
                        <h4>{product.title}</h4>
                        <p>Price: &#8377;{product.price}</p>
                        <button onClick={() => handleAddFavorite(product.id)}>Add to Favorites</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products;
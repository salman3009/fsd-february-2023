import React, { useEffect, useState } from 'react'

function Favorites() {
    const [favoriteProducts, setFavoriteProducts] = useState([]);

    useEffect(() => {
        const storedFavoriteProducts = JSON.parse(localStorage.getItem("favoriteProducts")) || [];
        setFavoriteProducts(storedFavoriteProducts);
    }, []);

    const handleRemoveFavoriteProduct = (id) => {
        const updateFavoriteProducts = favoriteProducts.filter((product) => product.id !== id);
        setFavoriteProducts(updateFavoriteProducts);
        localStorage.setItem("favoriteProducts", JSON.stringify(updateFavoriteProducts));
    };
    return (
        <div className='favorite-component'>
            <h2>Favorites</h2>
            {favoriteProducts.length > 0 ? (
                favoriteProducts.map((product) => (
                    <div key={product.id} className='favorite-product'>
                        <img
                            src={product.image}
                            alt={product.title}
                            className="favorite-product-image"
                        />
                        <div className='favorite-product-details'>
                            <h4>{product.title}</h4>
                            <p>Price: &#8377;{product.price}</p>
                            <button onClick={() => handleRemoveFavoriteProduct(product.id)}>Remove from Favorites</button>
                        </div>
                    </div>
                ))
            ) : (
                <p className='favorite-para'>No favorite product found.</p>
            )}
        </div>
    )
}

export default Favorites;
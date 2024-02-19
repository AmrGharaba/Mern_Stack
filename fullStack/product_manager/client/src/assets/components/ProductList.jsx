import React from 'react';

const ProductList = (props) => {
    const products = props.products;

    return (
        <div>
            {products.map((product, i) => (
                <p key={i}>
                    <a href={`http://localhost:5173/products/${product._id}`}>
                        {product.title}
                    </a>
                </p>
            ))}
        </div>
    )
}

export default ProductList;

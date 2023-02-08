import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import '@styles/ProductList.scss';

// const API = axios.create({
//     baseURL: 'https://api.escuelajs.co/api/v1/',
//     headers: {
//         'Content-Type': 'application/json;charset=utf-8'
//     }
// });

const API = 'https://api.escuelajs.co/api/v1/products';

const Products = () => {
    const products = useGetProducts(API);

    return (
        <section className="product-list-container">
            <div className="cards-container">
                {products.map(product => (
                    <ProductItem product={product} key={`productItem-${product.id}`} />
                ))}
            </div>
        </section>
    );
}

export default Products;
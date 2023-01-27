import React from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';

const Products = () => {
    return (
        <section className="product-list-container">
            <div className="cards-container">
                <ProductItem/>        
                <ProductItem/>        
                <ProductItem/>        
                <ProductItem/>        
                <ProductItem/>        
                <ProductItem/>        
                <ProductItem/>        
                <ProductItem/>        
            </div>
        </section>
    );
}

export default Products;
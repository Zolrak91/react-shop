import React from 'react';
import Layout from '../containers/Layout';
import Header from '../components/Header';
import ProductList from '../containers/ProductList';
import Sidebar from '../components/Sidebar';
import LayoutGrid from '../containers/LayoutGrid';

const Home = () => {
    return (
        <Layout>
            <Header/>
            <LayoutGrid>
                <Sidebar/>
                <ProductList/>
            </LayoutGrid>         
        </Layout>
    );
}

export default Home;
import React from 'react';
import '../styles/OrderHistory.scss';
import Order from '../components/Order';
import IconArrow from '../atoms/IconArrow';

const OrderHistory = () => {
    return (        
        <div className="my-order">
          <div className="my-order-container">
            <h1 className="title">My orders</h1>    
            <div className="my-order-content">
              <Layout>
                <Order/>
                <IconArrow/>
              </Layout>
              <Layout>
                <Order/>
                <IconArrow/>
              </Layout>
              <Layout>
                <Order/>
                <IconArrow/>
              </Layout>
              <Layout>
                <Order/>
                <IconArrow/>
              </Layout>
            </div>
          </div>
        </div>
    );
}

export default OrderHistory;
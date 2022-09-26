import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    const onClickHandaler = (product) => {
        console.log('I am clicked : ', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop_container'>
            <div className="product_container">
                {products.map(product => <Product
                    key={product.id}
                    product={product}
                    onClickHandaler={onClickHandaler}
                />)}
            </div>

            <div className="cart_container">
                <Cart
                    key={cart.id}
                    cart={cart}
                />

            </div>
        </div>
    );
};

export default Shop;
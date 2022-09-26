import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faCoffee} />

const Product = ({ product, handleAddToCart }) => {
    // console.log(props);
    // const { product, onClickHandaler } = props;
    const { id, category, name, seller, price, stock, ratings, ratingsCount, img, shipping, quantity } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='product_info'>
                <h2 className='product_name' >{name}</h2>
                <h4 className='product_price'>Price:  ${price}</h4>
                <h6 className='product_manufacturer' >Manufacturer: {seller}</h6>
                <h6 className='product_rating' >Rating: {ratings}</h6>
            </div>

            <button className='add_to_cart_btn' onClick={() => handleAddToCart(product)} >
                Add to Cart <FontAwesomeIcon icon={faCartPlus} />
            </button>
        </div>
    );
};

export default Product;
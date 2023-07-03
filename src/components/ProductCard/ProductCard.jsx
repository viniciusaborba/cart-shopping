import React, { useContext } from 'react';
import './ProductCard.css'
import { BsFillCartPlusFill } from 'react-icons/bs'
import propTypes from 'prop-types'
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function ProductCard({ data }) {

    const { price, title, thumbnail } = data

    const { cartItems, setCartItems } = useContext(AppContext)

    const handleAddCart = () => {
        setCartItems([ ...cartItems, data ])
    }

    return (
        <section className='product-card'>
            <img 
            src={thumbnail.replace(/\w\.jpg/gi, "W.jpg") } 
            className='card__image'
            alt='product' />

            <div className="card__infos">
                <h2 className='card__price'>{formatCurrency(price, 'BRL')}</h2>
                <h2 className="card__title">{title}</h2>
            </div>

            <button 
            className="button__add-cart"
            onClick={handleAddCart}>
                <BsFillCartPlusFill />
            </button>
        </section>
    );
}

export default ProductCard;

ProductCard.prototype = {
    data: propTypes.shape({})
}
import React from 'react'
import './Product.css'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

function Product({ id, title, image, price, rating }) {
  let ratefull = 5 - rating;
  return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
                {Array(rating).fill().map((_, i) => (
                    <p><StarIcon /></p>
                ))}
                <p></p>
                {/* <p><StarIcon /><StarIcon /><StarIcon /><StarHalfIcon/><StarOutlineIcon/></p> */}
            </div>
        </div>
        <img src={image} alt='Product Image'/>
        <button>Add to Cart</button>
    </div>
  )
}

export default Product
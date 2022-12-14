import React from 'react';
import { IArrayProductsCard } from '../../util';

const ProductCard: React.FC<IArrayProductsCard> = ({imgUrl, title, subTitle, price}) => {
  return (
    <div className="productCard">
      <div className='productCard-item' >
        <img src={imgUrl} alt={subTitle} height={200} width={200} />
        <h4>{title}</h4>
        <h5>Modelo {subTitle}</h5>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
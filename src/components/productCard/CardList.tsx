import React from 'react'
import ProductCard from './ProductCard'
import { IArrayProductsCard } from '../../util';

interface IKeyOfArrayProducts {
    listArray: keyof IArrayProductsCard
};

const CardList: React.FC<IKeyOfArrayProducts> = ({listArray}) => {
  return (
    <div>
        {/* {
            listArray.map(item => (
                <ProductCard
                    key={item.subTitle}
                    imgUrl={item.imgUrl}
                    title={item.title}
                    subTitle={item.subTitle}
                    price={item.price}
                />
            ))
        } */}
    </div>
  )
}

export default CardList
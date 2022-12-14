import React from 'react';
import { useState } from 'react';

const SRC_IMAGE = 'https://vansmx.vtexassets.com/arquivos/ids/784095-800-auto?v=638025996345130000&width=800&height=auto&aspect=true';

export interface IColorSelectProps {
  setColor: React.Dispatch<React.SetStateAction<string>>;
};

export interface ITitleProduct {
  color: string;
};

interface IProductDetailControl {
  TitleProduct: React.FC<ITitleProduct>;
  ColorSelect: React.FC<IColorSelectProps>;
};

const ProductDetailControl: React.FC<IProductDetailControl> = ({ColorSelect, TitleProduct}) => {

  const [color, setColor] = useState('purple');

  return (
    <div>
        <div>
          <img src={SRC_IMAGE} alt='VANS' height={200} width={200} />
        </div>
        <div>
          <TitleProduct color={color}  />
          <ColorSelect setColor={setColor} />
        </div>
    </div>
  );
};

export default ProductDetailControl;
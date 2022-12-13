import React from 'react';
import ProdcutCard from '../productCard/ProductCard';
import SectionView, { ISectionViewProps } from '../SectionView';

const Home = () => {

  const Component1 = () => {
    return (
        <>
            <h4>Título desde componente1</h4>
            <p>Descripción del componente1</p>
            <img src='https://media.timeout.com/images/105761838/image.jpg' width={400} height={400} />
        </>
    );
  };

  const Component2 = ({numOfItems} : {numOfItems:number}) => {
    return (
        <>
            {new Array(numOfItems).fill('').map((product, item)=><h4 key={item} >Product {item+1}</h4>)}
        </>
    );
  };

  const SectionLastView = () => {
    return (
        <>
            {
                new Array(4).fill('').map((product, item)=>
                    <ProdcutCard />
                )
            }
        </>
    );
  };

  const descriptorSectionView1: ISectionViewProps = {
    title: '',
    rowOneSection: <Component1 />,
    rowTwoSection: <Component2 numOfItems={3} />
  };

  const descriptorSection2: ISectionViewProps = {
    title: 'Productos de ProductCard',
    rowOneSection: <SectionLastView />
  };

  const descriptoySectionObject: ISectionViewProps[] = [
    {
        title: 'Hola',
        rowOneSection: <Component2 numOfItems={6} />
    },
    {
        title: 'Hola1',
        rowOneSection: <SectionLastView />
    },
    {
        title: 'Hola2',
        rowOneSection: <Component1  />
    },
  ];

  return (
    <div>
        <SectionView title='iAmSebastian' rowOneSection={<Component1 />} rowTwoSection={<Component2 numOfItems={4}/>} />
        <SectionView title='iAmSebastian' rowOneSection={<Component2 numOfItems={5} />}/>
        <SectionView {...descriptorSectionView1}/>
        <SectionView {...descriptorSection2}/>
        {descriptoySectionObject.map(SectionView)}
    </div>
  );
};

export default Home;
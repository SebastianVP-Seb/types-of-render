import ProductCard from '../productCard/ProductCard';
import ProductDetailControl from '../ProductDetailControl';
import SectionView, { ISectionViewProps, SectionViewFunction } from '../SectionView';
import { IColorSelectProps, ITitleProduct } from '../ProductDetailControl';
import { ArrayProductsCard } from '../../util';
import CardList from '../productCard/CardList';
import '../productCard/productCard.css';


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
      <div className="productCard">
        {
          // new Array(4).fill('').map((product, item)=>
          ArrayProductsCard.map(item => (
            <ProductCard
              key={item.subTitle}
              imgUrl={item.imgUrl}
              title={item.title}
              subTitle={item.subTitle}
              price={item.price}
            />
            // <CardList listArray={ArrayProductsCard} />
            ))
          }
      </div>
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

  const TitleOfProduct: React.FC<ITitleProduct> = ({color}) => {
    return (
      <>
        <p>VANS</p>
        <p>SK8-Hi Negro IBKA</p>
        <p style={{color}} >$1,399</p>
      </>
    )
  };

  const ColorSelected: React.FC<IColorSelectProps> = ({setColor}) => {

    // const handleSelect = (e: React.ChangeEvent<HTMLFieldSetElement>) => {}
    const handleSelect = (e: any) => {
      setColor(e.target.value);
    };

    const colors = ['white', 'black', 'grey', 'red'];

    return (
      <>
        <div>
          <fieldset id='colors' onChange={handleSelect} style={{border: 'none'}} >
            Color:
            {colors.map(item=>(
              <input key={item} type="radio" name='colors' value={item} />
              ))}
          </fieldset>
        </div>
      </>
    );
  };

  const SizeSection: React.FC<IColorSelectProps> = ({setColor}) => {

    const handleSelect = (e: any) => {
      setColor(e.target.value);
    };

    const sizes = ['5', '6', '7', '8'];

    return (
      <>
        <div>
          <fieldset id='sizes' onChange={handleSelect} style={{border: 'none'}} >
            Talla:
            {sizes.map(item=>(
              <button key={item} onClick={handleSelect}>{item}</button>
              ))}
          </fieldset>
        </div>
      </>
    );
  };

  return (
    <div>
        {/* <SectionView title='iAmSebastian' rowOneSection={<Component1 />} rowTwoSection={<Component2 numOfItems={4}/>} /> */}
        {/* <SectionView title='iAmSebastian' rowOneSection={<Component2 numOfItems={5} />}/> */}
        {/* <SectionView {...descriptorSectionView1}/> */}
        <SectionView {...descriptorSection2}/>
        {descriptoySectionObject.map(SectionView)}
        <SectionViewFunction 
            title='Section View Function'
            section={(props)=>{
                console.log('Section Render Function');
                // const setCount = props[1];
                const {setCount} = props;
                return (
                    <>
                        <h5>Render desde Render Function</h5>
                        <button onClick={()=>setCount(prevState=>prevState+1)} >Incrementar</button>
                    </>
                )
            }}    
        />
        <ProductDetailControl 
          TitleProduct={TitleOfProduct}
          ColorSelect={ColorSelected} 
        />
        {/* <ProductDetailControl 
          TitleProduct={({color})=> {
            return (
              <>
                <h3 style={{color}} >iAmSeb</h3>
              </>
            )
          }}
          ColorSelect={ColorSelected} 
        /> */}
        <ProductDetailControl 
          TitleProduct={TitleOfProduct}
          ColorSelect={SizeSection} 
        />
    </div>
  );
};

export default Home;
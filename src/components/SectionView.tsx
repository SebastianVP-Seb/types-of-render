import React from 'react';
import { useState } from 'react';

export interface ISectionViewProps {
    title: string;
    // component: any;
    rowOneSection: JSX.Element;
    rowTwoSection?: JSX.Element;
};

const SectionView: React.FC<ISectionViewProps> = ({title, rowOneSection, rowTwoSection}, index) => {

    /*En primera instancia un comp recibe props y posteriormente el índice */
    console.log({title, rowOneSection, rowTwoSection, index});
  return (
    <div>
        <p>{title}</p>
        {rowOneSection}
        {
            rowTwoSection && (
                rowTwoSection
            )
        }
    </div>
  );
};

export default SectionView;

interface ISectionViewFunctionProps {
    title: string;
    // section: React.FC; //puede ser también JSX.Element
    // section: (state: [number, React.Dispatch<React.SetStateAction<number>>]) => JSX.Element;
    section: React.FC<{
        count?: number; //No es necesario mandar, para evitar renderizados cíclicos
        setCount: React.Dispatch<React.SetStateAction<number>>;
    }>;
};

/*En renderFunction se crea un elemento interno (count) que pueda ser controlado por fuera (setCount) */

export const SectionViewFunction: React.FC<ISectionViewFunctionProps> = ({title, section: SectionComponent}) => {

    const[count, setCount] = useState(0);

    return (
        <div>
            <p>{title}</p>
            <p>{`El contador va en ${count}`}</p>
            {/* {SectionComponent([count, setCount])} */}
            <SectionComponent setCount={setCount} />
        </div>
    );
};

//SectionView función genérica

interface ISectionView<T> {
    title: string;
    // element: any; //Las props de este elemento se van a generalizar
    element: (props: T) => JSX.Element;
};

//rest: resto de las propiedades que recibirá el elemento. Lo que se mande en rest, tendrá que coincidir con el 
//elemento que se está generalizando

export const SectionViewFunctionGeneric = <T extends unknown>({title, element, ...rest}: ISectionView<T>) => {

    return (
        <div>
            <div>
                <p>{title}</p>
            </div>
            {element( rest as T )}
        </div>
    );
};

interface IControlChildren {
    isEditable: boolean;
    setIsEditable: React.Dispatch<React.SetStateAction<boolean>>;
};

interface IOpenModule {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

// interface ISectionViewHOC extends React.PropsWithChildren { //para que se pueda usar children
interface ISectionViewHOC {
    title: string;
    readonly: boolean;
    children: ((props: IControlChildren) => React.ReactNode) | React.ReactNode;
    //Permite renderizar una función que renderice un ReactNode o un ReactNode
    customIcon?: (props: IControlChildren & IOpenModule) => JSX.Element;
};

export const SectionViewHOC: React.FC<ISectionViewHOC> = ({title, children, readonly, customIcon}) => {

    const [open, setOpen] = useState(false);
    const [isEditable, setIsEditable] = useState(readonly);

    return (
        <div>
            <div>
                <p>{title}</p>
                {customIcon 
                    ? customIcon({isEditable, setIsEditable, open, setOpen})
                    : <button onClick={()=>setOpen(!open)} >{`${open ? 'Cerrar' : 'Abrir'}`}</button>
                }
                {!isEditable && <button onClick={()=>setIsEditable(true)} >Editar</button>}
            </div>
            <div>
                {open && (
                    typeof children === 'function' 
                        ? children({isEditable, setIsEditable})
                        : children
                    )}
            </div>
        </div>
    );
};

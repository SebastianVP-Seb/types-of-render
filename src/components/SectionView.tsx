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

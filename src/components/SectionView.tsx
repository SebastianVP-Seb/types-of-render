import React from 'react';

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
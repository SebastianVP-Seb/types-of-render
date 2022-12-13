
type JustifyContent = 'space-evenly' | 'center';

interface IProps {
    isFlex?: boolean;
    justifyContent?: JustifyContent;
};

const Container = () => {
  return (
    <div>Container</div>
  );
};

export default Container;
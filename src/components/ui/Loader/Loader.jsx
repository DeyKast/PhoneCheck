import { MutatingDots } from 'react-loader-spinner';
import css from './loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#6966ff"
        secondaryColor="##6966ff"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;

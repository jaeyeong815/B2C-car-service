import Header from '../components/Header';
import Category from '../components/Main/Category/Category';

const Main = () => {
  return (
    <div className="main">
      <Header text="전체차량" />
      <Category />
    </div>
  );
};

export default Main;

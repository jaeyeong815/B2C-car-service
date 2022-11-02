import Header from '../components/Header';
import Category from '../components/Main/Category/Category';
import CardList from '../components/Main/CardList';

const Main = () => {
  return (
    <div className="main">
      <Header text="전체차량" />
      <Category />
      <CardList />
    </div>
  );
};

export default Main;

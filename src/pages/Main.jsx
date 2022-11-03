import Header from '../components/Header';
import CardSlide from '../components/Main/CardSlide';
// import Category from '../components/Main/Category/Category';
// import CardList from '../components/Main/CardList';

const Main = () => {
  return (
    <div className="main">
      <Header text="전체차량" />
      {/* <Category />
      <CardList /> */}
      <CardSlide />
    </div>
  );
};

export default Main;

import Header from '../components/Header';
import CardSlide from '../components/Main/Cards/CardSlide';

const Main = () => {
  return (
    <div className="main">
      <Header text="전체차량" />
      <CardSlide />
    </div>
  );
};

export default Main;

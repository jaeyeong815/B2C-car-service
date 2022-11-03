import Header from '../components/Header';
import CarDetail from '../components/Detail/CarDetail';

const Detail = () => {
  return (
    <div className="detail">
      <Header icon={true} text="차량상세" />
      <CarDetail />
    </div>
  );
};

export default Detail;

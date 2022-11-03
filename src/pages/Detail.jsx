import Header from '../components/Header';
import CarDetail from '../components/Detail/CarDetail';
import MetaTag from '../components/MetaTag';

const Detail = () => {
  return (
    <div className="detail">
      <MetaTag />
      <Header icon={true} text="차량상세" />
      <CarDetail />
    </div>
  );
};

export default Detail;

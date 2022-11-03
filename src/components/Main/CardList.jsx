import { useNavigate } from 'react-router-dom';
import { useCar, useLoding } from '../../context/CarContext';
import comma from '../../utils/comma';
import conversionSegment from '../../utils/conversionSegment';
import conversionFuelType from '../../utils/conversionFuelType';
import CardItem from './CardItem';
import Guide from '../Guide';

const CardList = () => {
  const navigate = useNavigate();
  const isLoding = useLoding();
  const CardList = useCar();

  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };
  return isLoding ? (
    <Guide text="불러오는 중" />
  ) : CardList.length > 0 ? (
    CardList.map((car) => {
      return (
        <li className="cardList" key={car.id} onClick={() => handleClick(car.id)}>
          <CardItem
            brand={car.attribute.brand}
            name={car.attribute.name}
            segment={conversionSegment(car.attribute.segment)}
            imageUrl={car.attribute.imageUrl}
            fuelType={conversionFuelType(car.attribute.fuelType)}
            amount={comma(car.amount)}
          />
        </li>
      );
    })
  ) : (
    <Guide text="차량이 없습니다." />
  );
};

export default CardList;

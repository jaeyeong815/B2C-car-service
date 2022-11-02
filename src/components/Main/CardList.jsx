import { useCar } from '../../context/CarContext';
import comma from '../../utils/comma';
import conversionSegment from '../../utils/conversionSegment';
import CardItem from './CardItem';

const CardList = () => {
  const CardList = useCar();

  return (
    CardList &&
    CardList.map((car) => {
      return (
        <ul className="cardList" key={car.id}>
          <CardItem
            brand={car.attribute.brand}
            name={car.attribute.name}
            segment={conversionSegment(car.attribute.segment)}
            imageUrl={car.attribute.imageUrl}
            fuelType={car.attribute.fuelType}
            amount={comma(car.amount)}
          />
        </ul>
      );
    })
  );
};

export default CardList;

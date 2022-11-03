import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useSelectCar, useLoding } from '../../context/CarContext';
import comma from '../../utils/comma';
import conversionDate from '../../utils/conversionDate';
import ListHeader from './ListHeader';
import ListContent from './ListContent';
import Guide from '../Guide';
import { CAR_TYPE, CAR_FUEL_TYPE } from '../../utils/carAttribute';
import getKeyByValue from '../../utils/getKeyByValue';

const CarDetail = () => {
  const { id } = useParams();
  const isLoding = useLoding();
  const getSelectCarInfo = useSelectCar();
  const carData = getSelectCarInfo(id)[0];

  const { attribute, startDate, amount, insurance, additionalProducts } = carData;
  const { name, brand, imageUrl, segment, fuelType } = attribute;

  return isLoding ? (
    <Guide text="불러오는 중" />
  ) : (
    carData && (
      <>
        <StCarImage src={imageUrl} />
        <StTitle>
          <StBrand>{brand}</StBrand>
          <StName>{name}</StName>
        </StTitle>
        <StPrice>월 {comma(amount)} 원</StPrice>
        <div className="carInfo">
          <ListHeader text="차량 정보" />
          <ListContent name="차종" description={getKeyByValue(CAR_TYPE, segment)} />
          <ListContent name="연료" description={getKeyByValue(CAR_FUEL_TYPE, fuelType)} />
          <ListContent name="이용 가능일" description={conversionDate(startDate)} />
        </div>
        {insurance.length > 0 && (
          <div className="insurance">
            <ListHeader text="보험" />
            {carData.insurance.map((data, index) => {
              return <ListContent key={index} name={data.name} description={data.description} />;
            })}
          </div>
        )}

        {additionalProducts.length > 0 && (
          <div className="additionalProducts">
            <ListHeader text="추가상품" />
            {carData.additionalProducts.map((data, index) => {
              return <ListContent key={index} name={data.name} description={`월 ${comma(data.amount)} 원`} />;
            })}
          </div>
        )}
      </>
    )
  );
};

export default CarDetail;

const StCarImage = styled.img`
  height: 200px;
`;

const StTitle = styled.div`
  margin: 20px;
`;

const StBrand = styled.p`
  font-size: 16px;
  font-weight: 800;

  margin-bottom: 5px;
`;

const StName = styled.p`
  font-size: 20px;
  font-weight: 800;
`;

const StPrice = styled.p`
  font-size: 16px;
  text-align: end;

  margin: 13px 20px;
`;

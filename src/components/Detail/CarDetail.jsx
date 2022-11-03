import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useSelectCar, useLoding } from '../../context/CarContext';
import comma from '../../utils/comma';
import conversionSegment from '../../utils/conversionSegment';
import conversionFuelType from '../../utils/conversionFuelType';
import conversionDate from '../../utils/conversionDate';
import ListHeader from './ListHeader';
import ListContent from './ListContent';
import Guide from '../Guide';

const CarDetail = () => {
  const { id } = useParams();
  const isLoding = useLoding();
  const getSelectCarInfo = useSelectCar();
  const carData = getSelectCarInfo(id)[0];

  return isLoding ? (
    <Guide text="불러오는 중" />
  ) : (
    carData && (
      <StCarDetail>
        <StCarImage src={carData.attribute.imageUrl} />
        <StTitle>
          <StBrand>{carData.attribute.brand}</StBrand>
          <StName>{carData.attribute.name}</StName>
        </StTitle>
        <StPrice>월 {comma(carData.amount)} 원</StPrice>
        <div className="carInfo">
          <ListHeader text="차량 정보" />
          <ListContent name="차종" description={conversionSegment(carData.attribute.segment)} />
          <ListContent name="연료" description={conversionFuelType(carData.attribute.fuelType)} />
          <ListContent name="이용 가능일" description={conversionDate(carData.startDate)} />
        </div>
        {carData.insurance && (
          <div className="insurance">
            <ListHeader text="보험" />
            {carData.insurance.map((data, index) => {
              return <ListContent key={index} name={data.name} description={data.description} />;
            })}
          </div>
        )}
        {carData.additionalProducts && (
          <div className="additionalProducts">
            <ListHeader text="추가상품" />
            {carData.additionalProducts.map((data, index) => {
              return <ListContent key={index} name={data.name} description={`월 ${comma(data.amount)} 원`} />;
            })}
          </div>
        )}
      </StCarDetail>
    )
  );
};

export default CarDetail;

const StCarDetail = styled.div``;

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

import styled from 'styled-components';
import Empty from '../common/Empty';
import Subhead from '../common/Subhead';
import { useQuery } from 'react-query';
import { getCars } from '../../apis/apis';
import { options } from '../../apis/options';
import { segmentConverter, fuelTypeConverter, dateConverter } from '../../utils/functions';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const option = {
    ...options.Infinity,
    select: (data) => data.data.payload.find((item) => item.id === +id),
  };
  const { data, isLoading } = useQuery(['detail', id], getCars, option);

  if (isLoading) return <Empty text="불러오는 중" />;

  const { additionalProducts, amount, attribute, insurance, startDate } = data;
  console.log(data);

  return (
    <>
      <Img src={attribute.imageUrl} />
      <TitleBox>
        <h4>{attribute.brand}</h4>
        <h3>{attribute.name}</h3>
      </TitleBox>
      <Subhead desc={amount} isPrice />
      <Subhead text="차량 정보" isTitle />
      <Subhead text="차종" desc={segmentConverter(attribute.segment)} />
      <Subhead text="연료" desc={fuelTypeConverter(attribute.fuelType)} />
      <Subhead text="이용 가능일" desc={dateConverter(startDate)} />
      <Subhead text="보험" isTitle />
      {insurance.map((list, i) => (
        <Subhead key={i} text={list.name} desc={list.description} />
      ))}
      {additionalProducts.length !== 0 && <Subhead text="추가상품" isTitle />}
      {additionalProducts.map((list, i) => (
        <Subhead key={i} text={list.name} desc={list.amount} isPrice />
      ))}
    </>
  );
};

export default Detail;

const Img = styled.img`
  width: 100vw;
  background-color: var(--color-lightgrey);
`;

const TitleBox = styled.div`
  padding: 1rem 20px;
  h4 {
    margin-bottom: 4px;
    font-weight: 500;
  }
  h3 {
    font-size: 20px;
  }
`;

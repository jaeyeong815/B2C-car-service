import styled from 'styled-components';
import Switch from './Switch';
import { getDateDiff, segmentConverter, fuelTypeConverter } from '../../utils/functions';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
  const { id, amount, attribute, createdAt } = item;
  const { brand, fuelType, imageUrl, segment, name } = attribute;

  const navigate = useNavigate();
  const isNew = getDateDiff(createdAt);
  const changedSegment = segmentConverter(segment);
  const changedFuelType = fuelTypeConverter(fuelType);
  const changedAmount = amount.toLocaleString();

  return (
    <Container onClick={() => navigate(`/${id}`)}>
      <LeftBox>
        <h3>{brand}</h3>
        <h3>{name}</h3>
        <p>
          {changedSegment} / {changedFuelType}
        </p>
        <span>월 {changedAmount}원 부터</span>
      </LeftBox>
      <Img src={imageUrl} />
      {isNew && <Switch text="신규" smallSize />}
    </Container>
  );
};

export default Item;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid;
  position: relative;
`;

const LeftBox = styled.div`
  font-size: 15px;
  h3 {
    margin: 3px 0;
    font-size: 17px;
  }
  p {
    margin: 10px 0 2px 0;
  }
`;

const Img = styled.img`
  width: 152px;
  height: 80px;
  background-color: var(--color-lightgrey);
`;

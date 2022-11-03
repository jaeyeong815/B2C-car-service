import styled from 'styled-components';
import color from '../../../styles/color';
import { getDateDiff } from '../../../utils/getDateDiff';
import NewItemTag from './NewItemTag';

const CardItem = ({ brand, name, segment, imageUrl, fuelType, amount, createdAt }) => {
  return (
    <StCardItem>
      <div className="contentWrapper">
        <StTitle>
          <p>{brand}</p>
          <p>{name}</p>
        </StTitle>
        <StDescription>
          <p>
            {segment} / {fuelType}
          </p>
          <p>월 {amount} 원 부터</p>
        </StDescription>
      </div>
      {getDateDiff(createdAt) && <NewItemTag />}
      <StImage src={imageUrl} />
    </StCardItem>
  );
};

export default CardItem;

const StCardItem = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 120px;
  border-bottom: 1.5px ${color.black} solid;
  cursor: pointer;
`;

const StTitle = styled.div`
  margin-bottom: 10px;
  p {
    margin-bottom: 5px;
    font-weight: 800;
  }
`;

const StDescription = styled.div`
  p {
    font-size: 14px;
  }
`;

const StImage = styled.img`
  width: 170px;
  height: 80px;
`;

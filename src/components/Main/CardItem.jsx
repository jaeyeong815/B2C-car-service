import styled from 'styled-components';
import color from '../../styles/color';

// TODO props = {brand, name, classType, fuelType, amount}
const CardItem = () => {
  return (
    <StCardItem>
      <div className="contentWrapper">
        <StTitle>
          <p>기아</p>
          <p>EV6</p>
        </StTitle>
        <StDescription>
          <p>중형 / 전기</p>
          <p>월 600,000 원 부터</p>
        </StDescription>
      </div>
      <StImage />
    </StCardItem>
  );
};

export default CardItem;

const StCardItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;

  height: 120px;
  border-bottom: 1.5px ${color.black} solid;
`;

const StTitle = styled.div`
  margin-bottom: 10px;
  p {
    font-weight: 800;
  }
`;

const StDescription = styled.div``;

const StImage = styled.div`
  background-color: ${color.gray};
  width: 170px;
  height: 80px;
`;

import styled from 'styled-components';
import color from '../../styles/color';
import ListHeader from './ListHeader';
import ListContent from './ListContent';

const CarDetail = () => {
  return (
    <StCarDetail>
      <StCarImage />
      <StTitle>
        <StBrand>현대</StBrand>
        <StName>아반떼 CN7</StName>
      </StTitle>
      <StPrice>월 600,000 원</StPrice>
      <div className="carInfo">
        <ListHeader text="차량 정보" />
        <ListContent name="차종" description="중형" />
        <ListContent name="연료" description="가솔린" />
        <ListContent name="이용 가능일" description="7월 15일 (수) 부터" />
      </div>
      <div className="insurance">
        <ListHeader text="보험" />
        <ListContent name="대인" description="무한" />
        <ListContent name="대물" description="10억" />
      </div>
      <div className="additionalProducts">
        <ListHeader text="추가상품" />
        <ListContent name="하이파킹 주차권" description="월 130,000 원" />
      </div>
    </StCarDetail>
  );
};

export default CarDetail;

const StCarDetail = styled.div``;

const StCarImage = styled.div`
  background-color: ${color.gray};
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

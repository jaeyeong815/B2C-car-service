import styled from 'styled-components';
import color from '../../../styles/color';
import CategoryTag from './CategoryTag';

const Category = () => {
  return (
    <StCategory>
      <CategoryTag select={true} text="전체" />
      <CategoryTag text="대형" />
      <CategoryTag text="중형" />
      <CategoryTag text="소형" />
    </StCategory>
  );
};

export default Category;

const StCategory = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  padding: 5px 15px;

  border-bottom: 1.5px ${color.black} solid;
`;

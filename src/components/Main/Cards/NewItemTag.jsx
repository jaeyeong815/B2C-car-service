import styled from 'styled-components';
import color from '../../../styles/color';

const NewItemTag = () => {
  return (
    <StNewItemTag>
      <span>신규</span>
    </StNewItemTag>
  );
};

export default NewItemTag;

const StNewItemTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${color.blue};
  color: ${color.white};

  border: none;
  border-radius: 42px;

  width: 25px;
  height: 15px;
  margin-top: 100px;
  padding: 5px 18px;

  span {
    font-size: 14px;
    font-weight: 500;
  }
`;

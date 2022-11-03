import styled from 'styled-components';
import color from '../../../styles/color';

const CategoryTag = ({ onClick, name, select, text, id }) => {
  return (
    <StButton onClick={onClick} name={name} select={select} id={id}>
      {text}
    </StButton>
  );
};

export default CategoryTag;

const StButton = styled.button`
  background-color: ${({ select }) => (select ? color.black : color.gray)};
  color: ${({ select }) => (select ? color.white : color.black)};

  border: none;
  border-radius: 65px;

  width: 60px;
  height: 25px;

  margin-right: 8px;
  padding: 5px 18px;

  font-size: 13px;
  font-weight: 500;

  cursor: pointer;
`;

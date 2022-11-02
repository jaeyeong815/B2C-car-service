import styled from 'styled-components';
import color from '../../../styles/color';

const CategoryTag = ({ select, text }) => {
  return <StButton select={select}>{text}</StButton>;
};

export default CategoryTag;

const StButton = styled.button`
  background-color: ${({ select }) => (select ? color.black : color.gray)};
  color: ${({ select }) => (select ? color.white : color.black)};

  border: none;
  border-radius: 65px;

  width: 65px;
  height: 30px;

  margin-right: 8px;
  padding: 5px 18px;

  font-size: 16px;
  font-weight: 500;

  cursor: pointer;
`;

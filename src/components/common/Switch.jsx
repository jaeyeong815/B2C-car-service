import styled from 'styled-components';

const Switch = ({ text, smallSize, isSelected }) => {
  if (smallSize) return <SmallButton>{text}</SmallButton>;
  return <Button>{text}</Button>;
};

export default Switch;

const Button = styled.button`
  text-align: center;
  color: ${({ isSelected }) => 'var(--color-black)' || 'white'};
  background-color: ${({ isSelected }) => 'var(--color-lightgrey)' || 'var(--color-black)'};
  font-weight: ${({ isSelected }) => '600' || 'bold'};
  border: transparent;
  border-radius: 25px;
  width: 55px;
  padding: 4px;
  margin: 5px 0 5px 10px;
`;

const SmallButton = styled.button`
  position: absolute;
  top: 8px;
  right: 1%;
  text-align: center;
  color: white;
  background-color: var(--color-blue);
  font-size: 12px;
  font-weight: bold;
  border: transparent;
  border-radius: 25px;
  width: 50px;
  padding: 3px;
  margin: 5px 5px 5px 10px;
`;

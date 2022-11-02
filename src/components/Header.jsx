import styled from 'styled-components';
import color from '../styles/color';
import { BackIcon } from '../assets/BackIcon';

const Header = ({ icon, text }) => {
  return (
    <StHeader>
      {icon && <BackIcon />}
      <span>{text}</span>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;
  border-bottom: 1.5px ${color.black} solid;

  svg {
    position: absolute;
    left: 20px;
  }

  span {
    font-size: 24px;
    font-weight: 700;
  }
`;

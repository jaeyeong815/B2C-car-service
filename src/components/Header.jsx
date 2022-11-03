import styled from 'styled-components';
import color from '../styles/color';
import { BackIcon } from '../assets/BackIcon';
import { useNavigate } from 'react-router-dom';

const Header = ({ icon, text }) => {
  const navigate = useNavigate();
  return (
    <StHeader>
      {icon && (
        <div className="goBack" onClick={() => navigate('/')}>
          <BackIcon />
        </div>
      )}
      <span>{text}</span>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;
  border-bottom: 1.5px ${color.black} solid;

  div {
    position: absolute;
    left: 20px;
  }

  span {
    font-size: 20px;
    font-weight: 700;
  }
`;

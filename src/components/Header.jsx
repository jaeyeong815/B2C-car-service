import styled from 'styled-components';
import color from '../styles/color';
import { BackIcon } from '../assets/BackIcon';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const { pathname: path } = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate(-1);
  };

  return (
    <StHeader>
      {path === '/' ? (
        <span>전체 차량</span>
      ) : (
        <>
          <div onClick={handleHomeClick}>
            <BackIcon />
          </div>
          <span>차량상세</span>
        </>
      )}
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
    font-size: 24px;
    font-weight: 700;
  }
`;

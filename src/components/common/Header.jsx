import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Header = ({ title, arrow }) => {
  const navigate = useNavigate();
  return (
    <Div>
      {arrow && (
        <span onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>
      )}
      {title}
    </Div>
  );
};

export default Header;

const Div = styled.div`
  text-align: center;
  font-weight: 600;
  padding: 1.1rem;
  border-bottom: 1.2px solid;
  position: relative;
  span {
    position: absolute;
    left: 20px;
  }
`;

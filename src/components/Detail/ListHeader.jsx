import styled from 'styled-components';
import color from '../../styles/color';

const ListHeader = ({ text }) => {
  return (
    <StListHeader>
      <p>{text}</p>
    </StListHeader>
  );
};

export default ListHeader;

const StListHeader = styled.div`
  background-color: ${color.blue};
  height: 48px;

  display: flex;
  align-items: center;
  p {
    color: ${color.white};
    font-weight: 700;
    font-size: 20px;

    margin-left: 20px;
  }
`;

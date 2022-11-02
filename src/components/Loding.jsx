import styled from 'styled-components';

const Loding = () => {
  return (
    <StLoding>
      <p>불러오는 중</p>
    </StLoding>
  );
};

export default Loding;

const StLoding = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto 0;

  height: 90vh;
  p {
    font-weight: 700;
  }
`;

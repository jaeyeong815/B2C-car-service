import styled from 'styled-components';

const Guide = ({ text }) => {
  return (
    <StGuide>
      <p>{text}</p>
    </StGuide>
  );
};

export default Guide;

const StGuide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto 0;

  height: 90vh;
  p {
    font-weight: 700;
  }
`;

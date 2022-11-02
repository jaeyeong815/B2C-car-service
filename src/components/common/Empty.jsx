import styled from 'styled-components';

const Empty = ({ text }) => {
  return (
    <Container>
      <Div>{text}</Div>
    </Container>
  );
};

export default Empty;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const Div = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

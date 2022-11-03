import styled from 'styled-components';

const ListContent = ({ name, description }) => {
  return (
    <StListContent>
      <StName>{name}</StName>
      <StDescription>{description}</StDescription>
    </StListContent>
  );
};

export default ListContent;

const StListContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 13px 20px;
`;

const StName = styled.p`
  font-size: 16px;
  font-weight: 800;
`;

const StDescription = styled.p`
  font-size: 16px;
`;

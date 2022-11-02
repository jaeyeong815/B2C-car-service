import React from 'react';
import styled from 'styled-components';

const Subhead = ({ text, isTitle, isPrice, desc }) => {
  if (isTitle) return <Title>{text}</Title>;
  if (isPrice)
    return (
      <SubTitleBox>
        <h4>{text}</h4>
        <div>월 {desc.toLocaleString()} 원</div>
      </SubTitleBox>
    );
  return (
    <SubTitleBox>
      <h4>{text}</h4>
      <div>{desc}</div>
    </SubTitleBox>
  );
};

export default Subhead;

const Title = styled.div`
  max-width: 100%;
  height: 40px;
  padding: 2px 20px;
  color: white;
  font-weight: 600;
  background-color: var(--color-blue);
  display: flex;
  align-items: center;
`;

const SubTitleBox = styled.div`
  max-width: 100%;
  height: 40px;
  padding: 2px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4 {
    font-weight: 600;
  }
`;

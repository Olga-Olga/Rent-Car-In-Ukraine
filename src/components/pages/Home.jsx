import React from 'react';
import { styled } from 'styled-components';

export const Home = () => {
  return (
    <>
      <StyledDiv>
        <h1>
          You want to be flexible and move whereever you want. We are open to
          you. Rent car service has wide and{' '}
        </h1>
        <button>Review Catalog here</button>
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  flex: 1;
  height: 1px;
  background-color: grey;
  margin-top: 20px;
`;

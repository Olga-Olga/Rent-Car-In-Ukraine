import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Home = () => {
  return (
    <>
      <StyledDiv>
        <h1>
          You want to be flexible and move whereever you want. We are open to
          you. Rent car service has wide and{' '}
        </h1>
        <button>
          <NavLinkStyled to="/catalog">Review Catalog here</NavLinkStyled>
        </button>
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

const NavLinkStyled = styled(NavLink)`
  /* position: relative; */
  display: flex;
`;
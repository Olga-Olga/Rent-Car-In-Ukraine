import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Navbar = () => {
  return (
    <StyledWrapper>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
      <NavLinkStyled to="/favorites">Favorite</NavLinkStyled>
    </StyledWrapper>
  );
};

const NavLinkStyled = styled(NavLink)`
  display: flex;
  text-decoration: none;
  padding: 5px;
  &.active {
    background-color: #8f82f5;
    color: white;
    border-radius: 5px;
    padding: 5px;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  padding: 20px;
`;

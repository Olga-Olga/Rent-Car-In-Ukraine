import React from 'react';
import { NavLinkStyled, StyledWrapper } from './Navbar.styled';

export const Navbar = () => {
  return (
    <StyledWrapper>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
      <NavLinkStyled to="/favorites">Favorite</NavLinkStyled>
    </StyledWrapper>
  );
};

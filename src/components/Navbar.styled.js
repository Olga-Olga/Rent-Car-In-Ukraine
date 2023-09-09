import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  text-decoration: none;
  padding: 5px;
  color: ${({ theme }) => theme.colors.dark};
  &.active {
    background-color: ${({ theme }) => theme.colors.perple};
    color: white;
    border-radius: 5px;
    padding: 5px;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  padding: 20px;
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StNavLink = styled(NavLink)`
  display: flex;
`;

export const StyledDiv = styled.h3`
  width: 400px;
`;

export const StyledDivWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 20px;
  background-image: linear-gradient(
      rgba(170, 170, 170, 0.7),
      rgba(89, 90, 90, 0.7)
    ),
    url('https://www.hertz.com/content/dam/hertz/global/blog-articles/resources/car-rental-vs-car-sharing/car-keys.rendition.xlarge.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

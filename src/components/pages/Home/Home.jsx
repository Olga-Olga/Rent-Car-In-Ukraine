import React from 'react';
import {
  StyledDiv,
  // NavLinkStyled,
  StyledDivWrapper,
} from './Home.styled';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <StyledDivWrapper>
        <StyledDiv>
          "Are you yearning for ultimate flexibility and the freedom to explore
          wherever your heart desires? Look no further! Our company is here to
          make your dreams a reality. Rent a car from us and embark on your
          unforgettable journey today."
          <hr />
          Ви прагнете максимальної гнучкості та свободи бути там, де забажає
          ваше серце? Не шукайте далі! Наша компанія тут, щоб втілити ваші мрії
          в реальність. Орендуйте у нас автомобіль і вирушайте у свою незабутню
          подорож сьогодні.
        </StyledDiv>
        <NavLink to="/catalog">Click here to Review the Catalog</NavLink>
      </StyledDivWrapper>
    </>
  );
};

import React from 'react';
import { NavLink } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { logoutThunk } from 'redux/Auth/authOperations';
// import { logoutThunk } from 'redux/authOperations';
// import {
// selecIsRefresh,
//   selectIsLoggedIn,
// selectUserEmail,
//   selectUserName,
// } from 'redux/Auth/authSelector';
import { styled } from 'styled-components';

export const Navbar = () => {
  //   const [isLoggingOut, setIsLoggingOut] = useState(false);
  //   const dispatch = useDispatch();
  // const logout = useSelector(isLogin);

  //   const handleLogout = () => {
  //     setIsLoggingOut(true);
  //     dispatch(logoutThunk())
  //       .unwrap()
  //       .then(() => {
  //         toast.success('See you later!');
  //       })
  //       .finally(() => {
  //         setIsLoggingOut(false); // Поверніть isLoggingOut назад в false
  //       });
  //   };

  //   const isLogin = useSelector(selectIsLoggedIn);
  //   const name = useSelector(selectUserName);

  return (
    <StyledWrapper>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
      <NavLinkStyled to="/favorites">Favorite</NavLinkStyled>
      {/* <NavLinkStyled to="/">Home</NavLinkStyled>
      {isLogin ? (
        <div>USER: {name}</div>
      ) : (
        <NavLinkStyled to="/login">Login</NavLinkStyled>
      )}
      {isLogin ? (
        <div>
          <NavLinkStyled to="/contact">Contacts</NavLinkStyled>
          <button onClick={handleLogout} disabled={isLoggingOut}>
            Logout
          </button>
        </div>
      ) : (
        <NavLinkStyled to="/register">Register</NavLinkStyled>
      )} */}
    </StyledWrapper>
  );
};

const NavLinkStyled = styled(NavLink)`
  /* position: relative; */
  display: flex;
`;

const StyledWrapper = styled.div`
  display: flex;
`;

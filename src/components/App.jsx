import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import { Layout } from './Layout';
import { Home } from './pages/Home/Home';
import { Catalog } from './pages/Catalog/Catalog';
import { Favorites } from './pages/Favorites/Favorites';
import styled from 'styled-components';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export const StyleRotes = styled.div`
  https: ; //github.com/riko1212/slider-swiper
  /* display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center; */
  /* flex-shrink: 0;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  border: 0;
  &:hover {
    background: #0b44cd;
  } */
`;

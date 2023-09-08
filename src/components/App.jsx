// import {  useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import { Layout } from './Layout';
import { Home } from './pages/Home/Home';
import { Catalog } from './pages/Catalog/Catalog';
import { Favorites } from './pages/Favorites/Favorites';
// import { useDispatch } from 'react-redux';

export const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchCars());
  // }, [dispatch]);

  return (
    <Routes>
      {/* <ImageGallery
        onModal={toggleModal}
        total={total}
        hits={hits}
        totalHits={totalHits}
      /> */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

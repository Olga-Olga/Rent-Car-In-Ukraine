import { useEffect, useState } from 'react';
import { Modal } from './Modal';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { Layout } from './Layout';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { Favorites } from './pages/Favorites';
import { useDispatch } from 'react-redux';

export const App = () => {
  const [carItem, setCarItem] = useState('');

  const toggleModal = oneCar => {
    // setCarItem(largeImageURL ? largeImageURL : '');
    setCarItem(carItem);
  };

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchCars());
  // }, [dispatch]);

  return (
    <Routes>
      {/* {largeImageURL && (
        // <Modal onClose={toggleModal}>
        <Modal onClose={() => toggleModal('')}>
          <img className="modal" src={largeImageURL} alt="la-la-la" />
        </Modal>
      )} */}
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

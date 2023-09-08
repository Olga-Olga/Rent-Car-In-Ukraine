import { useDispatch, useSelector } from 'react-redux';
import {
  selectCars,
  selectCurrentPage,
  selectFavorite,
  selectItemOnPage,
} from 'redux/car/carSelector';
import {
  Favorite,
  NotFavorite,
  StyledCarDescription,
  StyledCarModel,
  StyledDiv,
  StyledHart,
  StyledImg,
  StyledImgDiv,
  StyledItem,
  StyledLoadMoreBtn,
  StyledLoadMoreLink,
  StyledOl,
  StyledTitleCard,
  StyledTitleFirstPart,
} from '../Catalog/Catalog.styled';
import {
  addToFavoriteList,
  incrementPage,
  removeFromFavoriteList,
} from 'redux/car/carSlice';
import { SpriteSVG } from 'components/assets/SpriteSVG';
import { useState } from 'react';
import { Modal } from 'components/Modal';

export const Favorites = () => {
  const dispatch = useDispatch();
  const carsFavorite = useSelector(selectFavorite);
  const currentPage = useSelector(selectCurrentPage);
  const itemsOnPage = useSelector(selectItemOnPage);
  const toggleFavoriteList = car => {
    if (carsFavorite.some(item => car.id === item.id)) {
      dispatch(removeFromFavoriteList(car));
    } else {
      dispatch(addToFavoriteList(car));
    }
  };
  const [selectedCar, setSelectedCar] = useState(null);
  const onOpenModal = id => {
    setSelectedCar(id);
  };

  const toggleModal = id => {
    setSelectedCar(id ? id : '');
    setSelectedCar(id);
  };

  const onPageUpload = () => {
    dispatch(incrementPage());
  };

  const startIndex = (currentPage - 1) * itemsOnPage;
  const endIndex = startIndex + itemsOnPage;
  const carsFavoriteBlock = useSelector(selectFavorite).slice(0, endIndex);

  const displayLoadMore =
    carsFavoriteBlock.length < useSelector(selectFavorite).length;

  return (
    <StyledDiv>
      {!carsFavorite.length ? (
        <div>No any cars are in your favorite list</div>
      ) : null}
      <StyledOl>
        {carsFavoriteBlock.map(car => {
          return (
            <StyledItem key={car.id}>
              <StyledHart onClick={() => toggleFavoriteList(car)}>
                {carsFavorite.some(item => car.id === item.id) ? (
                  <Favorite>
                    <SpriteSVG name="hart" />
                  </Favorite>
                ) : (
                  <NotFavorite>
                    <SpriteSVG name="hart" />
                  </NotFavorite>
                )}
              </StyledHart>
              <StyledImgDiv>
                <StyledImg src={car.img} alt={car.model} />
              </StyledImgDiv>
              <StyledTitleCard>
                <StyledTitleFirstPart>
                  {car.make}
                  <StyledCarModel>{car.model},</StyledCarModel>
                  {car.year}
                </StyledTitleFirstPart>
                <div>{car.rentalPrice}</div>
              </StyledTitleCard>
              <StyledCarDescription>
                {car.address.split(',')[1]} | {car.address.split(',')[2]} |{' '}
                {car.rentalCompany.replace(`/\bPremium\b/gi`, '')}
                {(
                  car.address.split(',')[1] +
                  car.address.split(',')[2] +
                  car.rentalCompany
                ).length < 37
                  ? '| Premium'
                  : null}
              </StyledCarDescription>
              <StyledCarDescription>
                {car.type} | {car.model} | {car.id} |{' '}
                {car.accessories[Math.floor(Math.random() * 3)]}
              </StyledCarDescription>
              <StyledLoadMoreBtn onClick={() => onOpenModal(car)}>
                Learn More
              </StyledLoadMoreBtn>
            </StyledItem>
          );
        })}
      </StyledOl>
      {selectedCar && (
        <Modal onClose={() => toggleModal(``)}>
          <div>{selectedCar}</div>
        </Modal>
      )}
      {displayLoadMore ? (
        <StyledLoadMoreLink onClick={onPageUpload}>
          Load More
        </StyledLoadMoreLink>
      ) : null}
    </StyledDiv>
  );
};

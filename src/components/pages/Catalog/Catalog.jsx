import { Modal } from 'components/Modal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsThunkPerPage } from 'redux/car/carOperations';
import { clearData, incrementPage } from 'redux/car/carSlice';
import {
  selectCars,
  selectCurrentPage,
  selectFavorite,
  selectItemOnPage,
  selectTotalPages,
} from 'redux/car/carSelector';
import { removeFromFavoriteList, addToFavoriteList } from 'redux/car/carSlice';
import {
  Favorite,
  NotFavorite,
  StyledCarDescription,
  StyledCarModel,
  StyledDiv,
  StyledDivLable,
  StyledFilterBlock,
  StyledHart,
  StyledImg,
  StyledImgDiv,
  StyledItem,
  StyledLoadMoreBtn,
  StyledLoadMoreLink,
  StyledOl,
  StyledTitle,
  StyledTitleCard,
  StyledTitleFirstPart,
} from './Catalog.styled';
import { SpriteSVG } from 'components/assets/SpriteSVG';

const Catalog = () => {
  const dispatch = useDispatch();
  const [selectedCar, setSelectedCar] = useState(null);
  const currentPage = useSelector(selectCurrentPage);

  // const itemsOnPage = useSelector(selectItemOnPage);
  // const endIndex = currentPage * itemsOnPage;
  const carList = useSelector(selectCars);
  const totalPages = useSelector(selectTotalPages);
  const onPageUpload = () => {
    dispatch(incrementPage());
  };

  const displayLoadMore = currentPage < totalPages;

  useEffect(() => {
    dispatch(getCarsThunkPerPage(currentPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
    return () => {
      dispatch(clearData());
    };
  }, [dispatch]);

  const carsFavorite = useSelector(selectFavorite);
  const toggleFavoriteList = car => {
    if (carsFavorite.some(item => car.id === item.id)) {
      dispatch(removeFromFavoriteList(car));
    } else {
      dispatch(addToFavoriteList(car));
    }
  };

  const onOpenModal = id => {
    setSelectedCar(id);
  };

  const toggleModal = id => {
    setSelectedCar(id ? id : '');
    setSelectedCar(id);
  };

  return (
    <StyledDiv>
      <StyledTitle>Catalog here</StyledTitle>
      <StyledOl>
        {carList.map(car => {
          const firstLineStructure =
            car.make.length + car.model.length < 13 && car.make.length < 6
              ? true
              : false;
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
                <StyledImg $imageUrl={car.img} alt={car.model} />
              </StyledImgDiv>
              <StyledTitleCard>
                <StyledTitleFirstPart>
                  {car.make}
                  {firstLineStructure ? (
                    <StyledCarModel> {car.model}</StyledCarModel>
                  ) : null}
                  , {car.year}
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
      {displayLoadMore ? (
        <StyledLoadMoreLink onClick={onPageUpload}>
          Load More
        </StyledLoadMoreLink>
      ) : null}
      {selectedCar && (
        <Modal onClose={() => toggleModal(``)}>
          <div>{selectedCar}</div>
        </Modal>
      )}
    </StyledDiv>
  );
};

export default Catalog;

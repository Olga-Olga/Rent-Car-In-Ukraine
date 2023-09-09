import { Modal } from 'components/Modal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsThunk } from 'redux/car/carOperations';
import { incrementPage } from 'redux/car/carSlice';
import {
  selectCars,
  selectCurrentPage,
  selectFavorite,
  selectItemOnPage,
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
import { listOfUnique } from 'components/assets/helperMethods';

export const Catalog = () => {
  const dispatch = useDispatch();
  const [selectedCar, setSelectedCar] = useState(null);
  const currentPage = useSelector(selectCurrentPage);
  const itemsOnPage = useSelector(selectItemOnPage);
  const endIndex = currentPage * itemsOnPage;
  const carList = useSelector(selectCars).slice(0, endIndex);
  const onPageUpload = () => {
    dispatch(incrementPage());
  };

  const displayLoadMore = carList.length < useSelector(selectCars).length;

  useEffect(() => {
    dispatch(getCarsThunk());
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
      <StyledFilterBlock>
        <StyledDivLable>
          <div>Car brand</div>
          <select>
            <option value="" disabled selected>
              Enter the text
            </option>
            {listOfUnique(useSelector(selectCars), 'make').map(make => {
              return <option key={make}>{make}</option>;
            })}
          </select>
        </StyledDivLable>
        <StyledDivLable>
          <div>Price/ 1 hour</div>
          <select>
            <option value="" disabled selected>
              To $
            </option>
            {listOfUnique(useSelector(selectCars), 'rentalPrice').map(price => {
              return <option key={price}>{price}</option>;
            })}
          </select>
        </StyledDivLable>
        <StyledDivLable>
          <div>Сar mileage / km</div>
          <div>
            <input
              type="number"
              name="quantity"
              id="quantity"
              min="0"
              step="1"
            />
            <input
              type="number"
              name="quantity"
              id="quantity"
              min="0"
              step="1"
            />
          </div>
        </StyledDivLable>
      </StyledFilterBlock>
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

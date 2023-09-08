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
  // StyledDivLable,
  // StyledFilterBlock,
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

export const Catalog = () => {
  const dispatch = useDispatch();
  const [selectedCar, setSelectedCar] = useState(null);
  const currentPage = useSelector(selectCurrentPage);
  const itemsOnPage = useSelector(selectItemOnPage);
  const startIndex = (currentPage - 1) * itemsOnPage;
  const endIndex = startIndex + itemsOnPage;
  const carList = useSelector(selectCars).slice(0, endIndex);
  const onPageUpload = () => {
    dispatch(incrementPage());
  };

  const displayLoadMore = carList.length < useSelector(selectCars).length;

  useEffect(() => {
    dispatch(getCarsThunk());
    console.log(dispatch(getCarsThunk()));
  }, [dispatch]);

  const carsFavorite = useSelector(selectFavorite);
  const toggleFavoriteList = car => {
    if (carsFavorite.some(item => car.id === item.id)) {
      dispatch(removeFromFavoriteList(car));
    } else {
      dispatch(addToFavoriteList(car));
    }
  };
  // const uniquePrices = [...new Set(carList.map(car => car.rentalPrice))].sort(
  //   (a, b) => b - a
  // );

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
      {/* <StyledFilterBlock>
        <StyledDivLable>
          <div>Car brand</div>
          <select>
            <option value="" disabled selected>
              Enter the text
            </option>
            {carList.map(car => {
              return <option key={car.id}>{car.make}</option>;
            })}
          </select>
        </StyledDivLable>
        <StyledDivLable>
          <div>Price/ 1 hour</div>
          <select>
            <option value="" disabled selected>
              To $
            </option>
            {uniquePrices.map(price => {
              return <option key={price}>{price}</option>;
            })}
          </select>
        </StyledDivLable>
        <StyledDivLable>
          <div>Сar mileage / km</div>
          <div class="double-select">
            <select class="column" id="from">
              <option value="" disabled selected>
                From
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <select class="column" id="to">
              <option value="" disabled selected>
                To
              </option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
          </div>
        </StyledDivLable>
      </StyledFilterBlock> */}
      <StyledOl>
        {carList.map(car => {
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
                {/* <StyledImg $imageUrl={car.img} alt={car.model} /> */}
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

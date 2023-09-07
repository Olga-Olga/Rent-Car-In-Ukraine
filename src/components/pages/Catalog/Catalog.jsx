// import { ContactsForm } from 'components/ContactForm/ContactForm';
// import ContactList from 'components/ContactList/ContactList';
// import Filter from 'components/Filter/Filter';
import { Modal } from 'components/Modal';
import { useEffect } from 'react';
// import { FcFilledFilter, FcSmartphoneTablet, FcTodoList } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsThunk } from 'redux/car/carOperations';
import {
  selectCars,
  selectFavorite,
  selectFavoriteCars,
} from 'redux/car/carSelector';
import { removeFromFavoriteList, addToFavoriteList } from 'redux/car/carSlice';
// import { fetchContacts } from 'redux/Contacts/operations';
// import { selectIsLoading } from 'redux/Contacts/selector';
// import { fetchContacts } from 'redux/operations';
// import { selectIsLoading } from 'redux/Auth/authSelector';
import { styled } from 'styled-components';
import {
  StyledCarDescription,
  StyledCarModel,
  StyledDiv,
  StyledDivLable,
  StyledFilterBlock,
  StyledHart,
  StyledImg,
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
  const carList = useSelector(selectCars);
  // if (!carList.length) {
  //   return;
  // }
  console.log('carList', carList);

  // console.log(carsFavorite);
  // const toggleModal = oneCar => {
  // setCarItem(largeImageURL ? largeImageURL : '');
  //   setCarItem(carItem);
  // };
  const uniquePrices = [...new Set(carList.map(car => car.rentalPrice))].sort(
    (a, b) => b - a
  );

  useEffect(() => {
    dispatch(getCarsThunk());
    console.log(dispatch(getCarsThunk()));
  }, [dispatch]);

  const carsFavorite = useSelector(selectFavorite);
  console.log(carsFavorite);
  const toggleFavoriteList = car => {
    if (carsFavorite.some(item => car.id === item.id)) {
      dispatch(removeFromFavoriteList(car));
    } else {
      dispatch(addToFavoriteList(car));
    }
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
      </StyledFilterBlock>
      <StyledOl>
        {carList.map(car => {
          // const carsFavorite = carsFavorite.some(item => item.id === car.id);

          return (
            <StyledItem key={car.id}>
              <StyledHart
                // carsFavorite={carsFavorite}
                onClick={() => toggleFavoriteList(car)}
              >
                <SpriteSVG name="hart"></SpriteSVG>
              </StyledHart>
              <StyledImg src={car.img} alt={car.model} />
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
              <StyledLoadMoreBtn>Load More</StyledLoadMoreBtn>
            </StyledItem>
          );
        })}
      </StyledOl>
      <StyledLoadMoreLink>Load More</StyledLoadMoreLink>

      {/* {largeImageURL && (
        <Modal onClose={() => toggleModal('')}>
          <div>MODAL WINDOW</div>
        </Modal>
      )} */}
    </StyledDiv>
  );
};

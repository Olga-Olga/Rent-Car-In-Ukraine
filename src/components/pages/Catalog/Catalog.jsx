import { Modal } from 'components/Modal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsThunkPerPage, getThunkAllCars } from 'redux/car/carOperations';
import { clearData, incrementPage, setItems } from 'redux/car/carSlice';
import {
  selectAllList,
  selectCars,
  selectCurrentPage,
  selectFavorite,
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
  StyledSearchBtn,
  StyledSelected,
  StyledTitle,
  StyledTitleCard,
  StyledTitleFirstPart,
} from './Catalog.styled';
import { SpriteSVG } from 'components/assets/SpriteSVG';
import { listOfUnique } from 'components/assets/helperMethods';

const Catalog = () => {
  const dispatch = useDispatch();
  const [selectedCar, setSelectedCar] = useState(null);
  const currentPage = useSelector(selectCurrentPage);
  let carList = useSelector(selectCars);
  const allCars = useSelector(selectAllList);
  const totalPages = useSelector(selectTotalPages);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);

  const onPageUpload = () => {
    dispatch(incrementPage());
  };

  useEffect(() => {
    dispatch(getCarsThunkPerPage(currentPage));
    dispatch(getThunkAllCars());
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

  const onSubmitHandle = e => {
    e.preventDefault();
    const filteredCars = allCars.filter(car => {
      if (
        (!selectedBrand || car.make === selectedBrand) &&
        (!selectedPrice || Number(car.rentalPrice.slice(1)) <= selectedPrice)
      ) {
        return true;
      }
      return false;
    });

    dispatch(setItems(filteredCars));
    setSearchPerformed(true);
  };

  const onResetFilters = () => {
    dispatch(clearData());
    window.location.reload();
  };

  return (
    <StyledDiv>
      <StyledTitle>Catalog here</StyledTitle>
      <StyledFilterBlock onSubmit={onSubmitHandle}>
        <StyledDivLable>
          <div>Car brand</div>
          <StyledSelected
            placeholder="select the brand"
            defaultValue=""
            onChange={e => setSelectedBrand(e.target.value)}
          >
            <option value="" disabled>
              Select the brand
            </option>
            {listOfUnique(allCars, 'make').map(make => {
              return <option key={make}>{make}</option>;
            })}
          </StyledSelected>
        </StyledDivLable>
        <StyledDivLable>
          <div>Price/ 1 hour</div>
          <StyledSelected
            placeholder="To $"
            defaultValue=""
            onChange={e => setSelectedPrice(e.target.value)}
          >
            <option value="" disabled>
              To $
            </option>
            {listOfUnique(useSelector(selectAllList), 'rentalPrice').map(
              price => {
                return <option key={price}>{price}</option>;
              }
            )}
          </StyledSelected>
        </StyledDivLable>
        <StyledDivLable>
          <div> </div>
          <StyledSearchBtn type="submit">Search</StyledSearchBtn>
        </StyledDivLable>
        <StyledDivLable>
          <div> </div>
          <StyledSearchBtn type="reset" onClick={onResetFilters}>
            Reset
          </StyledSearchBtn>
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
      {!searchPerformed && currentPage < totalPages ? (
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

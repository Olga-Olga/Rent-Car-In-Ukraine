import { useDispatch, useSelector } from 'react-redux';
// import { StyledDiv } from './Favorites.styled';
import { selectFavorite } from 'redux/car/carSelector';
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
  StyledOl,
  StyledTitleCard,
  StyledTitleFirstPart,
} from '../Catalog/Catalog.styled';
import { addToFavoriteList, removeFromFavoriteList } from 'redux/car/carSlice';
import { SpriteSVG } from 'components/assets/SpriteSVG';

export const Favorites = () => {
  const favoriteList = useSelector(selectFavorite);
  const dispatch = useDispatch();
  const carsFavorite = useSelector(selectFavorite);
  const toggleFavoriteList = car => {
    if (carsFavorite.some(item => car.id === item.id)) {
      dispatch(removeFromFavoriteList(car));
    } else {
      dispatch(addToFavoriteList(car));
    }
  };

  return (
    <StyledDiv>
      {!carsFavorite.length ? (
        <div>No any cars are in your favorite list</div>
      ) : null}
      <StyledOl>
        {favoriteList.map(car => {
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
              <StyledLoadMoreBtn>Learn More</StyledLoadMoreBtn>
            </StyledItem>
          );
        })}
      </StyledOl>
    </StyledDiv>
  );
};

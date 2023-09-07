export const selectCars = state => state.cars.items;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;
export const selectFavorite = state => state.favoriteList;
export const selectIsModalOpen = state => state.isOpenModal;
// export const selectFavoriteCars = state => {
//   const favoriteCarIds = state.cars.favoriteList;
//   return state.cars.items.filter(car => favoriteCarIds.includes(car.id));
// };

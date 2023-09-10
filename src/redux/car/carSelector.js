export const selectCars = state => state.cars.items;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;
export const selectFavorite = state => state.favoriteList;
export const selectIsModalOpen = state => state.isOpenModal;
export const selectItemOnPage = state => state.itemsOnPage;
export const selectCurrentPage = state => state.currentPage;
export const selectTotalPages = state => state.totalPages;

const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

const isFavorite = (id: number) => favorites.includes(id);

export default isFavorite;

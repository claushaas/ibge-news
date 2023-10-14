const isFavorite = (id: number) => JSON.parse(localStorage.getItem('favorites') || '[]')
  .includes(id);

export default isFavorite;

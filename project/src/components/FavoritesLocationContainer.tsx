import FavoriteOffer from './FavoriteOffer';

// данный компонент группирует избранные предложения по городам
function FavoritesLocationContainer (): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {/* Избранные предложения */}
        <FavoriteOffer/>
        <FavoriteOffer/>
        <FavoriteOffer/>
      </div>
    </li>
  );
}

export default FavoritesLocationContainer;

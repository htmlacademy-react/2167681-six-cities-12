import Offer from './Offer';
import { protoOffer } from '../utils/types';
import { ActivePage } from '../utils/consts';

type LocationContainerProps = {
	offers: protoOffer[];
	city: string;
	typePage: ActivePage;
}

// данный компонент группирует избранные предложения по городам
function FavoritesLocationContainer ({offers, city, typePage}: LocationContainerProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {/* Избранные предложения */}
        {
          offers.map((el) => (<Offer key={el.id} offer={el} typePage={typePage}/>))
        }
      </div>
    </li>
  );
}

export default FavoritesLocationContainer;

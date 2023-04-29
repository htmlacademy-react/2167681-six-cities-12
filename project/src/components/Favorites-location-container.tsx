import Offer from './Offer';
import { protoOffer } from '../types/types';
import { OfferCardClassName, } from '../utils/consts';

type LocationContainerProps = {
	offers: protoOffer[];
	city: string;
}

// данный компонент группирует избранные предложения по городам
function FavoritesLocationContainer ({offers, city}: LocationContainerProps): JSX.Element {
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
          offers.map((el) => (<Offer key={el.id} offer={el} place={OfferCardClassName.favorites}/>))
        }
      </div>
    </li>
  );
}

export default FavoritesLocationContainer;

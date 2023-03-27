import { cities } from '../mocks/city';
import { useAppDispatch } from '../hooks';
import { setCity } from '../store/action';
import { City } from '../types/types';
// Кнопка с названием города (для поиска предложений)

type LocationProps = {
	city: string;
}


function LocationItem ({city}: LocationProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCurrentCity = () => {
    const currentCity = (cities.filter((el) => el.title === city ));
    const x: City = {...currentCity[0]};
    return dispatch(setCity(x));
  };


  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#" onClick={() => handleCurrentCity()}>
        <span>{city}</span>
      </a>
    </li>
  );
}

export default LocationItem;

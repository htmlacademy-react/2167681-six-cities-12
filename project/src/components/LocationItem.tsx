import { cities } from '../utils/consts';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setCity } from '../store/site-process/site-silecer';
import { City } from '../types/types';
import { getCity } from '../store/site-process/site-selector';
import { useCallback } from 'react';
// Кнопка с названием города (для поиска предложений)

type LocationProps = {
	city: string;
}

function LocationItem ({city}: LocationProps): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector(getCity);

  const handleCurrentCity = useCallback(() => {
    const currentCity = (cities.filter((el) => el.name === city ));
    const x: City = {...currentCity[0]};

    return dispatch(setCity(x));}, [dispatch]);


  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${activeCity.name === city ? 'tabs__item--active' : '' }`} href="#" onClick={() => handleCurrentCity()}>
        <span>{city}</span>
      </a>
    </li>
  );
}

export default LocationItem;

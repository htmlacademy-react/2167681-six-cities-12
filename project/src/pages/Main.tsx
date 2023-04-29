import FoundOffers from '../components/Found-offers';
import LocationItem from '../components/Location-item';
import { Helmet } from 'react-helmet-async';
import { CallPlace, cities } from '../utils/consts';

function MainPage(): JSX.Element {

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities.Аренда жилья в Европе</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {cities.map((el) => <LocationItem key={el.name} city={el.name} place={CallPlace.Main}/>)}
            </ul>
          </section>
        </div>
        {/* Отображение предложений.*/}
        <FoundOffers />
      </main>
    </div>
  );
}

export default MainPage;

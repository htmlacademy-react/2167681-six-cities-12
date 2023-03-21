import FoundOffers from '../components/FoundOffers';
import LocationItem from '../components/LocationItem';
import { Helmet } from 'react-helmet-async';
import { protoOffer, City } from '../types/types';
import { ActivePage } from '../utils/consts';

 type MainPageProps = {
   offers: protoOffer[];
	cityCatalog: string[];
	typePage: ActivePage;
	city: City;
}

function MainPage({offers, cityCatalog, typePage, city} : MainPageProps ): JSX.Element {
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
              {cityCatalog.map((el) => <LocationItem key={el} city={el}/>)}
            </ul>
          </section>
        </div>
        {/* Отображение предложений.*/}
        <FoundOffers offers={offers} typePage={typePage} city={city}/>
      </main>
    </div>
  );
}


export default MainPage;

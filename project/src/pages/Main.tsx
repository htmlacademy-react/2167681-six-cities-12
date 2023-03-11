import FoundOffers from '../components/FoundOffers';
import LocationItem from '../components/LocationItem';
import { Helmet } from 'react-helmet-async';
import { protoOffer } from '../utils/types';

 type MainPageProps = {
   offers: protoOffer[];
	cityCatalog: string[];
}

function MainPage({offers, cityCatalog} : MainPageProps ): JSX.Element {
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
              {/* <LocationItem city={offers}/> */}
              {cityCatalog.map((el) => <LocationItem key={el} city={el}/>)}
            </ul>
          </section>
        </div>
        {/* Отображение предложений.*/}
        <FoundOffers offers={offers}/>
      </main>
    </div>
  );
}


export default MainPage;

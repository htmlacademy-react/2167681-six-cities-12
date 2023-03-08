import FoundOffers from '../components/FoundOffers';
import LocationItem from '../components/LocationItem';
import {} from 'react-router-dom';

 type MainPageProps = {
	countsOffers: number;
/* 	offers: string[]; */
}

function MainPage({countsOffers,} : MainPageProps ): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <LocationItem />
              <LocationItem />
              <LocationItem />
              <LocationItem />
              <LocationItem />
              <LocationItem />
            </ul>
          </section>
        </div>
        {/* Отображение предложений.*/}
        <FoundOffers countsOffers={countsOffers}/*  offers={offers}  *//>
      </main>
    </div>
  );
}


export default MainPage;

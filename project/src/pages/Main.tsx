import FoundOffers from '../components/FoundOffers';
import LocationItem from '../components/LocationItem';
import { Helmet } from 'react-helmet-async';
import { cities } from '../mocks/city';


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
              {cities.map((el) => <LocationItem key={el.title} city={el.title}/>)}
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

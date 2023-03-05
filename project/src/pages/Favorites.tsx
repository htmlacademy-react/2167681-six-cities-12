import Footer from '../components/Footer';
import FavoritesLocationContainer from '../components/FavoritesLocationContainer';

function Favorites (): JSX.Element {
  return (
    <div>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoritesLocationContainer />
              <FavoritesLocationContainer />
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}


export default Favorites;

import MainPage from '../../pages/mainPage/main-page';

 type AppScreenProps = {
	countOffers: number;

};

function App( {countOffers} : AppScreenProps ): JSX.Element {
  return <MainPage countsOffers={countOffers}/>;
}


export default App;

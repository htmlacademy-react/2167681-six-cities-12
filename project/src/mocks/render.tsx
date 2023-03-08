import {TYPE_OFFER, COUNT_BEDROOM, COUNT_GUESTS, PRICE_FOR_NIGHT, PHOTO,
  TITLE, DESCRIPTION} from '../mocks/data';

type protoMock = {
	city:string;
    photo: string;
    title: string;
    typeOffer: string;
    description: string;
    countBedRoom: string;
    priceForNight: string;
    countGuests: string;
}


function getRandomIntInclusiveArrayElement(array: string[]): string {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}


function renderMock (): protoMock {
  return {
    city:getRandomIntInclusiveArrayElement(PHOTO),
    photo: getRandomIntInclusiveArrayElement(PHOTO),
    title: getRandomIntInclusiveArrayElement(TITLE),
    typeOffer: getRandomIntInclusiveArrayElement(TYPE_OFFER),
    description: getRandomIntInclusiveArrayElement(DESCRIPTION),
    countBedRoom: getRandomIntInclusiveArrayElement(COUNT_BEDROOM),
    priceForNight: getRandomIntInclusiveArrayElement(PRICE_FOR_NIGHT),
    countGuests: getRandomIntInclusiveArrayElement(COUNT_GUESTS)
  };
}

function renderArrayMocks (count : number) {
  const arrayMocks = [];

  for(let i = 0; i < count; i++) {
    arrayMocks.push(renderMock());
  }
}


export {
  renderArrayMocks
};

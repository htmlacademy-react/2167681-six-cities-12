/* eslint-disable no-mixed-spaces-and-tabs */
import { nanoid } from 'nanoid';

import {
  TYPE_OFFER, COUNT_BEDROOM, COUNT_GUESTS, PRICE_FOR_NIGHT, PHOTO,
  TITLE, DESCRIPTION, CITY
} from '../mocks/data';


type protoMock = {
	id: string;
	photo: string;
	city: string;
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


function renderMock(): protoMock {
  return {
    id: nanoid(),
    city: getRandomIntInclusiveArrayElement(CITY),
    photo: getRandomIntInclusiveArrayElement(PHOTO),
    title: getRandomIntInclusiveArrayElement(TITLE),
    typeOffer: getRandomIntInclusiveArrayElement(TYPE_OFFER),
    description: getRandomIntInclusiveArrayElement(DESCRIPTION),
    countBedRoom: getRandomIntInclusiveArrayElement(COUNT_BEDROOM),
    priceForNight: getRandomIntInclusiveArrayElement(PRICE_FOR_NIGHT),
    countGuests: getRandomIntInclusiveArrayElement(COUNT_GUESTS)
  };
}

function renderArrayMocks(count: number) {
  const arrayMocks: protoMock[] = [];

  for (let i = 0; i < count; i++) {
    arrayMocks.push(renderMock());
  }

  return arrayMocks;
}


export {
  renderArrayMocks
};

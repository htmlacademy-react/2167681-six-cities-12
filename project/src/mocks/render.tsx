/* eslint-disable no-mixed-spaces-and-tabs */
import { nanoid } from 'nanoid';
import { protoOffer } from '../utils/types';

import {
  TYPE_OFFER, COUNT_BEDROOM, COUNT_GUESTS, PRICE_FOR_NIGHT, PHOTO,
  TITLE, DESCRIPTION, CITY, BOOLEAN, RATING
} from '../mocks/data';


function getRandomIntInclusiveArrayElement<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}


function renderMock(): protoOffer {
  return {
    id: nanoid(),
    city: getRandomIntInclusiveArrayElement(CITY),
    photo: getRandomIntInclusiveArrayElement(PHOTO),
    title: getRandomIntInclusiveArrayElement(TITLE),
    typeOffer: getRandomIntInclusiveArrayElement(TYPE_OFFER),
    description: getRandomIntInclusiveArrayElement(DESCRIPTION),
    countBedRoom: getRandomIntInclusiveArrayElement(COUNT_BEDROOM),
    priceForNight: getRandomIntInclusiveArrayElement(PRICE_FOR_NIGHT),
    countGuests: getRandomIntInclusiveArrayElement(COUNT_GUESTS),
	 isFavorite: getRandomIntInclusiveArrayElement(BOOLEAN),
	 isPremium: getRandomIntInclusiveArrayElement(BOOLEAN),
	 rating: getRandomIntInclusiveArrayElement(RATING),
  };
}

function renderArrayMocks(count: number):protoOffer[] {
  const arrayMocks: protoOffer[] = [];

  for (let i = 0; i < count; i++) {
    arrayMocks.push(renderMock());
  }

  return arrayMocks;
}


export {
  renderArrayMocks
};

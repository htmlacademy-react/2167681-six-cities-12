/* eslint-disable no-mixed-spaces-and-tabs */
import { nanoid } from 'nanoid';
import { protoOffer } from '../types/types';

import {
  TYPE_OFFER, COUNT_BEDROOM, COUNT_GUESTS, PRICE_FOR_NIGHT, PHOTO,
  TITLE, DESCRIPTION, CITY, BOOLEAN, RATING, LATITUDE, LONGITUDE, MAP_ZOOM
} from '../mocks/data';


function getRandomIntInclusiveArrayElement<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}


function renderMock(i: number): protoOffer {
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
	 coordinates: {
      latitude: LATITUDE[i],
      longitude: LONGITUDE[i],
      zoom: MAP_ZOOM
	 }
  };
}

function renderArrayMocks(count: number):protoOffer[] {
  const arrayMocks: protoOffer[] = [];

  for (let i = 0; i < count; i++) {
    arrayMocks.push(renderMock(i));
  }

  return arrayMocks;
}


export {
  renderArrayMocks
};

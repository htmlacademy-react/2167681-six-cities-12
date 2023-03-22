/* eslint-disable no-mixed-spaces-and-tabs */
import { nanoid } from 'nanoid';
import { protoOffer, Review } from '../types/types';

import {
  TYPE_OFFER, COUNT_BEDROOM, COUNT_GUESTS, PRICE_FOR_NIGHT, PHOTO,
  TITLE, DESCRIPTION, CITY, BOOLEAN, RATING, LATITUDE, LONGITUDE, MAP_ZOOM, AVATAR,
  NAME,
} from '../mocks/data';

const COUNT_MOCK_FILES = 4;

function getRandomIntInclusiveArrayElement<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function renderReview (i: number): Review {
  return {
	 id: i,
    avatar: getRandomIntInclusiveArrayElement(AVATAR),
    name: getRandomIntInclusiveArrayElement(NAME),
    rating: getRandomIntInclusiveArrayElement(RATING),
    date: new Date(),
    discription: getRandomIntInclusiveArrayElement(DESCRIPTION)
  };
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
    reviews: arrayReviews,
	 coordinates: {
      latitude: LATITUDE[i],
      longitude: LONGITUDE[i],
      zoom: MAP_ZOOM
	 }
  };
}

const arrayReviews: Review[] = Array.from({length: COUNT_MOCK_FILES}, (_, i) => renderReview(i));

const arrayOffers: protoOffer[] = Array.from({length: COUNT_MOCK_FILES},(_, i) => renderMock(i));

export {
  arrayOffers,
  arrayReviews
};

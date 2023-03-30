import { protoOffer } from '../types/types';
import {CurrentOfferKey} from './consts';


export const filterOffers = (offers: protoOffer[], currentKey: CurrentOfferKey, value: string | boolean | number) => {

  const result: protoOffer[] = [];

  for(const offer of offers ) {
    if (offer[currentKey] === value) {
      result.push(offer);
    }
  }

  return result;
};


const random = (min: number, max: number) => Math.round(Math.random() * (max - min) + min);

const array = Array.from({length: 10},() => random(1, 10));

console.log(array.sort())

export const sortHightPrice = (a: protoOffer ,b: protoOffer) => a.priceForNight > b.priceForNight ? -1 : 1;

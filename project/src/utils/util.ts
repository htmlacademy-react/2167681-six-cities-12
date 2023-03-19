import { protoOffer } from './types';
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



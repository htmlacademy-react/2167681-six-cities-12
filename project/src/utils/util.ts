import { protoOffer } from '../types/types';
import {CurrentOfferKey, DateFormant} from './consts';
import dayjs from 'dayjs';


export const filterOffers = (offers: protoOffer[], currentKey: CurrentOfferKey, value: string | boolean | number) => {

  const result: protoOffer[] = [];

  for(const offer of offers ) {
    if (offer[currentKey] === value) {
      result.push(offer);
    }
  }

  return result;
};

export const dateFormatting = (date: Date, dateFormat: DateFormant) => dayjs(date).format(dateFormat);



import { createAction } from '@reduxjs/toolkit';
import { City, protoOffer, Sorting, OfferDetails} from '../types/types';

export const setCity = createAction<City>('searchOffers/setCity');

export const setOffers = createAction<protoOffer[]>('searchOffers/setOffers');

export const setSort = createAction<Sorting>('serachOffers/setSort');

export const setOfferDetails = createAction<OfferDetails>('searchOffers/offerDetails');

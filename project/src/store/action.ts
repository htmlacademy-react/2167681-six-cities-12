import { createAction } from '@reduxjs/toolkit';
import { City, protoOffer } from '../types/types';

export const setCity = createAction<City>('searchOffers/setCity');

export const setOffers = createAction<protoOffer[]>('searchOffers/setOffers');

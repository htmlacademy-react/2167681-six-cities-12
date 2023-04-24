import {createSelector} from '@reduxjs/toolkit';
import type { State } from '../../types/state';
import type { Comment, protoOffer } from '../../types/types';
import { StoreSliceName, sortingMethods } from '../../utils/consts';
import { getSort, getCity } from '../site-process/site-selector';

export const getIsOffersLoading = ({[StoreSliceName.DataProcess]: SITE_DATA}: State): boolean => SITE_DATA.isOfferLoading;
export const getOffers = ({[StoreSliceName.DataProcess]: SITE_DATA}: State): protoOffer[] => SITE_DATA.offers;

export const getIsOfferLoading = ({[StoreSliceName.DataProcess]: SITE_DATA}: State): boolean => SITE_DATA.isOfferLoading;
export const getOffer = ({[StoreSliceName.DataProcess]: SITE_DATA}: State): protoOffer | null => SITE_DATA.offer;

export const getComments = ({[StoreSliceName.DataProcess]: SITE_DATA}: State): Comment[] => SITE_DATA.comments;
export const getNearbyOffers = ({[StoreSliceName.DataProcess]: SITE_DATA}: State): protoOffer[] => SITE_DATA.nearbyOffers;

export const getFavorite = ({[StoreSliceName.DataProcess]: SITE_DATA}: State): protoOffer[] => SITE_DATA.favorites;

export const offerSelector = createSelector(
  [getOffers, getCity, getSort],
  (offers, city, sorting) => offers.filter((offer) => offer.city.name === city.name).sort(sortingMethods[sorting])
);

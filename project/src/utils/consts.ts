/* eslint-disable indent */
import { protoOffer } from '../types/types';
import { Sorting } from '../types/types';
export const MAX_PERCENT_STARS_WIDTH = 100;
export const STARS_COUNT = 5;


export const sortingMethods: {
      [key in Sorting]: (a: protoOffer, b: protoOffer) => number
	} = {
	Popular: () => 0,
	PriceIncrease: (a, b) => a.priceForNight - b.priceForNight,
	DecreasingPrice: (a, b) => b.priceForNight - a.priceForNight,
	TopRatedFirst: (a, b) => a.rating - b.rating,
	};


export enum MapClassName {
	offerId = 'property__map',
	main = 'cities__map'
}

export enum OfferCardClassName {
	offerId = 'near-places',
	main = 'cities',
	favorites = 'favorites'
}

export enum AppRoute {
	Main = '/',
	Login = '/login',
	Favorites = '/favorites',
	Offer = '/offers/:id'
}

export enum OfferPhotoSize {
	FavoritesWidth = 150,
	FavoritesHeight = 110,
	CommonWidth = 260,
	CommonHeight = 200,
}

export enum Counter {
	Offers = 4,
}

export enum DateFormant {
	CommentDate = 'MMMM YYYY'
}

export enum AuthorizationStatus {
	Auth = 'AUTH',
	NoAuth = 'NO_AUTH',
	Unknown = 'UNKNOWN',
}

export enum ActivePage {
	Favorites = 'favorites',
	Main = 'main'
}

export enum SortName {
	Popular = 'Popular',
	PriceIncrease = 'Price: low to high',
	DecreasingPrice = 'Price: high to low',
	TopRatedFirst = 'Top rated first'
}

//Города находятся на панели навигации
export const CatalogCity: string[] = [
  'Paris', 'Cologne', 'Amsterdam', 'Hamburg', 'Dusseldorf', 'Brussels',
];

export enum CurrentOfferKey {
	Id = 'id',
	Photo = 'photo',
	City = 'city',
	Title = 'title',
	TypeOffer = 'typeOffer',
	Description = 'description',
	CountBedRoom = 'countBedRoom',
	PriceForNight = 'priceForNight',
	CountGuests = 'countGuests',
	IsFavorite = 'isFavorite',
	IsPremium = 'isPremium',
	Rating = 'rating',
}

export const NEW_CITY = {
  title: 'Нью-Йорк',
  lat: 40.835292,
  lng: -73.916236,
  zoom: 10,
};

export const URL_MARKER_DEFAULT =
	'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
	'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

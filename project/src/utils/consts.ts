
import { protoOffer, City } from '../types/types';
import { Sorting } from '../types/types';
export const MAX_PERCENT_STARS_WIDTH = 100;
export const STARS_COUNT = 5;


export const sortingMethods: {
	[key in Sorting]: (a: protoOffer, b: protoOffer) => number
} = {
  Popular: () => 0,
  PriceIncrease: (a, b) => a.price - b.price,
  DecreasingPrice: (a, b) => b.price - a.price,
  TopRatedFirst: (a, b) => a.rating - b.rating,
};

export enum ApiRoutes {
	Offers = '/hotels',
	Comments = '/comments',
	Login = '/login'
}

export enum ResponseCode {
	NotFound = 404
}

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
	Offer = '/offers/:id',
	NotFound = '/404'
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
	Images = 'images',
	Id = 'id',
	PreviewImage = 'previewImage',
	Town = 'city',
	Title = 'title',
	TypeOffer = 'type',
	Description = 'description',
	CountBedRoom = 'bedrooms',
	PriceForNight = 'price',
	MaxAdults = 'maxAdults',
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

export enum ApiMethods {
	POST = 'POST',
	GET = 'GET',
	PUT = 'PUT',
	DELETE = 'DELETE',

}

export enum StoreSliceName {
  DataProcess = 'DATA-PROCESS',
  SiteProcess = 'SITE-PROCESS',
  UserProcess = 'USER-PROCESS'
}

export const cities: City [] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.858940,
      longitude: 2.343173,
      zoom: 10,
    }
  },
  {
    name: 'Cologne',
    location:{
      latitude: 50.940331,
      longitude: 6.959726,
      zoom: 10,
    }
  },
  {
    name: 'Amsterdam',
    location:{
      latitude: 52.377994,
      longitude: 4.916109,
      zoom: 10,
    }
  },
  {
    name: 'Hamburg',
    location:{
      latitude: 53.546736,
      longitude: 9.987128,
      zoom: 10,
    }
  },
  {
    name: 'Dusseldorf',
    location:{
      latitude: 51.223523,
      longitude: 6.776697,
      zoom: 10,
    }
  },
  {
    name: 'Brussels',
    location:{
      latitude: 50.864958,
      longitude: 4.356678,
      zoom: 10,
    }
  }
];

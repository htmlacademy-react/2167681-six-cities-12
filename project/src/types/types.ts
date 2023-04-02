import { SortName } from '../utils/consts';

// Шаблон предложения аренды
export type protoOffer = {
	id: string;
	photo: string;
	city: string;
	title: string;
	typeOffer: string;
	description: string;
	countBedRoom: number;
	priceForNight: number;
	countGuests: number;
	isFavorite: boolean;
	isPremium: boolean;
	rating: number;
	reviews: Review[];
	coordinates: Сoordinates;
};

// тип данных для работы с картой
export type coordinatesMap = {
	city: string;
	coordinates: string[];
}

export type City = {
	title: string;
	lat: number;
	lng: number;
	zoom: number;
 };

export type Сoordinates = {
	latitude: number;
	longitude: number;
	zoom: number;
	distance?: number;
 };

export type Review = {
	id: number;
	avatar: string;
	name: string;
	rating: number;
	date: Date;
	discription: string;
}

export type OfferDetails = {
	currentOffer: protoOffer;
	nearbyOffers: protoOffer[];


}

export type Sorting = keyof typeof SortName;

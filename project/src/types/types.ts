import { SortName } from '../utils/consts';

export type User = {
	id: number;
	avatarUrl: string;
	name: string;
	isPro: boolean;
}

// Шаблон предложения аренды
export type protoOffer = {
	id: number;
	previewImage: string;
	city: City;
	title: string;
	type: string;
	description: string;
	bedrooms: number;
	price: number;
	host: User;
	images: string[];
	maxAdults: number;
	isFavorite: boolean;
	isPremium: boolean;
	goods: string[];
	rating: number;
	location: Location;
};

// тип данных для работы с картой
export type coordinatesMap = {
	city: string;
	coordinates: string[];
}

export type City = {
	name: string;
	location: Location;
 };

export type Location = {
	latitude: number;
	longitude: number;
	zoom: number;
 };

export type Review = {
	id: number;
	avatar: string;
	name: string;
	rating: number;
	date: Date;
	discription: string;
}

export type Comment = {
	comment: string;
	date: Date;
	id: number;
	rating: number;
	user: {
		avatarUrl: string;
		id: number;
		isPro: boolean;
		name: string;
	};
}


export type Sorting = keyof typeof SortName;


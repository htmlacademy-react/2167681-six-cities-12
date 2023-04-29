import { SortName } from '../utils/consts';

export type User = {
	id: number;
	avatarUrl: string;
	name: string;
	isPro: boolean;
	token: string;
	email: string;
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

export type Comment = {
	comment: string;
	date: Date;
	id: number;
	rating: number;
	user: User;
}

export type favorireStatus = Pick <protoOffer, 'id' | 'isFavorite'>
export type userAuth = Pick<User, 'email'> & {password: string};
export type commentAuth = Pick<Comment, 'comment' | 'rating'> & Pick<protoOffer, 'id'>
export type Sorting = keyof typeof SortName;


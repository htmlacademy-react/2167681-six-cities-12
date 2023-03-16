export enum AppRoute {
	Main = '/',
	Login = '/login',
	Favorites = '/favorites',
	Offer = '/offers/:id'
}


export enum Counter {
	Offers = 4,
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

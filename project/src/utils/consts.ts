export enum AppRoute {
	Main = '/',
	Login = '/login',
	Favorites = '/favorites',
	Offer = '/offers/:id'
}


export enum Counter {
	Count_offers = 8888,
	Offers = 4,
	Favorites_offers = 2,
}

export enum AuthorizationStatus {
	Auth = 'AUTH',
	NoAuth = 'NO_AUTH',
	Unknown = 'UNKNOWN',
}

export const City: string[] = [
  'Paris', 'Cologne', 'Amsterdam', 'Hamburg', 'Dusseldorf', 'Brussels'
];

// Шаблон предложения аренды
export type protoOffer = {
	id: string;
	photo: string;
	city: string;
	title: string;
	typeOffer: string;
	description: string;
	countBedRoom: string;
	priceForNight: string;
	countGuests: string;
	isFavorite: boolean;
	isPremium: boolean;
	rating: number;
};

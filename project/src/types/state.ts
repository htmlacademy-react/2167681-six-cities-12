import { store } from '../store';
import { City, protoOffer, Sorting, User, Comment} from './types';
import { AuthorizationStatus } from '../utils/consts';

export type State = ReturnType <typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type Store = {
	city: City;
	offers: protoOffer[];
	sorting: Sorting;
	isOffersLoading: boolean;
	isOfferLoading: boolean;
	offer: protoOffer | null;
	nearbyOffers: protoOffer[];
	comments: Comment[];
 }

export type UserPath = {
	authorizationStatus: AuthorizationStatus;
	user: User['email'];
 }


import { store } from '../store';
import { City, protoOffer, Sorting, User, Comment} from './types';
import { AuthorizationStatus } from '../utils/consts';

export type State = ReturnType <typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type DataStore = {
	offers: protoOffer[];
	isOffersLoading: boolean;
	isOfferLoading: boolean;
	offer: protoOffer | null;
	nearbyOffers: protoOffer[];
	comments: Comment[];
	favorites: protoOffer[];
 }

export type UserStore = {
	authorizationStatus: AuthorizationStatus;
	user: User['email'];
 }

export type SiteStore = {
	city: City;
	sorting: Sorting;
}

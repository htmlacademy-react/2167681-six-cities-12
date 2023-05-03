import type { User, protoOffer, Comment } from '../../types/types';
import { cities } from '../../utils/consts';
import { dataSlicer } from './data-slicer';
import { fetchFavoriteOffers, fetchNearbyOffers, fetchOffer, fetchOfferComments, fetchOffers, postCommet, postFavoriteOffer } from '../action';
import { PendingStatus } from '../../utils/consts';

const user: User = {
  avatarUrl: 'img/ttt.jpg',
  email: 'umpalumpa222@mail.ru',
  isPro: true,
  id: 8888,
  name: 'Boris',
  token: 'AFASSFNSDFKASND12312FDFA3FASF44FDFDSFSD3123'
};


const offers: protoOffer[] = [{
  id: 5,
  bedrooms: 4,
  city: cities[0],
  description: 'Bibabugule',
  isFavorite: true,
  goods: ['wi-fi', 'shower', 'toster'],
  host: user,
  images: ['img/afafaf.jpg', 'img/tytyty.jpg', 'img/zzzz.jpg', 'img/asdasd.jpg', 'img/123123.jpg'],
  isPremium: true,
  location: cities[0].location,
  maxAdults: 4,
  previewImage: 'img/dfdgdgdg.jpg',
  price: 141414,
  rating: 4.7,
  title: 'VERY WONDERFULL',
  type: 'House'
}];

const comments: Comment[] = [{
  comment: 'BBUBUBUBUBUUBUBBUB',
  date: new Date('December 17'),
  id: 822222,
  rating: 4,
  user: user
}];

describe('Reduser: data-slicer', () => {
  //получение массива офферов
  it ('should return fetch offers', () => {
    const state = {
      offers: [],
      isOffersLoading: false,
      offer: null,
      nearbyOffers:[],
      comments: [],
      isOfferLoading: false,
      isFavoritesLoading: false,
      favorites: [],
      isCommentPending: PendingStatus.Inactive
    };
    expect(dataSlicer.reducer(state, {type: fetchOffers.fulfilled.type, payload: offers}))
      .toEqual({...state,
        offers: offers,
        isOffersLoading: false,

      });
    expect(dataSlicer.reducer(state, {type: fetchOffers.pending.type}))
      .toEqual({...state,
        offers: [],
        isOffersLoading: true,

      });
    expect(dataSlicer.reducer(state, {type: fetchOffers.rejected.type}))
      .toEqual({
        ...state,
        offers: [],
        isOffersLoading: false,
      });
  });
  // получение выбранного оффера
  it ('should return fetch offer', () => {
    const state = {
      offers: [],
      isOffersLoading: false,
      offer: null,
      nearbyOffers:[],
      comments: [],
      isOfferLoading: false,
      isFavoritesLoading: false,
      favorites: [],
      isCommentPending: PendingStatus.Inactive
    };

    expect(dataSlicer.reducer(state, {type: fetchOffer.fulfilled.type, payload: offers[0]}))
      .toEqual({...state,
        offer: offers[0],
        isOfferLoading: false,
      });
    expect(dataSlicer.reducer(state, {type: fetchOffer.pending.type}))
      .toEqual({...state,
        offer: null,
        isOfferLoading: true,
      });
    expect(dataSlicer.reducer(state, {type: fetchOffer.rejected.type}))
      .toEqual({...state,
        offer: null,
        isOfferLoading: false,
      });
  });

  it('should return fetch Favorites offers', () => {
    const state = {
      offers: [],
      isOffersLoading: false,
      offer: null,
      nearbyOffers:[],
      comments: [],
      isOfferLoading: false,
      isFavoritesLoading: false,
      favorites: [],
      isCommentPending: PendingStatus.Inactive
    };
    expect(dataSlicer.reducer(state, {type: fetchFavoriteOffers.fulfilled.type, payload: offers}))
      .toEqual({...state,
        isFavoritesLoading: false,
        favorites: offers,
      });
    expect(dataSlicer.reducer(state, {type: fetchFavoriteOffers.pending.type}))
      .toEqual({...state,
        isFavoritesLoading: true,
        favorites: [],
      });
    expect(dataSlicer.reducer(state, {type: fetchFavoriteOffers.rejected.type}))
      .toEqual({...state,
        isFavoritesLoading: false,
        favorites: [],
      });
  });

  it('should return fetch nearby offers', () => {
    const state = {
      offers: [],
      isOffersLoading: false,
      offer: null,
      nearbyOffers:[],
      comments: [],
      isOfferLoading: false,
      isFavoritesLoading: false,
      favorites: [],
      isCommentPending: PendingStatus.Inactive
    };

    expect(dataSlicer.reducer(state, {type: fetchNearbyOffers.fulfilled.type, payload: offers}))
      .toEqual({...state,
        nearbyOffers: offers,
      });
  });

  it('should return fetch comments', () => {
    const state = {
      offers: [],
      isOffersLoading: false,
      offer: null,
      nearbyOffers:[],
      comments: [],
      isOfferLoading: false,
      isFavoritesLoading: false,
      favorites: [],
      isCommentPending: PendingStatus.Inactive
    };
    expect(dataSlicer.reducer(state, {type: fetchOfferComments.fulfilled.type, payload: comments}))
      .toEqual({...state,
        comments: comments,
      });

  });

  it('should return post comments', () => {
    const state = {
      offers: [],
      isOffersLoading: false,
      offer: null,
      nearbyOffers:[],
      comments: [],
      isOfferLoading: false,
      isFavoritesLoading: false,
      favorites: [],
      isCommentPending: PendingStatus.Inactive
    };
    expect(dataSlicer.reducer(state, {type: postCommet.fulfilled.type, payload: comments}))
      .toEqual({...state,
        comments: comments,
        isCommentPending: PendingStatus.Fulfilled
      });
    expect(dataSlicer.reducer(state, {type: postCommet.pending.type}))
      .toEqual({...state,
        comments: [],
        isCommentPending: PendingStatus.Loading
      });
    expect(dataSlicer.reducer(state, {type: postCommet.rejected.type}))
      .toEqual({...state,
        comments: [],
        isCommentPending: PendingStatus.Error
      });
  });

  it('should return post Favorite', () => {
    const state = {
      offers,
      isOffersLoading: false,
      offer: null,
      nearbyOffers:[],
      comments: [],
      isOfferLoading: false,
      isFavoritesLoading: false,
      favorites: [] as protoOffer[],
      isCommentPending: PendingStatus.Inactive
    };
    expect(dataSlicer.reducer(state, {type: postFavoriteOffer.fulfilled.type, payload: {...offers[0], isFavorite: true }}))
      .toEqual({ ...state,
        offers: [{...offers[0], isFavorite: true }],
        isFavoritesLoading: false,
        favorites: [{...offers[0], isFavorite: true }],
      });


    expect(dataSlicer.reducer(state, {type: postFavoriteOffer.fulfilled.type, payload: {...offers[0], isFavorite: false }}))
      .toEqual({...state,
        offers:[{...offers[0], isFavorite: false }]
      });
  });
});

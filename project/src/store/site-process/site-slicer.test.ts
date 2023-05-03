import { setCity, setSort, siteSlicer } from './site-silecer';
import { cities, SortName } from '../../utils/consts';
import { Sorting } from '../../types/types';


describe('Reduser: site-slicer', () => {
  it ('without aditional parametrs should return default state', () => {
    expect(siteSlicer.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        city: cities[0],
        sorting: SortName.Popular
      });
  });

  it ('the name of the city matches the selection', () => {
    const state = {
      city: cities[0],
      sorting: SortName.Popular as Sorting
    };
    expect(siteSlicer.reducer(state, setCity(cities[0])))
      .toEqual({
        ...state,
        city: cities[0]
      });

  });
  it ('the name of the soring matches the selection', () => {
    const state = {
      city: cities[0],
      sorting: SortName.Popular as Sorting
    };
    expect(siteSlicer.reducer(state, setSort(SortName.PriceIncrease as Sorting)))
      .toEqual({
        ...state,
        sorting: SortName.PriceIncrease
      });
  });

});

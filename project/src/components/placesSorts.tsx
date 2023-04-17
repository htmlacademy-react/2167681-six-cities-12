import { Sorting } from '../types/types';
import { useAppSelector, useAppDispatch } from '../hooks';
import { SortName } from '../utils/consts';
import {useState} from 'react';
import { setSort } from '../store/offerSlicer';

function PlacesSorts(): JSX.Element {
  const currentSort = useAppSelector((state) => state.offersPath.sorting);
  const [sortList, setSortList] = useState<boolean>(false);
  const onSortListHidden = () => {
    setSortList(!sortList);
  };

  const dispatch = useAppDispatch();
  const onSortTypeChange = (name: Sorting) => {
    dispatch(setSort(name));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={onSortListHidden}>
        {SortName[currentSort]}
      </span>
      <ul className={`places__options places__options--custom places__options--${sortList ? 'opened' : 'closed'}`} >
        {(Object.entries(SortName) as [Sorting, SortName][]).map(([name, info]) =>
          (
            <li key={name}
              onClick={() => {
                onSortTypeChange(name);
                onSortListHidden();
              }} className={`places__option ${name === currentSort ? 'places__option--active' : ''}`} tabIndex={0}
            >{info}
            </li>)
        )}
      </ul>
    </form>
  );
}

export default PlacesSorts;

import { Sorting } from '../types/types';
import { useAppSelector, useAppDispatch } from '../hooks';
import { SortName } from '../utils/consts';
import {memo, useCallback, useState} from 'react';
import { setSort } from '../store/site-process/site-silecer';
import { getSort } from '../store/site-process/site-selector';

function PlacesSorts(): JSX.Element {
  const currentSort = useAppSelector(getSort);
  const [sortList, setSortList] = useState<boolean>(false);
  const onSortListHidden = useCallback( () => {
    setSortList(!sortList);
  }, [sortList]);

  const dispatch = useAppDispatch();
  const onSortTypeChange = useCallback((name: Sorting) => {
    dispatch(setSort(name));
  }, [dispatch]);

  const renderSortItems = useCallback(() =>
    (Object.entries(SortName) as [Sorting, SortName][]).map(([name, info]) =>
      (
        <li key={name}
          onClick={() => {
            onSortTypeChange(name);
            onSortListHidden();
          }} className={`places__option ${name === currentSort ? 'places__option--active' : ''}`} tabIndex={0}
        >{info}
        </li>)
    ), [onSortTypeChange, onSortListHidden, currentSort]);


  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={onSortListHidden}>
        {(SortName[currentSort])}
      </span>
      <ul className={`places__options places__options--custom places__options--${sortList ? 'opened' : 'closed'}`} >
        {/* не стал делать отдельный компонент для li, или так будет правильнее? */}
        {renderSortItems()}
      </ul>
    </form>
  );
}
// мемо ради мемо
export default memo(PlacesSorts);

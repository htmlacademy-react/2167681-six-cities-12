import { Sorting } from '../types/types';
import { useAppSelector, useAppDispatch } from '../hooks';
import { SortName } from '../utils/consts';
import { useState} from 'react';
import { setSort } from '../store/site-process/site-silecer';
import { getSort } from '../store/site-process/site-selector';
import SortItem from './Sort-item';

function PlacesSorts(): JSX.Element {
  const currentSort = useAppSelector(getSort);
  const [sortList, setSortList] = useState<boolean>(false);

  const onSortListHidden = () => {
    setSortList(!sortList);
  };

  const dispatch = useAppDispatch();

  const onSortTypeChange = (name: Sorting) => {
    dispatch(setSort(name));
  };

  const renderSortItems = () =>
    (Object.entries(SortName) as [Sorting, SortName][]).map(([name, info]) =>
      <SortItem key={name} info={info} name={name} onSortListHidden={onSortListHidden} onSortTypeChange={onSortTypeChange}/>
    );


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
export default PlacesSorts;

import { SortName } from '../utils/consts';
import { Sorting } from '../types/types';
import { useAppSelector } from '../hooks';
import { getSort } from '../store/site-process/site-selector';

type SortItemProps = {
 name: Sorting;
 onSortTypeChange: (name: Sorting) => void;
 onSortListHidden: () => void;
 info: SortName;
}

function SortItem ({name, onSortTypeChange, onSortListHidden, info}: SortItemProps):JSX.Element {
  const currentSort = useAppSelector(getSort);
  return (
    <li
      onClick={() => {
        onSortTypeChange(name);
        onSortListHidden();
      }} className={`places__option ${name === currentSort ? 'places__option--active' : ''}`} tabIndex={0}
    >{info}
    </li>);}


export default SortItem;

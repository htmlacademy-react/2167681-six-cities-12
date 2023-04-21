import { State } from '../../types/state';
import { City, Sorting } from '../../types/types';
import { StoreSliceName } from '../../utils/consts';


export const getSort = ({ [StoreSliceName.SiteProcess]: SITE_PROCESS }: State): Sorting => SITE_PROCESS.sorting;
export const getCity = ({[StoreSliceName.SiteProcess]: SITE_PROCESS}: State): City => SITE_PROCESS.city;

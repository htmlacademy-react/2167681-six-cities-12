import { DateFormant} from './consts';
import dayjs from 'dayjs';

export const dateFormatting = (date: Date, dateFormat: DateFormant) => dayjs(date).format(dateFormat);



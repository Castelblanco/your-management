import { DateTime } from 'luxon';

export const getDateFromFormat = (date: Date, format: string) => {
    return DateTime.fromJSDate(date).toFormat(format);
};

export const getDateDays = (date: Date) => {
    return `${DateTime.fromJSDate(date).daysInMonth?.toString()}`;
};

export const getDateNow = () => DateTime.now().toJSDate();

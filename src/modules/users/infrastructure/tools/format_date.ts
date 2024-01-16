import type { TDateFormat } from '@users/app/services/find_all';

const DAYS = 'dd';
const MONTHS = 'mm';
const YEARS = 'yy';

export const getDateFormat = (date: string | number, format?: TDateFormat): string => {
    let time: Date;

    if (typeof date === 'string') time = new Date(date);
    else time = new Date(date * 1000);

    if (format === 'iso') return time.toISOString();
    if (!format) {
        return `${time.getDate()}-${time.getMonth()}-${time.getFullYear()}`;
    }

    let finishTime = '';

    format.split('/').forEach((section, i) => {
        if (i !== 0) finishTime += '/';
        if (section === DAYS) return (finishTime += `${time.getDate()}`);
        if (section === MONTHS) return (finishTime += `${time.getMonth()}`);
        if (section === YEARS) return (finishTime += `${time.getFullYear()}`);
    });

    return finishTime;
};

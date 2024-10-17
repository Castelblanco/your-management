import { TGuideServiceExporter } from '@guides_service/app/services';
import {
    TGuideServiceCommodityDOM,
    TGuideServiceDOM,
    TGuideServiceTypeServiceDOM,
} from '@guides_service/domain/entities';
import xlsx, { CellObject } from 'sheetjs-style';
import { getDateFromFormat, getDateNow } from './datetime';
import { ErrorBadRequest } from '@common/response/errors/bad_request';

type CellStyle = CellObject['s'];

export class GuideServiceExporter implements TGuideServiceExporter {
    router = async (
        guides: TGuideServiceDOM[],
        typeServices: TGuideServiceTypeServiceDOM[],
    ): Promise<Buffer> => {
        this.validGuides(guides);

        const rows: CellObject[][] = [];

        this.addPDVData(rows, guides[0]);
        const rowsTypeServices: CellObject[] = typeServices.map((svc) => {
            return {
                t: 's',
                v: svc.tab,
                s: titleStyle,
            };
        });
        rows.push([...ROUTER_HEADER, ...rowsTypeServices]);

        guides.forEach((guide) => {
            const { clientOrigin, service, commodity } = guide;
            const rowsTypeServices: CellObject[] = typeServices.map((svc) => {
                return {
                    t: 's',
                    v: service?.id === svc.id ? this.addCommoditySummary(commodity) : '',
                };
            });
            rows.push([
                {
                    t: 's',
                    v: getDateFromFormat(guide.createdAt, 'dd/MM/yyyy'),
                },
                {
                    t: 's',
                    v: clientOrigin?.natural
                        ? `${clientOrigin.firstName} ${clientOrigin.firstName}`
                        : `${clientOrigin?.businessName}`,
                },
                {
                    t: 's',
                    v: clientOrigin?.address,
                },
                {
                    t: 's',
                    v: clientOrigin?.numberMovil,
                },
                {
                    t: 's',
                    v: getDateFromFormat(guide.createdAt, 'HH:mm'),
                },
                ...rowsTypeServices,
            ]);
        });

        const book = xlsx.utils.book_new();
        const sheet = xlsx.utils.aoa_to_sheet<CellObject>(rows);
        xlsx.utils.book_append_sheet(book, sheet, 'RUTERO');

        return xlsx.write(book, {
            type: 'buffer',
        });
    };

    addCommoditySummary = (commodity: TGuideServiceCommodityDOM[]): string => {
        return `${commodity.reduce((pre, { units }) => (pre += units), 0)}`;
    };

    addPDVData = (rows: CellObject[][], guide: TGuideServiceDOM) => {
        const dateNow = getDateNow();
        rows.push([
            {
                t: 's',
                v: 'RECEPTORIA: ',
                s: titleStyle,
            },
            {
                t: 's',
                v: guide.pointSaleOrigin?.name,
            },
            {
                t: 's',
                v: 'REGIONAL: ',
                s: titleStyle,
            },
            {
                t: 's',
                v: guide.pointSaleOrigin?.department,
            },
            {
                t: 's',
                v: 'MES DE IMPRESIÓN: ',
                s: titleStyle,
            },
            {
                t: 's',
                v: getDateFromFormat(dateNow, 'MM/yyyy'),
            },
        ]);
    };

    validGuides = (guides: TGuideServiceDOM[]) => {
        if (guides.length === 0) {
            throw new ErrorBadRequest('There are no guides to export');
        }
    };
}

const titleStyle: CellStyle = {
    font: {
        bold: true,
    },
    alignment: {
        horizontal: 'center',
    },
};

const ROUTER_HEADER: CellObject[] = [
    {
        t: 's',
        v: 'FECHA',
        s: titleStyle,
    },
    {
        t: 's',
        v: 'NOMBRE - RAZON SOCIAL',
        s: titleStyle,
    },
    {
        t: 's',
        v: 'DIRECCIÓN',
        s: titleStyle,
    },
    {
        t: 's',
        v: 'TELEFONO',
        s: titleStyle,
    },
    {
        t: 's',
        v: 'HORA RECOL',
        s: titleStyle,
    },
];

const CUSTOMER_TRAKING_HEADER: CellObject[] = [
    {
        t: 's',
        v: 'NOMBRE - RAZON SOCIAL',
        s: titleStyle,
    },
    {
        t: 's',
        v: 'TELEFONO',
        s: titleStyle,
    },
];

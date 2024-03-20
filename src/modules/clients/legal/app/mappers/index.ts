import {
    LegalClientAPI,
    type TLegalClientAPI,
    type TLegalClientStatusAPI,
} from '@clients_legal/domain/dto';
import {
    LegalClientDOM,
    type TLegalClientDOM,
    type TLegalClientStatusDOM,
} from '@clients_legal/domain/entities';
import type { TMappers } from '@common/mappers_wrappers/mappers';

export class LegalClientMappers implements TMappers<TLegalClientDOM, TLegalClientAPI> {
    apiToDom = (item: TLegalClientAPI): TLegalClientDOM => {
        let status: TLegalClientStatusDOM | undefined;

        if (item.status) {
            status = {
                id: item.status._id,
                name: item.status.name,
            };
        }

        return new LegalClientDOM({
            id: item._id,
            numberMovil: item.number_movil,
            address: item.address,
            nit: item.nit,
            businessName: item.business_name,
            natural: item.natural,
            status,
        });
    };

    domToApi = (item: TLegalClientDOM): TLegalClientAPI => {
        let status: TLegalClientStatusAPI | undefined;

        if (item.status) {
            status = {
                _id: item.status.id,
                name: item.status.name,
            };
        }

        return new LegalClientAPI({
            _id: item.id,
            number_movil: item.numberMovil,
            address: item.address,
            nit: item.nit,
            business_name: item.businessName,
            natural: item.natural,
            status,
        });
    };
}

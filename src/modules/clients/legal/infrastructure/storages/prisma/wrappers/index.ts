import { LegalClientDOM, type TLegalClientDOM } from '@clients_legal/domain/entities';
import type { TWrappers } from '@common/mappers_wrappers/wrappers';
import { LegalClientDAL, type TLegalClientDAL } from '../models';

export class LegalClientWrappers implements TWrappers<TLegalClientDOM, TLegalClientDAL> {
    dalToDom = (item: TLegalClientDAL): TLegalClientDOM => {
        return new LegalClientDOM({
            id: item.id,
            numberMovil: item.number_movil,
            address: item.address,
            nit: item.nit,
            businessName: item.business_name,
            natural: item.natural,
            status: item.status,
        });
    };

    domToDal = (item: TLegalClientDOM): TLegalClientDAL => {
        return new LegalClientDAL({
            id: item.id,
            number_movil: item.numberMovil,
            address: item.address,
            nit: item.nit,
            business_name: item.businessName,
            status_id: item.status?.id || '',
            natural: item.natural,
        });
    };
}

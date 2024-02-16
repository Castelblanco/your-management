import {
    NaturalClientDOM,
    type TNaturalClientDOM,
} from '@clients_natural/domain/entities';
import { type TWrappers } from '@common/mappers_wrappers/wrappers';
import { NaturalClientDAL, type TNaturalClientDAL } from '../models';

export class NaturalClientWrappers
    implements TWrappers<TNaturalClientDOM, TNaturalClientDAL>
{
    dalToDom = (item: TNaturalClientDAL): TNaturalClientDOM => {
        return new NaturalClientDOM({
            id: item.id,
            numberMovil: item.number_movil,
            address: item.address,
            documentId: item.document_id,
            firstName: item.first_name,
            lastName: item.last_name,
            type: item.type,
            status: item.status,
        });
    };

    domToDal = (item: TNaturalClientDOM): TNaturalClientDAL => {
        return new NaturalClientDAL({
            id: item.id,
            number_movil: item.numberMovil,
            address: item.address,
            document_id: item.documentId,
            first_name: item.firstName,
            last_name: item.lastName,
            type: item.type,
            status_id: item.status?.id || '',
            type_id: item.type.id,
        });
    };
}

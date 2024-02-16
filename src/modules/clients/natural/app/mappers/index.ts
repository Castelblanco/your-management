import {
    NaturalClientAPI,
    type TNaturalClientTypeAPI,
    type TNaturalClientAPI,
    type TNaturalClientStatusAPI,
} from '@clients_natural/domain/dto';
import {
    NaturalClientDOM,
    type TNaturalClientTypeDOM,
    type TNaturalClientDOM,
    type TNaturalClientStatusDOM,
} from '@clients_natural/domain/entities';
import { type TMappers } from '@common/mappers_wrappers/mappers';

export class NaturalClientMappers
    implements TMappers<TNaturalClientDOM, TNaturalClientAPI>
{
    apiToDom = (item: TNaturalClientAPI): TNaturalClientDOM => {
        const type: TNaturalClientTypeDOM = {
            id: item.type._id,
            name: item.type.name,
        };

        let status: TNaturalClientStatusDOM | undefined;

        if (item.status) {
            status = {
                id: item.status._id,
                name: item.status.name,
            };
        }

        return new NaturalClientDOM({
            id: item._id,
            numberMovil: item.number_movil,
            address: item.address,
            documentId: item.document_id,
            firstName: item.first_name,
            lastName: item.last_name,
            type,
            status,
        });
    };

    domToApi = (item: TNaturalClientDOM): TNaturalClientAPI => {
        const type: TNaturalClientTypeAPI = {
            _id: item.type.id,
            name: item.type.name,
        };

        let status: TNaturalClientStatusAPI | undefined;

        if (item.status) {
            status = {
                _id: item.status.id,
                name: item.status.name,
            };
        }

        return new NaturalClientAPI({
            _id: item.id,
            number_movil: item.numberMovil,
            address: item.address,
            document_id: item.documentId,
            first_name: item.firstName,
            last_name: item.lastName,
            type,
            status,
        });
    };
}

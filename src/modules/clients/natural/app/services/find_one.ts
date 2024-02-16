import { type TNaturalClientDOM } from '@clients_natural/domain/entities';
import { type Dependencies } from '.';

export const buildFindOne = ({ repository }: Dependencies) => {
    const service = async (id: string, status?: boolean): Promise<TNaturalClientDOM> => {
        return await repository.findOne(id, status);
    };

    return service;
};

import { type TDependencies } from '.';

export const buildDeleteOne = ({ repository }: TDependencies) => {
    const service = async (id: string): Promise<void> => {
        await repository.deleteOne(id);
    };

    return service;
};

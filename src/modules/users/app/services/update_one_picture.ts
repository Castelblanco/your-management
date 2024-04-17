import type { TUserPictureDOM } from '@users/domain/entities';
import { type Dependencies } from '.';

export const buildUpdateOnePicture = ({
    repository,
    updateStorageImage,
}: Dependencies) => {
    const service = async (
        id: string,
        picture: TUserPictureDOM,
    ): Promise<TUserPictureDOM> => {
        const user = await repository.findById(id, true, true, true);

        const updatePicture = await updateStorageImage(picture);
        user.picture = updatePicture;

        await repository.updateOne(user);
        return updatePicture;
    };

    return service;
};

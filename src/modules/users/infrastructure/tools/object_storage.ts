import { StorageError } from '@common/response/errors/storage_error';
import { type TUserPictureDOM } from '@users/domain/entities';
import { v2 as cloudinary } from 'cloudinary';
import { unlink } from 'fs/promises';

cloudinary.config({
    cloud_name: Bun.env.DINARY_CLOUD_NAME,
    api_key: Bun.env.DINARY_API_KEY,
    api_secret: Bun.env.DINARY_API_SECRET,
    secure: true,
});

export const saveStorageImage = async (path: string): Promise<TUserPictureDOM> => {
    try {
        const { public_id: id, url } = await cloudinary.uploader.upload(path, {
            folder: 'your-management',
            format: 'png',
        });

        await unlink(path);

        return {
            id,
            url,
        };
    } catch (e) {
        throw new StorageError(e);
    }
};

export const updateStorageImage = async ({
    id,
    url: path,
}: TUserPictureDOM): Promise<TUserPictureDOM> => {
    try {
        if (id !== '') await cloudinary.uploader.destroy(id);

        const { public_id: publicId, url } = await cloudinary.uploader.upload(path, {
            folder: 'your-management',
            format: 'png',
        });

        await unlink(path);

        return {
            id: publicId,
            url,
        };
    } catch (e) {
        throw new StorageError(e);
    }
};

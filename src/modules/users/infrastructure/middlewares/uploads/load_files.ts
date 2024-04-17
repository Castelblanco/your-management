import { type TUserPictureAPI } from '@users/domain/dto';
import { type Context } from 'elysia';

type TContext = Context<{
    params: Record<string, string>;
    body: TUserPictureAPI & {
        file: Blob | Blob[];
    };
}>;

export const loadFiles = async ({ body }: TContext) => {
    if (!body.file) return;

    const path = `public/${Date.now()}.png`;
    if ('map' in body.file) {
        await Bun.write(path, body.file[0], {
            createPath: true,
        });
    } else {
        await Bun.write(path, body.file, {
            createPath: true,
        });
    }

    body.url = path;
};

import type {
    TUserDOM,
    TUserFilterDOM,
    TUserLoginDOM,
    TUserPictureDOM,
} from '@users/domain/entities';
import { buildFindAll } from './find_all';
import type { TUsersRepository } from '@users/domain/repository';
import { buildFindOne } from './find_one';
import { buildCreateOne } from './create_one';
import { buildUpdateOne } from './update_one';
import { buildDeleteOne } from './delete_one';
import { buildCreateMany } from './create_many';
import { buildLogin } from './login';
import { buildUpdateOnePicture } from './update_one_picture';
import { buildCount } from './count';

type TDateFormatDay = 'dd/mm/yy' | 'dd/yy/mm';
type TDateFormatMonth = 'mm/dd/yy' | 'mm/yy/dd';
type TDateFormatYear = 'yy/mm/dd' | 'yy/dd/mm';
type TDateFormat = TDateFormatDay | TDateFormatMonth | TDateFormatYear | 'iso';

type TGetDateFormat = (date: string | number, format?: TDateFormat) => string;
type TSingToken = (payload: string | object | Buffer, expiresIn: string) => string;
type TEncryptPassword = {
    encrypt: (password: string) => string;
    verify: (password: string, savePassword: string) => boolean;
};

export type Dependencies = {
    repository: TUsersRepository;
    createId: () => string;
    encryptPassword: TEncryptPassword;
    singToken: TSingToken;
    getDateFormat: TGetDateFormat;
    saveStorageImage: (imagePath: string) => Promise<TUserPictureDOM>;
    updateStorageImage: (picture: TUserPictureDOM) => Promise<TUserPictureDOM>;
};

export class UsersServices {
    findAll: (filter: TUserFilterDOM) => Promise<TUserDOM[]>;
    findOne: (
        id: string,
        pointSale?: boolean,
        role?: boolean,
        status?: boolean,
    ) => Promise<TUserDOM>;
    count: (filter: TUserFilterDOM) => Promise<number>;

    login: (user: TUserDOM) => Promise<TUserLoginDOM>;
    createOne: (user: TUserDOM) => Promise<TUserDOM>;
    updateOne: (user: TUserDOM) => Promise<TUserDOM>;
    updateOnePicture: (id: string, picture: TUserPictureDOM) => Promise<TUserPictureDOM>;
    deleteOne: (id: string) => Promise<void>;
    createMany: (users: TUserDOM[]) => Promise<number>;

    constructor(dependencies: Dependencies) {
        this.login = buildLogin(dependencies);
        this.findAll = buildFindAll(dependencies);
        this.findOne = buildFindOne(dependencies);
        this.count = buildCount(dependencies);
        this.createOne = buildCreateOne(dependencies);
        this.updateOne = buildUpdateOne(dependencies);
        this.updateOnePicture = buildUpdateOnePicture(dependencies);
        this.deleteOne = buildDeleteOne(dependencies);
        this.createMany = buildCreateMany(dependencies);
    }
}

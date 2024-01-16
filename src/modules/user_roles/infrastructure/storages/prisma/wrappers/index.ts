import type { TWrappers } from '@common/mappers_wrappers/wrappers';
import { type TUserRoleDOM, UserRoleDOM } from '@user_roles/domain/entities';
import { type TUserRoleDAL, UserRoleDAL } from '../models';

export class UserRolesWrappers implements TWrappers<TUserRoleDOM, TUserRoleDAL> {
    dalToDom = (item: TUserRoleDAL): TUserRoleDOM => {
        return new UserRoleDOM({
            id: item.id,
            name: item.name,
        });
    };

    domToDal = (item: TUserRoleDOM): TUserRoleDAL => {
        return new UserRoleDAL({
            id: item.id,
            name: item.name,
        });
    };
}

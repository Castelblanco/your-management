import type { TMappers } from '@common/mappers_wrappers/mappers';
import { type TUserRoleAPI, UserRoleApi } from '@user_roles/domain/dto';
import { type TUserRoleDOM, UserRoleDOM } from '@user_roles/domain/entities';

export class UserRolesMappers implements TMappers<TUserRoleDOM, TUserRoleAPI> {
    apiToDom = (item: TUserRoleAPI): TUserRoleDOM => {
        return new UserRoleDOM({
            id: item._id,
            name: item.name,
        });
    };

    domToApi = (item: TUserRoleDOM): TUserRoleAPI => {
        return new UserRoleApi({
            _id: item.id,
            name: item.name,
        });
    };
}

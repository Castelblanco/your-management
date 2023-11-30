import { TMappers } from '@common/mappers_wrappers/mappers';
import { TUserRoleAPI, UserRoleApi } from '@user_roles/domain/dto';
import { TUserRoleDOM, UserRoleDOM } from '@user_roles/domain/entities';

export class UserRolesMappers implements TMappers<TUserRoleDOM, TUserRoleAPI> {
    apiToDom = (item: TUserRoleAPI): TUserRoleDOM => {
        return new UserRoleDOM({
            id: item.id,
            name: item.name,
        });
    };

    domToApi = (item: TUserRoleDOM): TUserRoleAPI => {
        return new UserRoleApi({
            id: item.id,
            name: item.name,
        });
    };
}

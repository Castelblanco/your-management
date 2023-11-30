export type TUserRoleAPI = {
    id: string;
    name: string;
};

export class UserRoleApi implements TUserRoleAPI {
    id: string;
    name: string;

    constructor(role: TUserRoleAPI) {
        this.id = role.id;
        this.name = role.name;
    }
}

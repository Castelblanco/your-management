export type TUserRoleAPI = {
    _id: string;
    name: string;
};

export class UserRoleApi implements TUserRoleAPI {
    _id: string;
    name: string;

    constructor(role: TUserRoleAPI) {
        this._id = role._id;
        this.name = role.name;
    }
}

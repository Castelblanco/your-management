export type TUserRoleDAL = {
    id: string;
    name: string;
};

export class UserRoleDAL implements TUserRoleDAL {
    id: string;
    name: string;

    constructor(role: UserRoleDAL) {
        this.id = role.id;
        this.name = role.name;
    }
}

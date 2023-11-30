export type TUserRoleDOM = {
    id: string;
    name: string;
};

export class UserRoleDOM implements TUserRoleDOM {
    id: string;
    name: string;

    constructor(role: TUserRoleDOM) {
        this.id = role.id;
        this.name = role.name;
    }
}

import type { Department, Department_Status } from '@prisma/client';

export type TDepartamentDAL = Department & {
    status?: TDepartamentStatusDAL;
};

export type TDepartamentStatusDAL = Department_Status;

export class DepartamentDAL implements TDepartamentDAL {
    id: string;
    name: string;
    status_id: string;
    status?: TDepartamentStatusDAL;

    constructor(departament: TDepartamentDAL) {
        this.id = departament.id;
        this.name = departament.name;
        this.status_id = departament.status_id;
        this.status = departament.status;
    }
}

import type { Cities, Cities_Status } from '@prisma/client';

export type TCityDAL = Cities & {
    status?: TCityStatusDAL;
    department?: TCityDepartamentDAL;
    point_sales?: TCityPointSaleDAL[];
};

export type TCityStatusDAL = Cities_Status;

export type TCityDepartamentDAL = {
    id: string;
    name: string;
    status_id: string;
};

export type TCityStatusDal = {
    id: string;
    name: string;
};

export type TCityPointSaleDAL = {
    id: string;
    name: string;
    address: string;
    budget: number;
    status?: TCityPointSaleStatusDAL;
};

export type TCityPointSaleStatusDAL = {
    id: string;
    name: string;
};

export class CityDAL implements TCityDAL {
    id: string;
    name: string;
    status?: TCityStatusDal;
    status_id: string;
    department_id: string;
    department?: TCityDepartamentDAL;
    point_sales?: TCityPointSaleDAL[];

    constructor(city: TCityDAL) {
        this.id = city.id;
        this.name = city.name;
        this.status = city.status;
        this.department_id = city.department_id;
        this.department = city.department;
        this.point_sales = city.point_sales;
        this.status_id = city.status_id;
    }
}

export class CityPointSaleDAL implements TCityPointSaleDAL {
    id: string;
    name: string;
    address: string;
    budget: number;
    status?: TCityPointSaleStatusDAL;

    constructor(pointSale: TCityPointSaleDAL) {
        this.id = pointSale.id;
        this.name = pointSale.name;
        this.address = pointSale.address;
        this.budget = pointSale.budget;
        this.status = pointSale.status;
    }
}

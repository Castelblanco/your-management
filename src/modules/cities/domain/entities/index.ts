export type TCityDOM = {
    id: string;
    name: string;
    status?: TCityStatusDOM;
    department?: TCityDepartmentDOM;
    pointSales?: TCityPointSaleDOM[];
};

export type TCityDepartmentDOM = {
    id: string;
    name: string;
};

export type TCityStatusDOM = {
    id: string;
    name: string;
};

export type TCityPointSaleDOM = {
    id: string;
    name: string;
    address: string;
    budget: number;
    status: string;
};

export type TCityFilterDOM = {
    name?: string;
    statusId?: string;
    departmentId?: string;
};

export type TCityOPT = {
    limit: number;
    offset: number;
    pointSales: boolean;
    users: boolean;
};

export class CityDOM implements TCityDOM {
    id: string;
    name: string;
    status?: TCityStatusDOM;
    department?: TCityDepartmentDOM;
    pointSales?: TCityPointSaleDOM[];

    constructor(city: TCityDOM) {
        this.id = city.id;
        this.name = city.name;
        this.status = city.status;
        this.department = city.department;
        this.pointSales = city.pointSales;
    }
}

export class CityPointSaleDOM implements TCityPointSaleDOM {
    id: string;
    name: string;
    address: string;
    budget: number;
    status: string;

    constructor(pointSale: TCityPointSaleDOM) {
        this.id = pointSale.id;
        this.name = pointSale.name;
        this.address = pointSale.address;
        this.budget = pointSale.budget;
        this.status = pointSale.status;
    }
}

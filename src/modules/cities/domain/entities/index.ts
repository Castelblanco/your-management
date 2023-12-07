export type TCityDOM = {
    id: string;
    name: string;
    status: string;
    statusId: string;
    departmentId: string;
    department: string;
    pointSales?: TCityPointSaleDOM[];
};

export type TCityPointSaleDOM = {
    id: string;
    name: string;
    address: string;
    budget: string;
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
    status: string;
    statusId: string;
    departmentId: string;
    department: string;
    pointSales?: TCityPointSaleDOM[];

    constructor(city: TCityDOM) {
        this.id = city.id;
        this.name = city.name;
        this.status = city.status;
        this.departmentId = city.departmentId;
        this.department = city.department;
        this.pointSales = city.pointSales;
        this.statusId = city.statusId;
    }
}

export class CityPointSaleDOM implements TCityPointSaleDOM {
    id: string;
    name: string;
    address: string;
    budget: string;
    status: string;

    constructor(pointSale: TCityPointSaleDOM) {
        this.id = pointSale.id;
        this.name = pointSale.name;
        this.address = pointSale.address;
        this.budget = pointSale.budget;
        this.status = pointSale.status;
    }
}

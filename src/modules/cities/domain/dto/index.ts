export type TCityAPI = {
    _id: string;
    name: string;
    status?: TCityStatusAPI;
    department?: TCityDepartamentAPI;
    point_sales?: TCityPointSaleAPI[];
};

export type TCityDepartamentAPI = {
    _id: string;
    name: string;
};

export type TCityStatusAPI = {
    _id: string;
    name: string;
};

export type TCityPointSaleAPI = {
    _id: string;
    name: string;
    address: string;
    budget: number;
    status: string;
};

export class CityAPI implements TCityAPI {
    _id: string;
    name: string;
    status?: TCityStatusAPI;
    department?: TCityDepartamentAPI;
    point_sales?: TCityPointSaleAPI[];

    constructor(city: TCityAPI) {
        this._id = city._id;
        this.name = city.name;
        this.status = city.status;
        this.department = city.department;
        this.point_sales = city.point_sales;
    }
}

export class CityPointSaleAPI implements TCityPointSaleAPI {
    _id: string;
    name: string;
    address: string;
    budget: number;
    status: string;

    constructor(pointSale: TCityPointSaleAPI) {
        this._id = pointSale._id;
        this.name = pointSale.name;
        this.address = pointSale.address;
        this.budget = pointSale.budget;
        this.status = pointSale.status;
    }
}

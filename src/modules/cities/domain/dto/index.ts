export type TCityAPI = {
    _id: string;
    name: string;
    status: string;
    status_id: string;
    department_id: string;
    department: string;
    point_sales?: TCityPointSaleAPI[];
};

export type TCityPointSaleAPI = {
    _id: string;
    name: string;
    address: string;
    budget: string;
    status: string;
};

export class CityAPI implements TCityAPI {
    _id: string;
    name: string;
    status: string;
    status_id: string;
    department_id: string;
    department: string;
    point_sales?: TCityPointSaleAPI[];

    constructor(city: TCityAPI) {
        this._id = city._id;
        this.name = city.name;
        this.status = city.status;
        this.department_id = city.department_id;
        this.department = city.department;
        this.point_sales = city.point_sales;
        this.status_id = city.status_id;
    }
}

export class CityPointSaleAPI implements TCityPointSaleAPI {
    _id: string;
    name: string;
    address: string;
    budget: string;
    status: string;

    constructor(pointSale: TCityPointSaleAPI) {
        this._id = pointSale._id;
        this.name = pointSale.name;
        this.address = pointSale.address;
        this.budget = pointSale.budget;
        this.status = pointSale.status;
    }
}

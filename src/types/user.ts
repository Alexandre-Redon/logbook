import { Order } from "./order";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    companyName?: string;
    country: string;
    streetAdress: string;
    town: string;
    zipCode: string;
    phone: string;
    email: string;
    order: Order[];
}
import { KDVRateType } from "./product.model";

export class OrderModel{
    id:string = "";
    orderNumber: string = "";
    orderNumberPrefix: string = "";
    orderNumberSuffix: number = 0;
    productImageUrl: string = "";
    productName:string = "";
    productDescription: string = "";
    price: number = 0;
    quantity: number = 0;
    kdvRate: KDVRateType = 0;
    totalAmount: number = 0;
    totalKDV: number = 0;
    total: number = 0;
    date: string = "";
}
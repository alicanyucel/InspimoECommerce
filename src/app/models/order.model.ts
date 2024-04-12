import { KDVRateType } from "./product.model";

export class OrderModel{
id:string="";
orderNumber:string="";
productName:string="";
productDescription:string="";
quantity:number=0;
date:string=""
price:number=0;
kdvRate:KDVRateType=0;
}
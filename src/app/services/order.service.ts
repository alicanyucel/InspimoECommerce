import { Injectable } from '@angular/core';
import { OrderModel } from '../models/order.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: OrderModel[] = [];

  constructor(private _http:HttpClient) {
    this.getAll()
   }
  getAll(callback?:()=>void){
    this._http.get<OrderModel[]>("http://localhost:3000/orders").subscribe({
      next:(res)=>{
        this.orders=res;
        if(callback!=undefined)
          {
            callback()
          }
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    })
  }
}

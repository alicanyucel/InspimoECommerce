import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { CategoryModel } from '../models/category.model';

@Pipe({
  name: 'product',
  standalone: true
})
export class ProductPipe implements PipeTransform {

  transform(value: ProductModel[], categoryId: string, search: string): ProductModel[] {
    if(search === "" && categoryId === ""){
      return value;
    }

    if(categoryId !== ""){
      value = value.filter(p=> p.categoryId === categoryId);     
    } 

    if(search !== ""){
      value = value.filter(p=> 
        p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || 
        p.description.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || 
        p.price.toString().includes(search) || 
        p.discountedPrice.toString().includes(search) || 
        p.stock.toString().includes(search))
    }

    return value;
  }

}

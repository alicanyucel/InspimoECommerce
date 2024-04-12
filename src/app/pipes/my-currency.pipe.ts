import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCurrency',
  standalone: true
})
export class MyCurrencyPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return "₺" + value;
  }

}

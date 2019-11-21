import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'russianCurrency',
})
export class RussianCurrencyPipe implements PipeTransform {
  transform(value: number, ...args: any[]): string {
    return Number(value).toLocaleString('ru') + ' ₽';
  }
}

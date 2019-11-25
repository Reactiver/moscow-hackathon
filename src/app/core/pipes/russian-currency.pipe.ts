import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'russianCurrency',
})
export class RussianCurrencyPipe implements PipeTransform {
  transform(value: number, ...args: any[]): string {
    const penny = 100;
    return Number(value / penny).toLocaleString('ru') + ' ₽';
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comments',
})
export class CommentsPipe implements PipeTransform {
  transform(value: number, ...args: any[]): any {
    if (value % 10 === 1 && value % 100 !== 11) {
      return value + ' отзыв';
    }
    if (value % 10 >= 2 && value % 10 <= 4 && (value % 100 < 12 || value % 100 > 14)) {
      return value + ' отзыва';
    }
    return value + ' отзывов';
  }
}

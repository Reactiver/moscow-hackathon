import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUp',
})
export class FirstUpPipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    return value && value.toLowerCase().replace(/^./, value[0].toUpperCase());
  }
}

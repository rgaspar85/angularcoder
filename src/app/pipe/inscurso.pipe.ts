import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inscurso'
})
export class InscursoPipe implements PipeTransform {

  transform(value: boolean, ...args: string[]): string {
    return value ? args [0] : args [1]
    
  }

}

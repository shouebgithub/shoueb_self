import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversepipe'
})
export class ReversepipePipe implements PipeTransform {

  transform(value:string): string {
    let reverse = ''
    for (let i = value.length-1;i>=0;i--){
      reverse +=value[i];
    }
    return reverse;
  }

}

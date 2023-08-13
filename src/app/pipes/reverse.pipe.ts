import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(ch:string) {
   let  chReverse="";
   for (let i = 0; i < ch.length; i++) {
    chReverse=ch[i]+chReverse;
    
   }
    return chReverse;
  }

}

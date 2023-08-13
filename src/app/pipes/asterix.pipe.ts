import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch:string): any {
    let result = "";
    let v =['a','e','i','o','u','y'];
    for (let i = 0; i < ch.length; i++) {
      let inter= ch[i];
      for (let j = 0; j < v.length; j++) {
        if (ch[i].toLowerCase()==v[j]){
          inter="*";
          break;
        }
        
      }
      result=result+inter;
    }
    return result;
  }

}

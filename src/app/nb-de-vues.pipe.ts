import { Pipe, PipeTransform } from '@angular/core';
import { Video } from './video';

@Pipe({
  name: 'nbDeVues'
})
export class NbDeVuesPipe implements PipeTransform {
  

  transform(nbDeVues: Video["nombreVues"]): number | string{
    
  
    if (nbDeVues < 1000) {
      return nbDeVues;
    } else if (nbDeVues < 1000000) {
      return parseFloat((nbDeVues / 1000).toFixed(0)) + 'k';
    } else {
      return parseFloat((nbDeVues / 1000000).toFixed(0)) + 'M';
    }
  }

  
}

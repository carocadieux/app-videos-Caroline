import { Pipe, PipeTransform } from '@angular/core';
import { Video } from './video';

@Pipe({
  name: 'nbDeVues'
})
export class NbDeVuesPipe implements PipeTransform {
  

  transform(nbDeVues: Video["nombreVues"]): string {
    
  
    if (nbDeVues < 1000) {
      return nbDeVues.toString();
    } else if (nbDeVues < 1000000) {
      return (nbDeVues / 1000).toFixed(0) + 'k';
    } else {
      return (nbDeVues / 1000000).toFixed(0) + 'M';
    }
  }

  
}

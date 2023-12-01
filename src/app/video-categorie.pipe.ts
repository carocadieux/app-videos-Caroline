import { Pipe, PipeTransform } from '@angular/core';
import { Video } from './video';
import { Categories } from './categories';

@Pipe({
  name: 'videoCategorie'
})
export class VideoCategoriePipe implements PipeTransform {

  transform(videos: Video[], categorie: string): Video[] {
    if (!videos || !categorie) {
      return videos;  
    }

    return videos.filter(video => video.nomCategorie.includes(categorie));
  }

}

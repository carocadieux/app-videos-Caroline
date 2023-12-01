import { Pipe, PipeTransform } from '@angular/core';
import { Video } from './video';

@Pipe({
  name: 'popularScoreVideos'
})
export class PopularScoreVideosPipe implements PipeTransform {

  transform(videoScore: Video[]): Video[] {
    return videoScore.filter(video => video.score_video > 1000);
  }

}

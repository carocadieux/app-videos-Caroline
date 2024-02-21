import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationFormat'
})
export class DurationFormatPipe implements PipeTransform {

  transform(duration: number): string {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor(duration % 60);

    if (hours > 0) {
      return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
    } else if (minutes > 0) {
      return `${minutes}:${this.pad(seconds)}`;
    } else {
      return `0:${this.pad(seconds)}`;
    }
  }

  private pad(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

}

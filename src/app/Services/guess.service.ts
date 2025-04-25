import { Injectable } from '@angular/core';
import { Frame, framesService } from '../Models/frame.model';

@Injectable({
  providedIn: 'root',
})
export class GuessService {
  frames = framesService;

  randomImageArr(): Frame[] {
    let frameArr: Frame[] = [];

    while (frameArr.length < 10) {
      let newFrame =
        this.frames[Math.floor(Math.random() * this.frames.length)];

      if (!frameArr.includes(newFrame)) {
        frameArr.push(newFrame);
      }
    }

    console.log(frameArr);
    return frameArr;
  }

  isCorrect(season: number, episode: number, imageSrc: string): boolean {
    let frame = this.findFrame(imageSrc);

    return frame?.season === season && frame.episode === episode;
  }

  private findFrame(imageSrc: string): Frame | undefined {
    return this.frames.find((frame) => frame.imageSrc === imageSrc);
  }
}

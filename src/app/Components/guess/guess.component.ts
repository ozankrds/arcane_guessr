import { Component, OnInit } from '@angular/core';
import { GuessService } from '../../Services/guess.service';
import { Frame } from '../../Models/frame.model';

@Component({
  selector: 'app-guess',
  standalone: false,
  templateUrl: './guess.component.html',
  styleUrl: './guess.component.css',
})
export class GuessComponent implements OnInit {
  // Frames
  frames!: Frame[];
  currentFrame!: Frame;
  currentFrameIndex = 0;

  // Guessing
  season = 1;
  episode = 1;
  numOfTrue = 0;

  // Finality
  isOver = false;
  mainMenu = false;

  // Timer
  timeoutId: any;
  intervalId: any;
  countdown = 10; // seconds remaining

  // Frames that the user got correct and didn't
  isCorrectFrame: boolean[] = [];

  constructor(private guessService: GuessService) {}

  ngOnInit() {
    this.frames = this.guessService.randomImageArr();
    this.currentFrameIndex = 0;
    this.currentFrame = this.frames[this.currentFrameIndex];
    this.season = 1;
    this.episode = 1;
    this.numOfTrue = 0;
    this.isOver = false;
    this.startTimer();
  }

  onSubmit(): void {
    clearTimeout(this.timeoutId);
    clearInterval(this.intervalId);

    if (this.guessService.isCorrect(this.season, this.episode, this.imageSrc)) {
      this.isCorrectFrame.push(true);
      this.numOfTrue++;
    } else {
      this.isCorrectFrame.push(false);
    }
    this.nextFrame();
  }

  get imageSrc() {
    return this.currentFrame.imageSrc;
  }

  private startTimer() {
    // Reset countdown
    this.countdown = 10;

    // Clear any existing intervals or timeouts
    clearTimeout(this.timeoutId);
    clearInterval(this.intervalId);

    // Start countdown updater
    this.intervalId = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(this.intervalId);
      }
    }, 1000);

    // Schedule timeout for skipping frame
    this.timeoutId = setTimeout(() => {
      this.onTimeout();
    }, 10000);
  }

  private onTimeout(): void {
    clearInterval(this.intervalId);
    this.isCorrectFrame.push(false);

    this.nextFrame();
  }

  private nextFrame() {
    this.currentFrameIndex++;
    if (this.currentFrameIndex === this.frames.length) {
      this.isOver = true;
      return;
    }
    this.currentFrame = this.frames[this.currentFrameIndex];
    this.startTimer();
  }

  restart() {
    clearTimeout(this.timeoutId);
    clearInterval(this.intervalId);
    this.ngOnInit();
  }

  returnToMainMenu() {
    this.mainMenu = true;
  }
}

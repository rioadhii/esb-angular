import { Component, OnInit } from '@angular/core';
import { interval, of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})

export class LearnComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    // this.observableCounter();
  }

  operatorOf(): void {
    const nums = of(1, 2, 3);

    const squareValues = map((val: number) => val * val);
    const squaredNums = squareValues(nums);

    squaredNums.subscribe(x => console.log(x));
  }

  operatorFilter(): void {
    const nums = of(1, 2, 3, 4, 5);

    // Create a function that accepts an criteria.
    const customSquare = pipe(
      filter((n: number) => n > 4), //criteria
      map(n => n * n)
    );

    const squaredNums = customSquare(nums);

    squaredNums.subscribe(x => console.log(x));
  }

  operatorPipe(): void { //shorted hands
    const pipedFunction = of(1, 2, 3, 4, 5).pipe(
      filter((n: number) => n % 2 !== 0), //criteria
      map(n => n * n)
    );

    pipedFunction.subscribe(x => console.log(x));
  }

  observableCounter(): void {
    // Create an Observable that will publish a value on an interval
    const secondsCounter = interval(1000);
    // Subscribe to begin publishing values
    const subscription = secondsCounter.subscribe(n =>
    console.log(`It's been ${n + 1} seconds since subscribing!`));
  }

}

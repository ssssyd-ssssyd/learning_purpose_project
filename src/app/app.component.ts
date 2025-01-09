import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CounterStore } from './store/counter.store';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CartComponent, ReactiveFormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [CounterStore]
})
export class AppComponent implements OnInit {
  num = signal(0);
  constructor() {}
  ngOnInit(): void {}

  calculate(el: any) {
    this.num.set(el.value);
    console.log(this.num);
  }
}

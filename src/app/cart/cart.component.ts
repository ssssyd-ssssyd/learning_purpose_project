import { Component, Input, OnInit, computed, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { filter } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'app-cart',
    imports: [ReactiveFormsModule],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  @Input() inputNum = signal(0);

  result = computed(() => {
    return this.inputNum() * this.inputNum();
  });

  form: FormGroup;

  touchedLog: string[] = [];
  constructor(public cartService: CartService, private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.form.events
      .pipe(
        filter((event: any) => event && event.name === 'touched') // Ensure the event matches touched behavior
      )
      .subscribe((event: any) => {
        // Log the touched event
        const control = event.source;
        if (control) {
          this.touchedLog.push(`Control: ${control}, Touched: true`);
        }
      });
  }

  markNameTouched() {
    this.form.get('name')?.markAsTouched();
  }
}

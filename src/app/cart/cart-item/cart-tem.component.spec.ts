import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTemComponent } from './cart-item.component';

describe('CartTemComponent', () => {
  let component: CartTemComponent;
  let fixture: ComponentFixture<CartTemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartTemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartTemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

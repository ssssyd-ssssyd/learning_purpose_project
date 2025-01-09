import { Component, ElementRef, Input, viewChild } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  searchField = viewChild.required<ElementRef<HTMLInputElement>>('searchField');
}
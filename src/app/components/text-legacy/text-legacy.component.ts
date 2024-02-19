import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-text-legacy',
  standalone: true,
  imports: [NgFor],
  templateUrl: './text-legacy.component.html',
  styleUrl: './text-legacy.component.css'
})
export class TextLegacyComponent {
  legacyItems = [
    'Item 1',
    'Item 2',
    'Item 3'
  ];
}
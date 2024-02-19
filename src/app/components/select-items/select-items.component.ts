import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LegalComponent } from '../../pages/legal/legal.component';

@Component({
  selector: 'app-select-item',
  standalone: true,
  imports : [RouterLink, LegalComponent],
  templateUrl: './select-items.component.html',
  styleUrls: ['./select-items.component.css']
})
export class SelectItemComponent {
  @Input() options: string[] = [];
  @Output() selectedValue = new EventEmitter<string>();

  onSelectionChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    if (selectElement && selectElement.value) {
      this.selectedValue.emit(selectElement.value);
    }
  }
};

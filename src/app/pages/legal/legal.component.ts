import { Component } from '@angular/core';
import { TextLegacyComponent } from "../../components/text-legacy/text-legacy.component";

@Component({
    selector: 'app-legal',
    standalone: true,
    templateUrl: './legal.component.html',
    styleUrl: './legal.component.css',
    imports: [TextLegacyComponent]
})
export class LegalComponent {

}

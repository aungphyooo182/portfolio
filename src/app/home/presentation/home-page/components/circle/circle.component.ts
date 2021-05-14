import {Component, Input} from '@angular/core';
import {CircleStore} from './circle.store'

@Component({
    selector: 'app-circle',
    templateUrl: './circle.component.html',
    styleUrls: ['./circle.component.css']
})
export class CircleComponent {
    constructor(private store: CircleStore) {}

    @Input() class = "";
}

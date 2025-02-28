import { Component, Pipe } from '@angular/core';
import { StarPipe } from '../star.pipe';

@Component({
  selector: 'app-demostuff',
  imports: [StarPipe],
  templateUrl: './demostuff.component.html',
  styleUrl: './demostuff.component.scss'
})
export class DemostuffComponent {
samplestring = 'Angular is a Great Framework'
}

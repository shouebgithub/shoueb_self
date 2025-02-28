import { Component } from '@angular/core';
import { UpperCasePipe, CurrencyPipe, DatePipe } from '@angular/common';
import { ReversepipePipe } from '../reversepipe.pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [UpperCasePipe, CurrencyPipe, DatePipe, ReversepipePipe],
  templateUrl: './pipes-demo.component.html',
  styleUrl: './pipes-demo.component.scss'
})
export class PipesDemoComponent {
loadmessage = "I think this tutorial proceeding good";
ourcurrency = 344;
mydate = "2024-12-17";
isAdmin = ''
sampleword = "You are a champion";
}

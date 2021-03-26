import { Quote } from '@angular/compiler';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {

  @Input() quote!: Quote;

  constructor() { }

  ngOnInit(): void {
  }

}

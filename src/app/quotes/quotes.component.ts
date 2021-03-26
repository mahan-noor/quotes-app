import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[] =[
    new Quotes{1, John:'Live for your dreams','Too many of us are not living our dreams because we are living our fears.',new Date(1991,6,4)),
    new Quotes{2, Amina:'Success will take time','If you really look closely, most overnight successes took a long time.',new Date(2012,5,24)),
    new Quotes{3, Ilhan:'Future is bright','The future belongs to those who believe in the beauty of their dreams.',new Date(2016,7,22)),
    new Quotes{4, Cynthia:'Hard work pays','Things work out best for those who make the best of how things work out.',new Date(2009,3,1)),
    new Quotes{5, Savannah:'Try not to become a man of success. Rather become a man of value',new Date(2020,3,14)),
    new Quotes{6, Mariam:'Dont be afraid to give up the good to go for the great.',new Date(2020,3,14)),
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

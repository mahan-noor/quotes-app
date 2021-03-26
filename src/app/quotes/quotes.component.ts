import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[] =[
    {id:1,John:'Watch finding Nemo'},
    {id:2,Amina:'If you really look closely, most overnight successes took a long time.'},
    {id:3,Ilhan:'The future belongs to those who believe in the beauty of their dreams.'},
    {id:4,Cynthia:'Things work out best for those who make the best of how things work out.'},
    {id:5,Savannah:'Try not to become a man of success. Rather become a man of value'},
    {id:6,Mariam:'Dont be afraid to give up the good to go for the great.'},
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

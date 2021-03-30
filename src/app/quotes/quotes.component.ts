import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  i: any
  quotes:Quotes[] =[ 
    
   new Quotes(1, 'Mahan','Too many of us are not living our dreams because we are living our fears.','Robert Quinn',new Date(2020, 11, 19),0,0),
   new Quotes(2, 'Susan','If you really look closely, most overnight successes took a long time.','Mark Zuckerberg',new Date(1994, 1, 1),0,0), 
   new Quotes(3, 'Farry','The future belongs to those who believe in the beauty of their dreams.','Martin Luther',new Date(2002, 12 ,30),0,0),
   new Quotes(4, 'Amina','Things work out best for those who make the best of how things work out.','Tom Bilyeu',new Date(1997, 1, 22 ),0,0),
   new Quotes(5, 'Henry', 'Try not to become a man of success. Rather become a man of value','Elon Mask',new Date(2005, 6, 10),0,0),
   new Quotes(6, 'Mary','Dont be afraid to give up the good to go for the great.','Steve Job',new Date(2011, 4,12),0,0),
 ];


  addNewQuotes(quote:any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  // toggleDetails(index: number){
  //   this.quotes[index].showInfomation =!this.quotes[index].showInfomation;
  // }

  quoteDelete(isComplete: any, index: number|any){
    if (isComplete) {
      let delQuote = confirm(`Are you sure you want to delete this Quote?`)

      if (delQuote){
        this.quotes.splice(index, 1)
      }
    }
  }

  currentHigh: any
  prevHigh: any
  counter: number

  highestUpvote() {
    this.currentHigh= 0
    this.prevHigh= 0
  
  for (this.counter = 0; this.counter < this.quotes.length; this.counter++) {
    this.prevHigh = this.quotes[this.counter].like;
    if (this.prevHigh > this.currentHigh) { this.currentHigh = this.prevHigh }
  }
  return this.currentHigh

}

  constructor() { }

  ngOnInit(): void {
  }

}

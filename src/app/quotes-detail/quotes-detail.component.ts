
import { Quotes } from '../quotes';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {

  @Input() quote: Quotes;
  
  upVote(){
    this.quote.like+=1  
  }
  downVote(){
    this.quote.dislike+=1
  }


  @Output() isComplete = new EventEmitter<boolean>();

  
  quotesDelete(read: boolean) {
    this.isComplete.emit(read);
  }

  


  constructor() { }

  ngOnInit(): void {
  }

}

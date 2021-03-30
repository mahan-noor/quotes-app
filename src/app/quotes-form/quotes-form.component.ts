// import { Quote } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  // quotesForm = new FormGroup({
  //   name: new FormControl(''),
  //   author: new FormControl('')
  // });



  @Output() add = new EventEmitter<Quotes>();

  newQuotes = new Quotes(0, "","","",new Date(),0,0);
  addQuote() {
  
    this.add.emit({...this.newQuotes});

    // this.quotes = new Quotes(0, "" , "" , "","", new Date(),0,0)
  }
  constructor() { }

  ngOnInit(): void {
  }

}

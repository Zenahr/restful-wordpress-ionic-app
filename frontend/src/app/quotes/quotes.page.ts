import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {
  quotes: any = []
  
  constructor(private dataService: DataService, public authService: AuthService) {
    this.dataService.getData('quotes').subscribe(data => {
      console.log(data)
      this.quotes = data
    })
   }

  ngOnInit() {
  }
}

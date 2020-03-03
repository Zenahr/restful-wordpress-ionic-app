import { DataService } from './../data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.page.html',
  styleUrls: ['./quote-details.page.scss'],
})
export class QuoteDetailsPage implements OnInit {

  quote;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    // console.log(id)
    this.dataService.getData(`quotes/${id}`).subscribe(data => {
      console.log(data)
      this.quote = data
    })
  }

}

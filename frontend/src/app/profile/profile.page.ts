import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  model: any = {}

  constructor(public authService: AuthService) { }

  ngOnInit() {

  }

  onLogin(f) {
    console.log(f.value)
    this.authService.postLogin(f.value).subscribe(data => {
      console.table(data)
      this.authService.isAuthenticated.next(true)
      
    }, err => {
      this.authService.isAuthenticated.next(false)
      console.log(err.message)
    })
  }

}

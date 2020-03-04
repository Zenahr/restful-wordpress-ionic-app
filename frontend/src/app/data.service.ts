import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  token;
  constructor(private http: HttpClient) {
    this.http = http
   }

  getData(url: string) {
    return this.http.get(`${apiUrl}/wp/v2/${url}`)
  }

  postData(url: string, data) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    }) 

    return this.http.post(`${apiUrl}/wp/v2/${url}`, data, {
      headers: headers
    })
  }
}

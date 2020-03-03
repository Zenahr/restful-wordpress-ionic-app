import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    this.http = http
   }

  getData(url: string) {
    return this.http.get(`${apiUrl}/wp/v2/${url}`)
  }
}

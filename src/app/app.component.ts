import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oskarssuperapp';
  message = this.http.get<any[]>('http://localhost:4201');
  post() {
    this.http.post<any>('http://localhost:4201/users', { 'user': 'hej', 'pw': 'da' }).subscribe(next => console.log(next));
  }
  constructor(private http: HttpClient) { }
}

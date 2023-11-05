import { Component } from '@angular/core';
import { ApiCallService } from 'src/api-call.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miniProject';
  apiData: any[] = [];

  constructor(private service: ApiCallService){}
  

  // ngOnInit(){
  //   console.log('fetching data');
  //   this.getData();
  // }

  // getData() {
  //   this.service.getData().subscribe(
  //     data => {
  //       this.apiData = data.data;
  //       console.log(this.apiData);
  //     },
  //     error => {
  //       console.log('Error:', error);
  //     }
  //   );
  // }
}

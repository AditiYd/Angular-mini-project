import { Component } from '@angular/core';
import { ApiCallService } from 'src/api-call.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewmore',
  templateUrl: './viewmore.component.html',
  styleUrls: ['./viewmore.component.css']
})
export class ViewmoreComponent {
  artworkId: number;
  artworkData: any;

  constructor(private apiCallService: ApiCallService, private route: ActivatedRoute) {
    this.artworkId = Number(this.route.snapshot.paramMap.get('id'));
    this.apiCallService.getDataById(this.artworkId).subscribe(data => {
      console.log("Data received from API:", data);
      this.artworkData = data?.data;
    });
  }
}

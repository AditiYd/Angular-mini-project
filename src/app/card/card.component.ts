import { Component, Input, NgModule } from '@angular/core';
import { ApiCallService } from 'src/api-call.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, ReactiveFormsModule} from '@angular/forms';
import { FormBuilder, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent {
  cards: any[] = [];
  pageNumber = 1;
  searchForm!: FormGroup;
  
  constructor(private service: ApiCallService, private form: FormBuilder){
    this.searchForm = this.form.group({
      searchInput: ''
    });
 
    this.searchForm.get('searchInput')?.valueChanges.subscribe((value) => {
      if (value) {
        this.service.getBySearch(value).subscribe((response: any) => {
          console.log(response);
          this.cards = response?.data;
        });
      } else {
        this.getData();
      }
    });
  }

  ngOnInit(){
    console.log('fetching data');
    this.getData();
  }
  getData() { 
    this.service.getData(this.pageNumber).subscribe( 
      data => { 
        this.cards = data.data; 
        console.log(this.cards); 
      }, 
      error => { 
        console.log('Error:', error); 
      } 
    ); 
  }

  goToNextPage(){ 
    this.pageNumber++; 
    this.getData(); 
  }

  goToPreviousPage(){ 
    if(this.pageNumber > 1){ 
      this.pageNumber--; 
      this.getData(); 
    } 
  } 

  // getBySearch() { 
  //   this.service.getBySearch(this.searchItem).subscribe( 
  //     data => { 
  //       this.cards = data.data; 
  //       console.log(this.cards); 
  //     }, 
  //     error => { 
  //       console.log('Error:', error); 
  //     } 
  //   ); 
  // }

  // onSearch(event: Event) {
  //   event.preventDefault();
  //   const term = (event.target as HTMLInputElement).value;
  //   this.searchItem = term;
  //   this.getBySearch();
  // }

  addToWishlist(item: any) {
    this.service.wishlistCart(item);
  }
}

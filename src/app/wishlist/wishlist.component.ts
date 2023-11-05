import { Component } from '@angular/core';
import { ApiCallService } from 'src/api-call.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  wishlistArray: Array<any> = []; dataitem: any;
  
  constructor(private service: ApiCallService) {
    this.wishlistArray = this.service.getWishlist();
    console.log(this.wishlistArray);
  }

  removeFromWishlist(item: any) {
    this.service.removeFromWishlist(item);
    this.wishlistArray = this.service.getWishlist();
  }

  // removeItem(prod: any){
  //   let leftProd = this.wishlistArray.filter((dataitem: any) => dataitem != prod);
  //   localStorage.setItem('wishlist', JSON.stringify(leftProd));
  //   this.wishlistArray = leftProd;
  // }
}
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  wishlistArray: Array<any> = [];
  constructor(private http: HttpClient) { }
  
  getData(pageno: number) {
    return this.http.get<any>(`https://api.artic.edu/api/v1/artworks?page=${pageno}`);
  }
  getDataById(id: number) {
    return this.http.get<any>('https://api.artic.edu/api/v1/artworks/' + id);
  }
  getBySearch(searchItem: string) {
    return this.http.get<any>(`https://api.artic.edu/api/v1/artworks?page=${searchItem}`);
  }
  wishlistCart(item: any) { 
    let storage = JSON.parse(localStorage.getItem('wishlist') || '[]'); 
    const existingIndex = storage.findIndex((i: any) => i.id === item.id); 
    if (existingIndex === -1) { 
      storage.push(item); 
      localStorage.setItem('wishlist', JSON.stringify(storage)); 
      console.log(storage); 
    } 
  }

  getWishlist() {
    return JSON.parse(localStorage.getItem('wishlist') || '[]');
  }
  
  removeFromWishlist(item: any) {
    let storage = JSON.parse(localStorage.getItem('wishlist') || '[]');
    let index = storage.findIndex((x: any) => x.id === item.id);
    if (index !== -1) {
      storage.splice(index, 1);
      localStorage.setItem('wishlist', JSON.stringify(storage));
      console.log(`Item with id ${item.id} removed from the wishlist`);
    }
  }
}


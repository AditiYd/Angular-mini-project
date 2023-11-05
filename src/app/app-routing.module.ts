import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ViewmoreComponent } from './viewmore/viewmore.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path: "",
   component: CardComponent
  },
  {
    path: 'viewmore/:id',
    component: ViewmoreComponent
  },
  {
    path: "wishlist",
    component: WishlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

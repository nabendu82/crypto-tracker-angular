import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoDetailComponent } from './crypto-detail/crypto-detail.component';
import { CryptoListComponent } from './crypto-list/crypto-list.component';

const routes: Routes = [
  {path:'', redirectTo :'crypto-list', pathMatch:'full'},
  {path:'crypto-list', component: CryptoListComponent},
  {path:'crypto-detail/:id', component: CryptoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

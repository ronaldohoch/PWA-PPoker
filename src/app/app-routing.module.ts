import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from "./cards/cards.component";
// import { HeroesComponent } from './heroes/heroes.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {path: '', component: CardsComponent},
  // {path: '', redirectTo:'/dashboard', pathMatch:'full'},
  // {path: 'dashboard', component: DashboardComponent},
  // {path: 'detail/:id', component: HeroDetailComponent}
]

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageControllerComponent } from './home/presentation/home-page/home-page-controller.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageControllerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

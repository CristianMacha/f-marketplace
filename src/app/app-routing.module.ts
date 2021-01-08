import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';
  
import { HomeComponent } from './modules/home/pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileRoutingModule } from './modules/profile/profile-routing.module';
import { HomeComponent } from './modules/home/home.component';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthRoutingModule, ProfileRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

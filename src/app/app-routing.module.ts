import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LftsidnavComponent } from './lftsidnav/lftsidnav.component';
import { RgtsidnavComponent } from './rgtsidnav/rgtsidnav.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'lftsidnav', component: LftsidnavComponent },
  { path: 'rgtsidnav', component: RgtsidnavComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

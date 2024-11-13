import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CochesComponent } from './components/coches/coches.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CrearcocheComponent } from './components/crearcoche/crearcoche.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "coches", component: CochesComponent},
  {path: "profile", component: ProfileComponent},
  {path: "crearcoche", component: CrearcocheComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

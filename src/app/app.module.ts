import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CochesComponent } from './components/coches/coches.component';
import { CrearcocheComponent } from './components/crearcoche/crearcoche.component';
import { ModificarcocheComponent } from './components/modificarcoche/modificarcoche.component';
import { FormsModule } from '@angular/forms';
import { ServiceEmpleados } from './services/service.empleados';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    ProfileComponent,
    CochesComponent,
    CrearcocheComponent,
    ModificarcocheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ServiceEmpleados],
  bootstrap: [AppComponent]
})
export class AppModule { }

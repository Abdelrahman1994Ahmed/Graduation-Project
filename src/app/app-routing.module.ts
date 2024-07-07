import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ReadingComponent } from './components/reading/reading.component';
import { Book1ListienDshbrdComponent } from './dashboards/book1-listien-dshbrd/book1-listien-dshbrd.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  {path:"homepage",component: HomePageComponent},
  {path:"register",component: RegisterPageComponent},
  {path:"login",component: LoginPageComponent},
  {path:"home",component: HomePageComponent},
  {path:'pathbook1',component: ReadingComponent},
  {path: 'pathbook2',component: Book1ListienDshbrdComponent},
  {path: 'loginpath',component: HomePageComponent},
  {path: 'startpath',component: LoginPageComponent},
  {path: 'regisform',component: LoginPageComponent},
  {path: 'pathcontactus',component: ContactUsComponent},
  {path: 'pathcontact',component: ContactComponent},


];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
 export class AppRoutingModule { }

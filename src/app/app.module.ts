import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LatestEditionComponent } from './components/latest-edition/latest-edition.component';
import { WhoAreWeComponent } from './components/who-are-we/who-are-we.component';
import { ArbBooksDshbrdComponent } from './dashboards/arb-books-dshbrd/arb-books-dshbrd.component';
import { EngBooksDshbrdComponent } from './dashboards/eng-books-dshbrd/eng-books-dshbrd.component';
import { ChldBooksDshbrdComponent } from './dashboards/chld-books-dshbrd/chld-books-dshbrd.component';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ChipsModule } from 'primeng/chips';
import { NguCarousel,  NguCarouselDefDirective , NguTileComponent,  NguCarouselNextDirective,  NguCarouselPrevDirective,  NguItemComponent} from '@ngu/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxCustomCarouselModule } from 'ngx-custom-carousel';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Service1Service } from '../app/Services/service1.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ReadingComponent } from './components/reading/reading.component';
import { ListeningComponent } from './components/listening/listening.component';
import { Book1ListienDshbrdComponent } from './dashboards/book1-listien-dshbrd/book1-listien-dshbrd.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    LatestEditionComponent,
    WhoAreWeComponent,
    ArbBooksDshbrdComponent,
    EngBooksDshbrdComponent,
    ChldBooksDshbrdComponent,
    FooterComponent,
    ReadingComponent,
    ListeningComponent,
    Book1ListienDshbrdComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ButtonModule,
    CarouselModule, ButtonModule, TagModule,
    ChipsModule,
    NguCarousel,
    NguCarouselDefDirective,
    NguCarouselNextDirective,
    NguCarouselPrevDirective,
    NguItemComponent,
    NguTileComponent,
    MdbCheckboxModule,
    MdbCarouselModule,
    SlickCarouselModule,
    NgxCustomCarouselModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxExtendedPdfViewerModule,
    NgxScrollTopModule
  
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

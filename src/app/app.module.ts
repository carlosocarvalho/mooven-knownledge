import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

//CUSTOM IMPORTS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Mooven Components
import {
  ListItemComponent,
  ListComponent,
  SearchComponent,
  ShowItemComponent,
} from './components';
import { PublicComponent } from './layouts/public/public.component';
import { LogoComponent } from './components/logo/logo.component';
import { FullUrlPipe } from './pipes/full-url.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    ShowItemComponent,
    SearchComponent,
    PublicComponent,
    LogoComponent,
    FullUrlPipe
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    library.add(fas, far)
  }
}

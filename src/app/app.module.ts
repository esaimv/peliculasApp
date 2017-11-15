import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PeliculasService } from './providers/peliculas.service'

import { APP_ROUTING } from './app.routes'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpModule, JsonpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { ImgPipe } from './pipes/img.pipe';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { NodecimalPipe } from './pipes/nodecimal.pipe';
import { DescriptionPipe } from './pipes/description.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ImgPipe,
    PeliculaComponent,
    NodecimalPipe,
    DescriptionPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

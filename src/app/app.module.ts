import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [AppComponent, GoogleMapComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD6Nouvr1O3Hd7iui2J69K11woXrwv3Bws'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NbtvCommonModule } from './components/nbtv-common/nbtv-common.module';

import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { StreamingMedia } from '@awesome-cordova-plugins/streaming-media/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FontAwesomeModule,
    HttpClientModule,NbtvCommonModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CallNumber, ScreenOrientation, StreamingMedia],
  bootstrap: [AppComponent],
})
export class AppModule {}

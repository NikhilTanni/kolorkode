import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {CommonModule} from '@angular/common';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HttpModule } from '@angular/http';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireModule } from 'angularfire2';

var config = {
    apiKey: "AIzaSyCn5ospg7uD2Iu-vcj2Xyt_5XkWgF_AGvU",
    authDomain: "kolorkode-ed700.firebaseapp.com",
    databaseURL: "https://kolorkode-ed700.firebaseio.com",
    projectId: "kolorkode-ed700",
    storageBucket: "kolorkode-ed700.appspot.com",
    messagingSenderId: "384879777844"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    // AngularFireDatabaseModule,
    // AngularFireModule.initializeApp(config),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

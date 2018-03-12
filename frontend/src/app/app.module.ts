
import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
//import { AppRoutingModule } from './app-routing.module';
import { CComponent } from './c/c.component';
import { CsharpComponent } from './csharp/csharp.component';
import { JavascriptComponent } from './javascript/javascript.component';
import {routes} from './app-routing.module';
import {CChildComponent} from './c/c.childcomponent';
import {DataService} from '././data.service';
@NgModule({
  declarations: [
    AppComponent,
    CComponent,CChildComponent,
    CsharpComponent,
    JavascriptComponent
  ],
  imports: [
    BrowserModule,HttpModule,HttpClientModule,
   // AppRoutingModule,
    RouterModule.forRoot([
      {path: 'c', component:CComponent},
      {path: 'csharp',component:CsharpComponent},
      {path: 'javascript',component:JavascriptComponent}
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

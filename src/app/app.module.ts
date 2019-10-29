import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloLdiComponent } from './ldi/hello-ldi/hello-ldi.component';
import { HelloEchosComponent } from './echos/hello-echos/hello-echos.component';
import { ClientDirective } from './client.directive';
import { ListComponent } from './containers/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloLdiComponent,
    HelloEchosComponent,
    ClientDirective,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [
    HelloLdiComponent,
    HelloEchosComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

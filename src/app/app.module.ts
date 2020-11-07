import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OuterComponent } from './outer/outer.component';
import { SamplesComponent } from './samples/samples.component';
import { SampleItemComponent } from './sample-item/sample-item.component';

@NgModule({
  declarations: [
    AppComponent,
    OuterComponent,
    SamplesComponent,
    SampleItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

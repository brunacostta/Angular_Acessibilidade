import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { YesNoButtonGroupModule } from './shared/componentes/yes-no-button-group/yes-no-button-group.module';

import { AppComponent } from './app.component';
import { DisableControlModule } from './shared/directives/disable-control/disable-control-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    YesNoButtonGroupModule,
    ReactiveFormsModule,
    FormsModule,
    DisableControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

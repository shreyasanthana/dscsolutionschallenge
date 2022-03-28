import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SelectButtonModule} from 'primeng/selectbutton';
import {PanelModule} from 'primeng/panel';
import {MenuModule} from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TooltipModule} from 'primeng/tooltip';
import {SliderModule} from 'primeng/slider';

import {ColorPickerModule} from 'primeng/colorpicker';


@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    SelectButtonModule,
    PanelModule,
    MenuModule,
    TooltipModule,
    SliderModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { EditAreaComponent } from './edit-area/edit-area.component';
import { PreviewAreaComponent } from './preview-area/preview-area.component';


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    EditAreaComponent,
    PreviewAreaComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

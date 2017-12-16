import { PdfGeneratorService } from './pdf-generator.service';
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { EditorComponent } from './editor/editor.component'
import { EditAreaComponent } from './edit-area/edit-area.component'
import { PreviewAreaComponent } from './preview-area/preview-area.component'
import { ToolbarComponent } from './toolbar/toolbar.component'

import { ToolbarCommandService } from './toolbar/toolbar-command.service'

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    EditAreaComponent,
    PreviewAreaComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ToolbarCommandService,
    PdfGeneratorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

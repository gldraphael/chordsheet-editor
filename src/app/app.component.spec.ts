import { FormsModule } from '@angular/forms'
import { EditorComponent } from './editor/editor.component'
import { TestBed, async } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { ToolbarComponent } from './toolbar/toolbar.component'
import { EditAreaComponent } from './edit-area/edit-area.component'
import { PreviewAreaComponent } from './preview-area/preview-area.component'
import { ToolbarCommandService } from './toolbar/toolbar-command.service'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        EditorComponent,
        EditAreaComponent,
        PreviewAreaComponent,
        ToolbarComponent
      ],
      imports: [ FormsModule ],
      providers: [ ToolbarCommandService ]
    }).compileComponents()
  }))
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
})

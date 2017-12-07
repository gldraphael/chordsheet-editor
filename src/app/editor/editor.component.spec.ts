import { EditAreaComponent } from './../edit-area/edit-area.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { EditorComponent } from './editor.component'
import { PreviewAreaComponent } from '../preview-area/preview-area.component';
import { FormsModule } from '@angular/forms';
import { ToolbarCommandService } from '../toolbar/toolbar-command.service';

describe('EditorComponent', () => {
  let component: EditorComponent
  let fixture: ComponentFixture<EditorComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorComponent, EditAreaComponent, PreviewAreaComponent ],
      providers: [ ToolbarCommandService ],
      imports: [ FormsModule ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

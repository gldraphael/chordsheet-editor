import { EditAreaComponent } from './../edit-area/edit-area.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { EditorComponent } from './editor.component'
import { PreviewAreaComponent } from '../preview-area/preview-area.component';
import { FormsModule } from '@angular/forms';

describe('EditorComponent', () => {
  let component: EditorComponent
  let fixture: ComponentFixture<EditorComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorComponent, EditAreaComponent, PreviewAreaComponent ],
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

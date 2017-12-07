import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { EditAreaComponent } from './edit-area.component'
import { Song } from '../models/Song';

describe('EditAreaComponent', () => {
  let component: EditAreaComponent
  let fixture: ComponentFixture<EditAreaComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAreaComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAreaComponent)
    component = fixture.componentInstance
    component.song = new Song('Hey there Delilah', "[D]Hey there Delilah what's it [F#m]like in NY city?")
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

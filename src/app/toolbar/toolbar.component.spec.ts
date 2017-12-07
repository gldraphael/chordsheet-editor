import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ToolbarComponent } from './toolbar.component'
import { ToolbarCommandService } from './toolbar-command.service'
import { By } from '@angular/platform-browser'

function getMobilePreviewElement(fixture: ComponentFixture<ToolbarComponent>) {
  const preview = fixture.debugElement.query(By.css('ul li:first-of-type a span.small-screen'))
  return preview.nativeElement as HTMLSpanElement
}

describe('ToolbarComponent', () => {
  let component: ToolbarComponent
  let fixture: ComponentFixture<ToolbarComponent>
  let toolbarCommandService: ToolbarCommandService

  beforeAll(() => {
    toolbarCommandService = new ToolbarCommandService()
  })

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ],
      providers: [
        { provide: ToolbarCommandService, useValue: toolbarCommandService }
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should show Edit on startup (because the preview tab is open)', () => {
    expect(getMobilePreviewElement(fixture).textContent).toEqual('Edit')
  })

  it('should show Preview once the preview pane visibility is toggled', () => {
    toolbarCommandService.togglePreviewPaneVisibility()
    fixture.detectChanges()

    expect(getMobilePreviewElement(fixture).textContent).toEqual('Preview')
  })

})

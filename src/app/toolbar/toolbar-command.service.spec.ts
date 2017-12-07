import { TestBed, inject } from '@angular/core/testing'

import { ToolbarCommandService } from './toolbar-command.service'

describe('ToolbarCommandService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToolbarCommandService]
    })
  })

  it('should be created', inject([ToolbarCommandService], (service: ToolbarCommandService) => {
    expect(service).toBeTruthy()
  }))

  it('showPreviewPane should be true', inject([ToolbarCommandService], (service: ToolbarCommandService) => {
    expect(service.shouldShowPreviewPane().value).toBeTruthy()
  }))

  it('togglePreviewPaneVisibility() should change true to false...',
    inject([ToolbarCommandService], (service: ToolbarCommandService) => {
      service.togglePreviewPaneVisibility()
      expect(service.shouldShowPreviewPane().value).toBeFalsy()
  }))

  it('...and change false to true',
  inject([ToolbarCommandService], (service: ToolbarCommandService) => {
    service.togglePreviewPaneVisibility()
    service.togglePreviewPaneVisibility()
    expect(service.shouldShowPreviewPane().value).toBeTruthy()
}))

})

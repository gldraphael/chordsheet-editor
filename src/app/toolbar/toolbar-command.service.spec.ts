import { TestBed, inject } from '@angular/core/testing';

import { ToolbarCommandService } from './toolbar-command.service';

describe('ToolbarCommandService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToolbarCommandService]
    });
  });

  it('should be created', inject([ToolbarCommandService], (service: ToolbarCommandService) => {
    expect(service).toBeTruthy();
  }));
});

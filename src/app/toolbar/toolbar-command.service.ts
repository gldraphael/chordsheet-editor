import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ToolbarCommandService {

  private _shouldShowPreviewPane = new BehaviorSubject<boolean>(true);

  public shouldShowPreviewPane () {
    return this._shouldShowPreviewPane
  }

  public togglePreviewPaneVisibility() {
    this._shouldShowPreviewPane.next(!this._shouldShowPreviewPane.value)
  }

}

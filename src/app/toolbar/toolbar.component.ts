import { ToolbarCommandService } from './toolbar-command.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private toolbarCommandService: ToolbarCommandService) { }

  ngOnInit() {
  }

  togglePreviewPane() {
    console.log('toggling')
    this.toolbarCommandService.togglePreviewPaneVisibility()
  }

}

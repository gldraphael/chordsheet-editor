import { ToolbarCommandService } from './toolbar-command.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  editItemText: string

  constructor(private toolbarCommandService: ToolbarCommandService) { }

  ngOnInit() {
    this.toolbarCommandService.shouldShowPreviewPane().subscribe(
      visible => {
        this.editItemText = visible ? 'Edit' : 'Preview'
      }
    )
  }

  togglePreviewPane() {
    console.log('toggling')
    this.toolbarCommandService.togglePreviewPaneVisibility()
  }

}

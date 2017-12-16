import { ToolbarCommandService } from './toolbar-command.service'
import { Component, OnInit } from '@angular/core'
import { PdfGeneratorService } from '../pdf-generator.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  editItemText: string

  constructor(
    private toolbarCommandService: ToolbarCommandService,
    private pdfService: PdfGeneratorService
  ) { }

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

  savePdf() {
    var previewElement = document.getElementById('preview-area')
    this.pdfService.toPdf(previewElement)
  }

}

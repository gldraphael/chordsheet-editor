import { Injectable } from '@angular/core'
import * as html2pdf from 'html2pdf.js'

@Injectable()
export class PdfGeneratorService {

  constructor() { }

  public toPdf(filename: string, element: HTMLElement) {
    const options = {
      margin: .75,
      filename: filename.toLowerCase().endsWith('.pdf') ? filename : filename + '.pdf',
      image: {
        type: 'jpeg',
        quality: 1
      },
      html2canvas: {
        dpi: 300,
        letterRendering: true
      },
      jsPDF: {
        unit: 'in',
        format: 'letter',
        orientation: 'portrait'
      }
    }
    html2pdf(element, options)
  }

}

import { Injectable } from '@angular/core';
import * as html2pdf from 'html2pdf.js';

@Injectable()
export class PdfGeneratorService {

  constructor() { }

  public toPdf(element: HTMLElement) {
    console.log('saving element:')
    console.log(element)
    html2pdf(element);
  }

}

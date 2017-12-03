import { Song } from './../models/Song'
import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-preview-area',
  templateUrl: './preview-area.component.html',
  styleUrls: ['./preview-area.component.css']
})
export class PreviewAreaComponent implements OnInit {

  @Input() song: Song

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../models/Song';

@Component({
  selector: 'app-edit-area',
  templateUrl: './edit-area.component.html',
  styleUrls: ['./edit-area.component.css']
})
export class EditAreaComponent implements OnInit {

  @Input() song: Song

  constructor() { }

  ngOnInit() {
  }

}

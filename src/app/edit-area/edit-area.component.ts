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

    // Resize the text area for the title as required
    // Code adapted from: https://stackoverflow.com/a/7745840
    var textarea = document.getElementById("cs-edit-title-textarea");
    var heightLimit = 200; /* Maximum height: 200px */

    textarea.oninput = function() {
      textarea.style.height = ""; /* Reset the height*/
      textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
    };
  }

}

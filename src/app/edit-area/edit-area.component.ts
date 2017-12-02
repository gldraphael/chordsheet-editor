import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../models/Song';
import * as CodeMirror from 'codemirror';

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
    var textarea = document.getElementById("cs-edit-title-textarea") as HTMLTextAreaElement;
    var heightLimit = 200; /* Maximum height: 200px */

    textarea.oninput = () => {
      textarea.style.height = ""; /* Reset the height*/
      textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
    };

    // Setup our content editor area using codemirror
    var editor = CodeMirror(
      document.getElementById("cs-edit-content-area"), {
        lineNumbers: false,
        mode:"markdown",
        lineWrapping: true,
        value: this.song.content,
        viewportMargin: Infinity,
        placeholder: "Enter [G7]lyrics with [F]chords...",
        tabindex: 2
      }
    );

    // Update the model on every change
    CodeMirror.on(
      editor.getDoc(),
      "change",
      (instance, change) => this.song.content = editor.getValue()
    )


  } // End of ngOnInit()

} // End of component

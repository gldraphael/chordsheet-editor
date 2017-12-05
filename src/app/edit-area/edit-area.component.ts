import { Component, OnInit, Input } from '@angular/core'
import { Song } from '../models/Song'
import * as CodeMirror from 'codemirror'
import 'codemirror/mode/markdown/markdown'

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
    const textarea = document.getElementById('cs-edit-title-textarea') as HTMLTextAreaElement
    const heightLimit = 200 /* Maximum height: 200px */

    function adjustTextAreaHeight() {
      textarea.style.height = '' /* Reset the height*/
      textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + 'px'
    }
    // Adjust the text area height now...
    adjustTextAreaHeight()

    // and on every textarea input
    textarea.oninput = () => {
      adjustTextAreaHeight()
    }

    // Setup our content editor area using codemirror
    const editor = CodeMirror(
      document.getElementById('cs-edit-content-area'), {
        lineNumbers: false,
        mode: 'markdown',
        lineWrapping: true,
        value: this.song.content,
        viewportMargin: Infinity,
        placeholder: 'Enter [G7]lyrics with [F]chords...',
        tabindex: 2
      }
    )

    editor.focus()

    // Update the model on every change
    CodeMirror.on(
      editor.getDoc(),
      'change',
      (instance, change) => this.song.content = editor.getValue()
    )


  } // End of ngOnInit()

} // End of component

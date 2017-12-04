import { Song } from './../models/Song'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  song: Song = new Song (
    'Happy birthday',
`Happy [G]birthday to [D]you!
Happy [D7]birthday to [G]you!
Happy [Bm]birthday! Happy [Em]birthday!
Happy [G]birthday [D]to [G]you!

---

## Using the Chordsheet Editor

* Type the lyrics as usual and enter the chords in square brackets [] as shown in the example above.
* You may also use [markdown to format your content](http://commonmark.org/help/).

**THIS IS A WORK IN PROGRESS**`
  )

  constructor() { }

  ngOnInit() {
  }

}

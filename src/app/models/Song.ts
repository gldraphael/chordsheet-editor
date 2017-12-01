import { toHtml } from 'chordsheet'

export class Song {

  constructor(public title: string, public content: string) { }

  toHtml(): string {
    return toHtml(this.content)
  }

}

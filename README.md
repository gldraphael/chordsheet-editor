# Chordsheet Editor &middot; [![Build Status](https://travis-ci.org/gldraphael/chordsheet-editor.svg?branch=master)](https://travis-ci.org/gldraphael/chordsheet-editor)

<https://cseditor.com>

> A Free and Open Source Chordsheet Editor.

[![Chordsheet Editor Screenshot](https://user-images.githubusercontent.com/10794213/34078314-ced158de-e33d-11e7-975a-80e07521a38e.png)](https://cseditor.com)

This is a webapp to create chordsheets also referred to as chord charts. UI heavily inspired by Ghost.   
_If you're intereseted in the generation of the preview markup, check this repo: [`gldraphael/chordsheet`](https://github.com/gldraphael/chordsheet)._

## Setting up your dev environment

1. Install Angular CLI globally using: `npm install -g @angular/cli`
1. [Optional] Install VS Code from [here](https://code.visualstudio.com).
1. Clone this repo.
1. `cd` into `chordsheed-editor` and run `ng serve`.
1. Press <kbd>F5</kbd> within VS Code (or browse manually to `localhost:4200`)

## Useful scripts and commands

Command         | Description 
----------------|--------------
`ng serve`      | Start a local server for `chordsheet-editor`
`ng lint`       | Run the linter
`ng lint --fix` | Fix lint errors wherever possible
`npm run test`  | Run karma tests
`ng e2e`        | Run e2e tests. (E2E are to be written.)

**Code scaffolding:**

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

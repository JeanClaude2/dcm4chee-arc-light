import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-clone-selector',
  templateUrl: './clone-selector.component.html'
})
export class CloneSelectorComponent {

    private _toCloneElement;

    constructor(public dialogRef: MdDialogRef<CloneSelectorComponent>) { }

    get toCloneElement() {
        return this._toCloneElement;
    }

    set toCloneElement(value) {
        this._toCloneElement = value;
    }
}
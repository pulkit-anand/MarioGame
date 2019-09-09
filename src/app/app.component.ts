import { Component, HostListener } from '@angular/core';
import { MatrixCell } from './matrix-cell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  MRows: MatrixCell[][] = [];
  noOfRows: number;
  noOfCols: number;


  iCounter = 0;
  iDotCounter = 0;

  focussedCell: MatrixCell;

  marioRow: number;
  marioCol: number;

  constructor() {
    this.setUpGame();
  }
  setUpGame() {
    this.MRows = [];
    this.noOfCols = parseInt(window.prompt('Please enter board width','10'));
    this.noOfRows = parseInt(window.prompt('Please enter board height','10'));

    for (let i = 0; i < this.noOfRows; i++) {
        let mArray: MatrixCell[] = [];
        for(let j = 0; j < this.noOfCols; j++) {
          let mCell: MatrixCell = new MatrixCell();
  
          mArray.push(mCell);
        }
        this.MRows.push(mArray);
    }
    let targetDots = (this.noOfCols + this.noOfRows) / 2;

    while (this.iDotCounter < targetDots) {
      let rowNum : number =  Math.floor(Math.random() * 10);
      let colNum : number =  Math.floor(Math.random() * 10);
      this.focussedCell = this.MRows[rowNum][colNum];
      if (!this.focussedCell.isDot) {
        this.focussedCell.isDot = true;
        this.iDotCounter++;
      }

    }
    // To land on a cell which is not a dot
    do {
    this.marioRow = Math.floor(Math.random() * 10);
    this.marioCol = Math.floor(Math.random() * 10);
    if (!this.MRows[this.marioRow][this.marioCol].isDot) {
      this.focussedCell = this.MRows[this.marioRow][this.marioCol];
      this.focussedCell.isFocussed = true;
    }
    } while (this.MRows[this.marioRow][this.marioCol].isDot);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.code) {
      case 'ArrowUp' : this.moveUp();
                       break;
        case 'ArrowDown' : this.moveDown();
                           break;
           case 'ArrowLeft' : this.moveLeft();
                              break;
               case 'ArrowRight' : this.moveRight();
                                   break;
  }
  }
  moveLeft() {
  if (this.marioCol > 0) {
        this.focussedCell.isFocussed = false;
        this.focussedCell.isDot = false;
        this.focussedCell = this.MRows[this.marioRow][--this.marioCol];
        this.activateAndCheckCell();
  }
  }
  moveRight() {
    if (this.marioCol !== this.noOfCols - 1) {
      this.focussedCell.isFocussed = false;
      this.focussedCell.isDot = false;
      this.focussedCell = this.MRows[this.marioRow][++this.marioCol];
      this.activateAndCheckCell();
    }
  }
  moveUp() {
    if (this.marioRow > 0) {
      this.focussedCell.isFocussed = false;
      this.focussedCell.isDot = false;
      this.focussedCell = this.MRows[--this.marioRow][this.marioCol];
      this.activateAndCheckCell();
    }
  }
  moveDown() {
    if (this.marioRow !== this.noOfRows - 1) {
      this.focussedCell.isFocussed = false;
      this.focussedCell.isDot = false;
      this.focussedCell = this.MRows[++this.marioRow][this.marioCol];
      this.activateAndCheckCell();
    }
  }

  activateAndCheckCell() {
    this.iCounter++;
    if (this.focussedCell.isDot) {
      this.iDotCounter--;
    }
    if (this.iDotCounter === 0) {
      window.alert('Game Over. Total moves to save princess: ' + this.iCounter);
    }
    this.focussedCell.isDot = false;
    this.focussedCell.isFocussed = true;

  }


}

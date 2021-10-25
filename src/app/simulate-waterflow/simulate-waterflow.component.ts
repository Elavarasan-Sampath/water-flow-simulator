import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-simulate-waterflow',
  templateUrl: './simulate-waterflow.component.html',
  styleUrls: ['./simulate-waterflow.component.scss']
})
export class SimulateWaterflowComponent implements OnInit {

  gridCells: any = [];
  flowStartRow: any = [];
  gridBlocks: any = [];
  gridOptions: any;
  showSimulationStart: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.gridOptions = this.router.getCurrentNavigation().extras.state || {
      noOfRows : 5,
      noOfColumns : 5,
      noOfObstructions : 3
    };
  }

  ngOnInit(): void {
    this.gridCells = [];
    for (let row = 0; row < this.gridOptions.noOfRows+1; row++) {
      let rows = [];
      for (let col = 0; col < this.gridOptions.noOfColumns; col++) {
        rows.push({
          rowIndex: row,
          colIndex: col
        });
      }
      this.gridCells.push(rows);
    }
    for (let block = 0; block < this.gridOptions.noOfObstructions; block++) {
      this.gridBlocks.push({ id: block });
    }
  }
  drop = (event) => {
    let blockCell = event.dataTransfer.getData("draggedBlock");
    this.gridBlocks[blockCell].moved = true;
    const rowIndex = event.srcElement.attributes.rowindex.nodeValue;
    const columnIndex = event.srcElement.attributes.colindex.nodeValue;
    this.gridCells[rowIndex][columnIndex].blocked = true;
    console.log(event);
  }

  allowDrop = (event) => {
    event.preventDefault();
  }

  dragStart(event, blockCell) {
    event.dataTransfer.setData("draggedBlock", blockCell.id);
  }

  startSimulation = () => {
    this.showSimulationStart = true;
  }

  checkAllblocksMoved = () => {
    return this.gridBlocks.filter(block => !block.moved).length > 0;
  }

  startFlowSimulation = (cell) => {
    cell.flow = true;
    this.flowDown(Object.assign({}, cell));
  }

  flowDown = (cell) => {
    if (cell.rowIndex < this.gridCells.length && this.gridCells[cell.rowIndex + 1]) {
      if (this.gridCells[cell.rowIndex + 1] && !this.gridCells[cell.rowIndex + 1][cell.colIndex].blocked) {
        cell.rowIndex++;
        this.gridCells[cell.rowIndex][cell.colIndex].flow = true;
        if(this.gridCells[cell.rowIndex + 1])
        this.flowDown(Object.assign({}, cell));
      }
      else {
        setTimeout(() => { cell.colIndex + 1 < this.gridCells[cell.rowIndex].length ? this.flowRight(Object.assign({}, cell)): null });
        setTimeout(() => { cell.colIndex -1 >= 0 ? this.flowLeft(Object.assign({}, cell)): null });
      }
    }
  }

  flowRight = (cell) => {
    if (cell.colIndex < this.gridCells[cell.rowIndex].length && cell.rowIndex < this.gridCells.length) {
      if (this.gridCells[cell.rowIndex][cell.colIndex + 1] && !this.gridCells[cell.rowIndex][cell.colIndex + 1].blocked) {
        cell.colIndex++;
        this.gridCells[cell.rowIndex][cell.colIndex].flow = true;
      }
      this.gridCells[cell.rowIndex + 1]
      this.flowDown(Object.assign({}, cell));
    }
  }

  flowLeft = (cell) => {
    if (cell.colIndex >= 0 && cell.rowIndex < this.gridCells.length) {
      if (this.gridCells[cell.rowIndex][cell.colIndex - 1] && !this.gridCells[cell.rowIndex][cell.colIndex - 1].blocked) {
        cell.colIndex--;
        this.gridCells[cell.rowIndex][cell.colIndex].flow = true;
      }
      this.gridCells[cell.rowIndex + 1]
      this.flowDown(Object.assign({}, cell));
    }
  }

  resetBlocks = () => {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl], { state: { ...this.gridOptions } });
    });
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Input()
  all: number = 0;
  @Input()
  inStock: number = 0;
  @Input()
  outofStock: number = 0;
  selectedbutton:string='all'
  @Output()
  selectbuttonchange:EventEmitter<string>=new EventEmitter<string>();
  onSelectChange(){
    console.log("aave");
    this.selectbuttonchange.emit(this.selectedbutton)
  }
}

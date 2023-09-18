import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';
  @Output() serchTextChange = new EventEmitter<string>();
  // For without button Click
  onSearchTextChanged(){
    this.serchTextChange.emit(this.searchText)
  }
  // updateSearchText(event: any) {
  //   this.searchText = event.target.value;
  // }

  // For button click 
  updateSearchText(event: HTMLInputElement) {
    this.searchText = event.value;
    this.serchTextChange.emit(this.searchText)
  }
}

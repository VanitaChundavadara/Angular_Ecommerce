import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  searchText: string = '';
  @Output() serchTextChange = new EventEmitter<string>();
  onSerch(e:string) {
    this.serchTextChange.emit(e)
  }
}

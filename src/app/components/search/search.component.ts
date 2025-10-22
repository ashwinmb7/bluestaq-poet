import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() search = new EventEmitter<{author: string, title: string}>();
  
  author: string = '';
  title: string = '';

  onSearch() {
    this.search.emit({
      author: this.author.trim(),
      title: this.title.trim()
    });
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { PoemListComponent } from './components/poem-list/poem-list.component';
import { PoetryService } from './services/poetry';
import { Poem } from './models/poem';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SearchComponent, PoemListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Poetry Search';
  poems: Poem[] = [];
  loading = false;
  error = '';

  constructor(private poetryService: PoetryService) {}

  onSearch(searchParams: {author: string, title: string}) {
    this.loading = true;
    this.error = '';
    this.poems = [];

    const { author, title } = searchParams;

    let searchObservable: Observable<Poem[]>;
    
    if (author && title) {
      searchObservable = this.poetryService.searchByAuthorAndTitle(author, title);
    } else if (author) {
      searchObservable = this.poetryService.searchByAuthor(author);
    } else if (title) {
      searchObservable = this.poetryService.searchByTitle(title);
    } else {
      this.loading = false;
      return;
    }

    searchObservable.subscribe({
      next: (data) => {
        this.poems = data;
        this.loading = false;
      },
      error: (err: Error) => {
        this.error = err.message;
        this.loading = false;
      }
    });
  }

  // NEW: Handle random poem request
  onRandomPoem() {
    this.loading = true;
    this.error = '';
    this.poems = [];

    this.poetryService.getRandomPoems(5).subscribe({
      next: (data) => {
        this.poems = data;
        this.loading = false;
      },
      error: (err: Error) => {
        this.error = err.message;
        this.loading = false;
      }
    });
  }
}
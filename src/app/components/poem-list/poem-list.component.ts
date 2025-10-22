import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Poem } from '../../models/poem';

@Component({
  selector: 'app-poem-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poem-list.component.html',
  styleUrls: ['./poem-list.component.css']
})
export class PoemListComponent implements OnInit {
  @Input() poems: Poem[] = [];
  @Input() loading: boolean = false;
  @Input() error: string = '';

  lengthFilter: 'all' | 'short' | 'medium' | 'long' | 'favorites' = 'all';

  ngOnInit() {
    this.loadFavorites();
  }

  setLengthFilter(filter: 'all' | 'short' | 'medium' | 'long' | 'favorites') {
    this.lengthFilter = filter;
  }

  getShortPoems(): Poem[] {
    return this.poems.filter(poem => poem.lines.length <= 10);
  }

  getMediumPoems(): Poem[] {
    return this.poems.filter(poem => poem.lines.length > 10 && poem.lines.length <= 30);
  }

  getLongPoems(): Poem[] {
    return this.poems.filter(poem => poem.lines.length > 30);
  }

  getFavoritePoems(): Poem[] {
    return this.poems.filter(poem => poem.isFavorite);
  }

  getFilteredPoems(): Poem[] {
    switch(this.lengthFilter) {
      case 'short': return this.getShortPoems();
      case 'medium': return this.getMediumPoems();
      case 'long': return this.getLongPoems();
      case 'favorites': return this.getFavoritePoems();
      default: return this.poems;
    }
  }

  toggleFavorite(poem: Poem) {
    poem.isFavorite = !poem.isFavorite;
    this.saveFavorites();
  }

  private saveFavorites() {
    const favorites = this.poems
      .filter(p => p.isFavorite)
      .map(p => ({ title: p.title, author: p.author }));
    localStorage.setItem('favoritePoems', JSON.stringify(favorites));
  }

  private loadFavorites() {
    const stored = localStorage.getItem('favoritePoems');
    if (stored) {
      const favorites: { title: string; author: string }[] = JSON.parse(stored);
      this.poems.forEach(poem => {
        poem.isFavorite = favorites.some(
          fav => fav.title === poem.title && fav.author === poem.author
        );
      });
    }
  }
}
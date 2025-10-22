import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Poem } from '../models/poem';

@Injectable({
  providedIn: 'root'
})
export class PoetryService {
  private apiUrl = 'https://poetrydb.org';

  constructor(private http: HttpClient) { }

  searchByAuthor(author: string): Observable<Poem[]> {
    const encodedAuthor = encodeURIComponent(author);
    return this.http.get<Poem[]>(`${this.apiUrl}/author/${encodedAuthor}`)
      .pipe(catchError(this.handleError));
  }

  searchByTitle(title: string): Observable<Poem[]> {
    const encodedTitle = encodeURIComponent(title);
    return this.http.get<Poem[]>(`${this.apiUrl}/title/${encodedTitle}`)
      .pipe(catchError(this.handleError));
  }

  searchByAuthorAndTitle(author: string, title: string): Observable<Poem[]> {
    const encodedAuthor = encodeURIComponent(author);
    const encodedTitle = encodeURIComponent(title);
    return this.http.get<Poem[]>(`${this.apiUrl}/author,title/${encodedAuthor};${encodedTitle}`)
      .pipe(catchError(this.handleError));
  }

  // NEW: Get random poems
  getRandomPoems(count: number = 5): Observable<Poem[]> {
    return this.http.get<Poem[]>(`${this.apiUrl}/random/${count}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred while fetching poetry data.';
    
    if (error.status === 0) {
      errorMessage = 'Network error. Please check your connection.';
    } else if (error.status === 404) {
      errorMessage = 'No poems found. Try using just the last name (e.g., "Frost" instead of "Robert Frost")';
    } else if (error.status !== 200) {
      errorMessage = `Server error: ${error.status} - ${error.message}`;
    }
    
    return throwError(() => new Error(errorMessage));
  }
}
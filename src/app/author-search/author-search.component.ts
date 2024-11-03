import { Component } from '@angular/core';
import { BooksService } from '../books/service/books.service';
import { Author } from '../books/model/book';
@Component({
  selector: 'app-author-search',
  standalone: true,
  imports: [],
  templateUrl: './author-search.component.html',
  styleUrl: './author-search.component.css'
})
export class AuthorSearchComponent {
  authorId: string = '';
  author: Author | null = null;
  message: string = '';

  constructor(private booksService: BooksService) {}

  onSearch(): void {
    if (!this.authorId) {
      this.message = 'Veuillez entrer un ID d\'auteur.';
      return;
    }

    this.booksService.getAuthorById(this.authorId).subscribe({
      next: (data) => {
        this.author = data;
        this.message = '';
      },
      error: (err) => {
        this.author = null;
        this.message = 'Auteur non trouvé.';
      }
    });
  }
}

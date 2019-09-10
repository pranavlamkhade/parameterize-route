import { Component, OnInit } from '@angular/core';
import { Book } from '../services/book';
import { BookService } from '../services/book.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BookService) { }
  getBooks(): void {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }
  ngOnInit(): void {
    this.getBooks();
  }

}

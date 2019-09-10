import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  BOOKS: Book[] = [
    { id: 1, name: 'JavaScript', price: '1000', description: 'Javascript Tutorials' },
    { id: 2, name: 'Angular', price: '1600', description: 'Angular Tutorials' },
    { id: 3, name: 'SQL Server', price: '1500', description: 'SQL Server Tutorials' },
    { id: 4, name: 'TypeScript', price: '2500', description: 'TypeScript Tutorials' }
  ];

getBooks(): Observable<Book[]> {
  return Observable.of(this.BOOKS);
}
getBook(id: number): Observable<Book> {
  return this.getBooks().map(books => books.find(book => book.id === id));
  }
}

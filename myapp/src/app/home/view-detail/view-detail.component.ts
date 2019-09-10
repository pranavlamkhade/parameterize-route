import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Book } from 'src/app/services/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {
  book: Book = new Book();
  constructor(private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location) { }

  ngOnInit(): void{

    alert(this.route.snapshot.params.id);
  this.bookService.getBook(parseInt(this.route.snapshot.params.id)).subscribe(book)
  }

}

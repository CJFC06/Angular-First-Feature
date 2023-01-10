import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: any[] = [
    {
      id: 1,
      name: 'Rowell',
      authors: ['Rowell Esguerra'],
      isbn: '12314123'
    },
    {
      id: 2,
      name: 'Esguerra',
      authors: ['Esguerra Rowell'],
      isbn: '3123123123123'
    },
    {
      id: 3,
      name: 'Rowell Rowell',
      authors: ['Esguerra Esguerra'],
      isbn: '1231241231'
    }
  ];

  constructor() {}

  getBooks() {
    return this.books;
  }
}

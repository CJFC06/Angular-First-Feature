import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: any[] = [
    {
      id: 1,
      title: 'Ride to Marinduque',
      description: 'Riding needs',
      author: 'Rowell Esguerra',
      name: 'Cams',
      comment: 'Ride safe!',



    },
    {
      id: 2,
      title: 'Best Helmets',
      description: 'Best helmets within cheap price',
      author: 'Rowell Esguerra',
      name: 'JR',
      comment: 'Wow what a great deal',



    }
  ];


  constructor() {
  }

  getBlogs() {
    return this.blogs;
  }
}
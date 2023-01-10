import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: any[] = [
    {
      name: 1,
      title: 'Ride to Marinduque',
      description: 'Riding needs',
      author: 'Rowell Esguerra',
      comments: [
        {
          name: 'Cams',
          comment: 'Ride safe!',
          
        }
      ]
    },
    {
      id: 2,
      title: 'Best Helmets',
      description: 'Best helmets within cheap price',
      author: 'Rowell Esguerra',
      comments: [
        {
          name: 'JR',
          comment: 'Wow what a great deal',
          
        }
      ]
    }
  ];
    

  constructor() { 
}

getBlogs() {
    return this.blogs;
  }
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BlogService {
  public allBlogs = [{
    "blogId": "1",
    "lastModified": "2019-09-19T09:55:23.845z",
    "created": "2019-09-19T09:55:23.845z",
    "tags": [],
    "author": "Admin",
    "category": "comedy",
    "isPublished": true,
    "views": 0,
    "bodyHtml": "this is blog body",
    "description": "this is blog 1 description",
    "title": "This is blog 1"
  },
  {
    "blogId": "2",
    "lastModified": "2019-09-19T21:33:23.845z",
    "created": "2019-09-19T21:33:23.845z",
    "tags": [],
    "author": "Admin",
    "category": "comedy",
    "isPublished": true,
    "views": 0,
    "bodyHtml": "<h1>This is big text</h1><p>Small text</p>",
    "description": "This is the description of the example blog and this is example",
    "title": "This is an example blog "
  },
  {
    "blogId": "3",
    "lastModified": "2019-09-19T14:22:23.845z",
    "created": "2019-09-19T14:22:23.845z",
    "tags": [],
    "author": "Admin",
    "category": "comedy",
    "isPublished": true,
    "views": 0,
    "bodyHtml": "this is blog body . this is blog body . this is blog body",
    "description": "this is third blog description",
    "title": "This is third blog "
  }]




  public currentBlog;


  constructor() {
    console.log("service constructor is called ");
  }

  public getAllBlogs() {

    return this.allBlogs;
  }





  public getSingleBlogInformation(currentBlogId): any {
    // using a for of loop here from type script 
    //www.typrscript.lang.org

    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;

      }

    }
    console.log(this.currentBlog);
    return this.currentBlog;
  }//end get blog information function



}

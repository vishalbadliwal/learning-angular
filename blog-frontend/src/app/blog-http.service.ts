import { Injectable } from '@angular/core';
// importing http client to make the requests
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// import observable  related code 
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public authToken = 'ODVkMWY2ODQ4MzY1ZTdmYzc0Y2U5NTZmNDUzNmNkOTg5MmU1ODFjZWMzOWQ3NGQ5NmI3YjQ0ZTk4NWFhYTI2Y2MyODY5YmQ1NDc0MTcwNDQ0YjkyYjdiN2Y4OTY4MTkwNWViZTBhOTcwMGNmMDQ3ZTQ2OGE2OWNmYWE4NWJhOTgyNQ'

  constructor(private _http: HttpClient) {
    console.log("blog-http service was called ")
  }

  //exception handler
  private handlerError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message)
    return Observable.throw(err.message);

  }
  public getAllBlogs(){

    let myResponse = this._http.get(this.baseUrl + '/all?authToken=' + this.authToken);
    console.log(myResponse)
    return myResponse;


  }





  public getSingleBlogInformation(currentBlogId): any {
    let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authToken);
    console.log(myResponse)
    return myResponse;



  }//end get blog information function
  public createBlog(blogData): any {

    let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData);
    return myResponse;


  }//end create blog
  public deleteBlog(blogId): any {
    let data = {}
    let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken, data);
    return myResponse;


  }//end delete blog
  public editblog(blogId, blogData): any {

    let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken, blogData);
    return myResponse;


  }//end create blog


}

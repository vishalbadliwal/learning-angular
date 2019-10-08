import { Component, OnInit, OnDestroy } from '@angular/core';
// import route related code 
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { ToastrService } from 'ngx-toastr';
import { Location} from '@angular/common'
import { from } from 'rxjs';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit , OnDestroy {

  public currentBlog;

  constructor(private _route: ActivatedRoute, private router: Router, public blogHttpService:BlogHttpService,private toastr:ToastrService,private location:Location) {
    console.log(" blog-view constructor is called")


  }

  ngOnInit() {
    console.log( " blog view OnInit is called");
    // getting blog id from the route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    // calling the function to get hte blog with this blogId out of the overall array 
   this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
    data=>{
      console.log(data);
      this.currentBlog = data['data'];
    },
    error=>{
      console.log("some error occured") 
      console.log(error.errorMessage)
       
     }
   )
     console.log(this.currentBlog )
  }

  ngOnDestroy(){
    console.log("blog view OnDestroy is called");
    // getting blog id from the route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
   console.log(myBlogId);
  }
  public deleteThisBlog():any{
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(

    data =>{
      console.log('BLog created')
      console.log(data);
      this.toastr.success("Blog Deleted Successfully",'Success!');
      setTimeout(()=>{
        this.router.navigate(['/home',]);
      },1000)
    },
    error=>{
      console.log("some error occured");
      console.log(error.message);
      this.toastr.error("some error occured",'Error');

  })


  }


  public goBackToPreviousPage():any{
    this.location.back();
  }
}

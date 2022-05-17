import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-entries',
  templateUrl: './blog-entries.component.html',
  styleUrls: ['./blog-entries.component.css']
})
export class BlogEntriesComponent implements OnInit {
  public posts: any = [];
  public isLoading: boolean = true;
  public everythingOk: boolean = false;

  public hide: boolean = true;

  constructor(private blogService: BlogService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.blogService.getAllPosts().subscribe(
      data => { 
        console.log(data);
        this.posts = data;
        this.isLoading = false;
        this.everythingOk = true;
      },
      err => { 
        console.log(err.ok);
        this.isLoading = false;
        this.everythingOk = false;
        this.toastr.error('El servidor está tardando en responder', 'Error de conexión'); 
      },
    );
  }

}

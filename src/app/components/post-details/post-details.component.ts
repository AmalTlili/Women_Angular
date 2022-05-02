import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'app/models/post.model';
import { PostService } from 'app/services/post.service';
import * as e from 'express';
import { Router } from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentPost: Post = {
    data: '',
    date: new Date(),
    name_file: '',
    topic: '',
    type: '',
    types: ''
  };
  message = '';
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if(!this.viewMode){
      this.message = '';
      this.getPost(this.route.snapshot.params["id"]);
    }
  }
  getPost(id: string): void{
    this.postService.get(id)
    .subscribe({
      next: (data) => {
        this.currentPost = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
   updatedPublished(): void{
     const data ={
      data: this.currentPost.data,
      date: this.currentPost.date,
      name_file: this.currentPost.name_file,
      topic: this.currentPost.topic,
      type: this.currentPost.type,
      types: this.currentPost.types,
      
     };
     this.message = '';
     this.postService.update(this.currentPost.id, data)
     .subscribe({
       next: (res) => {
         console.log(res);
         this.message = res.message ? res.message : 'The status was updated successfully!';

       },
       error:(e) => console.error(e)
     });
   }
   deletePost(): void{
     this.postService.delete(this.currentPost.id)
     .subscribe({
       next: (res) => {
         console.log(res);
         this.router.navigate(['/post']);
       },
       error: (e) => console.error(e)
     });
   }
}

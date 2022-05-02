import { Component, OnInit } from '@angular/core';
import { Post } from 'app/models/post.model';
import { PostService } from 'app/services/post.service';
import { data } from 'jquery';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
post?: Post[];
currentPost: Post= {};
currentIndex = -1;
topic = '';
message = '';
  constructor(private postService: PostService) { }
  
  ngOnInit(): void {
    this.retrievePost();
  }
  retrievePost(): void{
    this.postService.getAll()
    .subscribe({
      next: (data) => {
        this.post = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
refreshList(): void {
  this.retrievePost();
  this.currentPost = {};
  this.currentIndex = -1;
}
setActivePost(post: Post, index: number): void{
  this.currentPost = post;
  this.currentIndex = index;
}
removeAllPost(): void{
  this.postService.delete(this.currentPost.id)
  .subscribe({
    next: (res) =>{
    this.refreshList();
    },
    error: (e) => console.error(e)
  });
}
updatePost(): void{
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
searchTopic(): void{
  this.currentPost = {};
  this.currentIndex = -1;
  this.postService.getAll()
  .subscribe({
    next: (data) => {
      this.retrievePost;
      // post = data;
      // console.log(data);
    },
    error: (e) => console.error(e)
  });
}
}

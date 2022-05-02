import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Post } from 'app/models/post.model';
import { PostService } from 'app/services/post.service';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
post: Post={
  data: '',
  date: new Date(),
  name_file: '',
  topic: '',
  type: '',
  types: '',
}
submitted = false;
  constructor(private postService: PostService) { }
  ngOnInit(): void {
  }
 savePost(): void {
   const data ={
     data: this.post.data,
     date: this.post.date,
     name_file: this.post.name_file,
     topic: this.post.topic,
     type: this.post.type,
     types: this.post.types
    };
    this.postService.create(data)
    .subscribe({
      next:(res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
 }
 newPost(): void {
   this.submitted = false;
   this.post = {
     data:  '',
     date: new Date(),
     name_file: '',
     topic: '',
     type: '',
     types: ''
   };
 }
}

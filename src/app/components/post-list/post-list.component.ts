import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[];
  
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts()
      .then(response => response.json())
      .then(data => {
        this.posts = data;
      })
  }

}

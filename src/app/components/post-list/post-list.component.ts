import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[];
  
  constructor(private postService: PostService, 
              private loadingSpinner: Ng4LoadingSpinnerService, 
              private notifier: NotifierService) { }

  ngOnInit() {
    this.loadingSpinner.show();
    this.postService.getPosts()
      .then(response => response.json())
      .then(data => {
        this.posts = data;
      })
      .catch(err => {
        console.log('err');
        this.notifier.notify('error', 'Error while retrieving posts!');
      })
      .finally(() => {
        this.loadingSpinner.hide();
      })
  }

}

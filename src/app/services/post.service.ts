import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = `${environment.apiUrl}/posts`;

  private readonly _posts = new BehaviorSubject<Post[]>([]);
  readonly posts$ = this._posts.asObservable();

  constructor(private http: HttpClient) {
    this.http.get<Post[]>(this.apiUrl).subscribe(data => {
      this.posts = data;
    })
  }

  private get posts(){
    return this._posts.getValue();
  }

  private set posts(val: Post[]){
    this._posts.next(val);
  }

  getPosts():Observable<Post[]>{
    return this.posts$;
  }

  addPost(post: Post){
    this.http.post(this.apiUrl, post).subscribe(data => {
      this.posts = [
        ...this.posts,
        post
      ];
    })
  }

  deletePost(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(data => {
      this.posts = this.posts.filter(p => p.id != id);
    })
  }
  
  updatePost(id: number, userId: number, title: string, body: string) {
    let post = this.posts.filter(p => p.id == id)[0];
    if (post){
      this.http.put(this.apiUrl, {id, userId, title, body}).subscribe(data => {
    
        const index = this.posts.indexOf(post);
        this.posts[index] = {
          id,
          userId,
          title, 
          body
        }   
      })
    }
  }

}

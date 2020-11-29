import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = `${environment.apiUrl}/posts`;

  constructor(private http: HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl);
  }
}

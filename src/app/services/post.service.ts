import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = `${environment.apiUrl}/posts`;

  constructor() { }

  getPosts(){
    return fetch(this.apiUrl);
  }
}

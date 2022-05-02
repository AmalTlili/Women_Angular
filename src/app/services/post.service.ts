import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'app/models/post.model';
const baseUrl = 'http://localhost:8091/post/'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Post[]>{
   return this.http.get<Post[]>(baseUrl + "retrievePost");
  }
  get(id:any): Observable<Post> {
 
    return this.http.get(baseUrl+"retrievePost/{id}" +id);
  }
  create(data:any): Observable<any>{
    return this.http.post(baseUrl +"addPost",data);
  }
  update(id: any, data: any): Observable<any>{
    console.log(data);
    return this.http.put(baseUrl + "updatePost/" +id, data);
  }
  deleteAll(id:any): Observable<any>{
    return this.http.delete(baseUrl+"deletePost/{id}");
  }
  delete(id: any): Observable<any> {
 return this.http.delete(baseUrl + "deletePost/{id}" +id)
  }
  findByTopic(topic:any): Observable<Post[]> {
    return this.http.get<Post[]>(baseUrl +"getPost");
  }
}

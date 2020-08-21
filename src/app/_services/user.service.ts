import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new Headers({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: 'root' })
export class UserService {

    public static BaseUrl = "http://localhost:3000/";

    constructor(private http: Http) { }
    postfitnessdata(data: any) :Observable<any>{
      return this.http.post(UserService.BaseUrl+'allfriends',data,httpOptions).pipe(map((response: Response) => response.json()));
    }
    getfitnessdata() {
      return this.http.get(UserService.BaseUrl+'allfriends',httpOptions).pipe(map((response: Response) => response.json()));
    }
    editfitnessdata(id:number,data: any) :Observable<any>{
      return this.http.put(UserService.BaseUrl+"allfriends/"+id,data);
    }
    getfitnessdatabyid(id:number){
      return this.http.get(UserService.BaseUrl+"allfriends/"+id);
    }
    delUser(id:number) :Observable<any>{
      return this.http.delete(UserService.BaseUrl+"allfriends/"+id);
    }
    postmessage(data){
      return this.http.post(UserService.BaseUrl+'allmessage',data,httpOptions).pipe(map((response: Response) => response.json()));
    }
}
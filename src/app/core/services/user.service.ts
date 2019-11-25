import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

export interface User {
  login: string;
  email: string;
  name: string;
  userId: string;
}
@Injectable()
export class UserService {
  constructor(private request: RequestService) {}

  getUser(id: string): Observable<User> {
    return this.request.get<User>(`users/${id}`);
  }

  getUserName(id: string): Observable<string> {
    return this.getUser(id).pipe(pluck('name'));
  }
}

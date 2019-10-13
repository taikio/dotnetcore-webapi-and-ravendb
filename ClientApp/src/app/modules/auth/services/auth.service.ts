import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {
  environment
} from 'src/environments/environment';
import {
  Observable,
  of,
  Subject,
  defer,
  BehaviorSubject
} from 'rxjs';
import { HttpHelperService } from '../../http/services/http-helper.service';
import { switchMap, map } from 'rxjs/operators';


export interface AuthToken {
  access_token: string;
}

export interface User {
  username: string;
  password: string;
  token?: AuthToken | null;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logger = new BehaviorSubject<boolean>(false);

  constructor(private httpHelper: HttpHelperService) {
    this.logger.next(!!this.getCurrentUser());
  }

  isLoggedIn(): Observable<boolean> {
    return this.logger.asObservable();
  }

  isLogged(): boolean {
    let currentUser = this.getCurrentUser();

    return currentUser != null && currentUser.token != null;
  }

  public login(username: string, password: string): Observable<User> {
    const body = `grant_type=password&username=${username}&password=${password}`;
    const request = this.httpHelper.post('/connect/token', body, true) as Observable<AuthToken>;

    return request.pipe(
      map((token) => {

        const user: User = {
          username,
          password,
          token: {
            access_token: token.access_token
          }
        };

        localStorage.setItem('current_user', JSON.stringify(user));
        this.logger.next(true);

        return user;
      })
    ) as Observable<User>;
  }

  public logout() {
    this.logger.next(false);
    localStorage.removeItem('current_user');
  }

  public getCurrentUser(): User {
    return JSON.parse(localStorage.getItem('current_user')) as User;
  }
}

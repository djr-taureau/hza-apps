import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { catchError, concatMap, shareReplay } from 'rxjs/operators';
import { environment } from '@hza/shared/environments';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth0Client$ = (from(
    createAuth0Client({
      domain: environment.domain,
      client_id: environment.clientId,
      redirect_uri: `${window.location.origin}`,
    })
  ) as Observable<Auth0Client>).pipe(
    shareReplay(1),
    catchError(err => throwError(err))
  );

  isAuthenticated$ = this.auth0Client$.pipe(
    concatMap((client: Auth0Client) => from(client.isAuthenticated()))
  );

  handleRedirectCallback$ = this.auth0Client$.pipe(
    concatMap((client: Auth0Client) => from(client.handleRedirectCallback()))
  );

  constructor() {}

  getUser$(options?): Observable<any> {
    return this.auth0Client$.pipe(
      concatMap((client: Auth0Client) => from(client.getUser(options)))
    );
  }

  login(redirectPath: string = '/') {
    this.auth0Client$.subscribe((client: Auth0Client) => {
      client.loginWithRedirect({
        redirect_uri: `${window.location.origin}`,
        appState: { target: redirectPath },
      });
    });
  }

  logout() {
    this.auth0Client$.subscribe((client: Auth0Client) => {
      client.logout({
        client_id: environment.clientId,
        returnTo: `${window.location.origin}`,
      });
    });
  }
}

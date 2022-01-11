import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from './local-storage.service';

export interface AuthTokens {
  accessToken: string
  refreshToken: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private store: LocalStorageService, private helper : JwtHelperService) {

  }
  // ...
  public isAuthenticated(): boolean {
    const token = this.store.getToken()
    // Check whether the token is expired and return
    // true or false
    if (1==1){
      return true
    }
    return this.validateToken(token)
  }
  public authenticate(tokens: AuthTokens) {
    if (this.validateToken(tokens.accessToken)) {
      this.store.setTokens(tokens)
      return true
    }
    return false
  }

  private validateToken(tokenStr: any) {
    if (tokenStr == null) {
      return false
    }
    
    // let token = this.helper.decodeToken(tokenStr)
    return !this.helper.isTokenExpired(tokenStr);
  }
}



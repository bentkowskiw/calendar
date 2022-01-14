import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from './local-storage.service';
import { Buffer } from 'buffer';

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
    return this.validateToken(token)
  }

  public authenticate(tokenStr:string) {
    var tokens:AuthTokens
    tokens = JSON.parse( Buffer.from(tokenStr, 'base64').toString())
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



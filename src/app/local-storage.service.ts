import { Injectable } from '@angular/core';
import { AuthTokens } from './auth.service';



const token = "accessToken"
const refreshToken = "refreshToken"
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {


  constructor() {
  }

  setToken(data: string) {
    localStorage.setItem(token, data)
  }



  getToken() {
    return localStorage.getItem(token)
  }
  getRefreshToken() {
    return localStorage.getItem(refreshToken)
  }

  setTokens(tokens: AuthTokens) {
    localStorage.setItem(token, tokens.accessToken)
    localStorage.setItem(refreshToken, tokens.refreshToken)
  }

  clearToken() {
    localStorage.removeItem(token)
  }

  clearAllLocalStorage() {
    localStorage.clear()
  }
}

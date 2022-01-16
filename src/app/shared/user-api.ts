export interface User{
    name:string
    uuid:string
    email:string
  }

  export interface LoginResponse{
    user:User
    token:string
  }
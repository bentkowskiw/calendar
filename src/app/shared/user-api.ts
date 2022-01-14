export interface User{
    firstName:string
    lastName:string
    uuid:string
    email:string
  }

  export interface LoginResponse{
    user:User
    token:string
  }
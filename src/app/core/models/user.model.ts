export interface UserModel {
  username : string,
  email : string ,
  // password? : string | null
}

export interface UserRegistrationModel {
  username?: string | null,
  email?: string | null,
  password?: string | null
}

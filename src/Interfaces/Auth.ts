export interface SuccessLogin {
  message: string
  user: UserInterface
  token: string
}

export interface FaildLogin {
  message: string
  statusMsg:string
}

export interface UserInterface {
  name: string
  email: string
  role: string
}

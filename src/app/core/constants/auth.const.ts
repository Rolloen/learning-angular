export const AUTH_CONST = {
  'USERNAME_MINLENGTH' : 3,
  'PASSWORD_MINLENGTH' : 8
} as const

export const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

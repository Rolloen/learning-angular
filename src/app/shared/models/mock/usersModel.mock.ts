import { UserModel, UserRegistrationModel } from "src/app/core/models/user.model";

export const validRegistrationUserMock: UserRegistrationModel = {
  email: 'test@test.com',
  username: 'tester',
  password: 'Testing@123'
}
export const validUserDataMock: UserModel = {
  email: 'test@test.com',
  username: 'tester',
  creationDate: new Date('2023-01-01T01:00:00')
}

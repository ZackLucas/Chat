import { InvalidParamError } from "@/core/domain";

export class User {
  public readonly password: String;
  public readonly userId?: String;
  public name: String;
  public age: Number;
  public email: String;
  public phoneNumber: String;

  constructor(data: User.Data) {
    this.validator(data);

    this.password = data.password;
    this.userId = data.userId;
    this.name = data.name;
    this.age = data.age;
    this.email = data.email;
    this.phoneNumber = data.phoneNumber;
  }

  private validator(data: User.Data) {
    if (!data.name) throw new InvalidParamError('name:', 'Parâmetro não enviado.');
    if (!data.email) throw new InvalidParamError('email:', 'Parâmetro não enviado.');
  }
}

export namespace User {
  export interface Data {
    userId?: String;
    name: String;
    age?: Number;
    email: String;
    phoneNumber?: String;
    password?: String;
  }
}

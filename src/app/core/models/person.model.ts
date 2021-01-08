export class Person {
  constructor(
    public id: number,
    public names: string,
    public surnames: string,
    public email: string,
    public photo: string,
    public password: string,
    public sexo: boolean,
    public google: boolean,
    public verifiedEmail: boolean,
    public active: boolean,
    public createdAt: Date,
    public updateAt: Date
  ) {}
}

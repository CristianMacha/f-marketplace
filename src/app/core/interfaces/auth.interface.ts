export interface ILogin {
  email: string;
  password: string;
}

export interface IPerson {
  names: string;
  surnames: string;
  email: string;
  photo: string;
  sexo: boolean;
}

export interface IResponseLogin {
  jwt: string;
  infoPerson: IPerson;
}

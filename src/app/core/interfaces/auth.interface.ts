export interface ILogin {
  email: string;
  password: string;
}

interface IPerson {
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

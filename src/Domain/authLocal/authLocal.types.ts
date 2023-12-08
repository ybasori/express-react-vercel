interface IAuthData {
  token: string;
  name: string;
}

export interface IAuthLocal {
  data: IAuthData | null;
}

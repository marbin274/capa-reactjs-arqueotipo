import axiosApi from "@inteligo/api/config/private.api";
export interface AuthApiLoginProps {
  username: string;
  password: string;
}

export class AuthApi {
  static async login(params: any) {
    return await axiosApi.post<any>(`/auth/login`, {
      email: params.username,
      password: params.password,
      returnSecureToken: true,
    });
  }
}

export interface IAuthRequest {
    email: string,
    password: string
}

export interface IAuthResponse {
    token: string;
}

export interface ILoginRequest extends IAuthRequest {
}

export interface IRegisterRequest extends IAuthRequest {
    // firstName: string;
    // lastName: string;
    // middleName?: string;
    confirmPassword: string;
}
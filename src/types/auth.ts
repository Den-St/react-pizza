export const RegisterInitialState = {
    email: '',
    password: '',
    confirmPass: '',
}

export type RegisterValuesT = {
    email: string,
    password: string,
    confirmPass: string,
}

export type RegFields = 'email' | 'password'  | 'confirmPass';

export type ErrorT = {
    key:RegFields,
    message:string,
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    picture?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type SignIn = Pick<IUser, 'email' | 'password'>;
export type SignUp = Omit<IUser, 'createdAt' | 'updatedAt' | 'id'>;
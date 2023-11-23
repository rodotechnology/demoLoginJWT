export interface User {
    email: string;
    password: string;
}

export interface Profile {
    id: number;
    email: string;
    password: string;
    name: string;
    role: string;
    avatar: string;
}
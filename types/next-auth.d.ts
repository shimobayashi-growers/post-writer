import { User } from 'next-auth';
import { Session } from './../node_modules/@auth/core/src/types';

type UserId = string;

declare module "next-auth/jwt" {
    interface JWT {
        id: UserId;
    }
}

declare module "next-auth" {
    interface Session {
        user: User & {
            id: UserId;
        };
    }
}
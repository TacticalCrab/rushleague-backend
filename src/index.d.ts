import {User} from "./db/models/user.model";

export {}

declare global {
    namespace Express {
        export interface Request {
            user: User;
        }
    }
}

declare module "express-session" {
    export interface SessionData {
        userId: string;
    }
}
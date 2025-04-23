import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"

import { db } from "@/database/db"
import * as schema from "@/database/schema"
import { nextCookies } from "better-auth/next-js"

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        usePlural: true,
        schema
    }),
    session: {
        cookieCache: {
            enabled: true,
            maxAge: 5 * 60 
        }
    },
    emailAndPassword: {
        enabled: true
    },
    plugins: [
        nextCookies()
    ]
})

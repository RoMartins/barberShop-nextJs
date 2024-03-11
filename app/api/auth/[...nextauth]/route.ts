import { db } from '@/app/lib/prisma'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { Adapter } from 'next-auth/adapters'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

const handler  = 
    NextAuth({
        adapter: PrismaAdapter(db) as Adapter,
        providers : [
            GoogleProvider({
                clientId: '497153110857-8ln6s54vm4dven0l4bqalp7scfqvlqjs.apps.googleusercontent.com',
                clientSecret: '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',
            })
        ]
    })



export {handler as GET, handler as POST}